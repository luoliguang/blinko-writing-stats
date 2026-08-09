/** @jsxImportSource preact */
import { useState, useEffect, useRef } from 'preact/hooks';
import en from './locales/en.json';
import zh from './locales/zh.json';

// ── Types ────────────────────────────────────────────────
interface DayCount { date: string; count: number; }
interface MonthData {
  month: string;
  totalWords: number;
  tagStats: { tagName: string; count: number }[];
}
type Locale = typeof en;
type Tab = 'heatmap' | 'weekly' | 'tags' | 'trends';

// ── Helpers ──────────────────────────────────────────────
function fmtNum(n: number) {
  if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

function calcStreak(data: DayCount[]) {
  if (!data.length) return { cur: 0, longest: 0 };
  const set = new Set(data.map(d => d.date));
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let cur = 0;
  for (let i = 0; i <= 365; i++) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    if (set.has(fmt(d))) cur++; else break;
  }
  const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
  let longest = 0, temp = 0;
  for (let i = 0; i < sorted.length; i++) {
    temp = i === 0 ? 1
      : (new Date(sorted[i].date).getTime() - new Date(sorted[i - 1].date).getTime()) / 86400000 === 1
        ? temp + 1 : 1;
    if (temp > longest) longest = temp;
  }
  return { cur, longest };
}

function lastNMonths(n: number) {
  const months: string[] = [];
  const d = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const m = new Date(d.getFullYear(), d.getMonth() - i, 1);
    months.push(`${m.getFullYear()}-${String(m.getMonth() + 1).padStart(2, '0')}`);
  }
  return months;
}

// ── SVG Icons ────────────────────────────────────────────
const IconPen = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
  </svg>
);
const IconText = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconFlame = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

// ── VBar tooltip (relative positioning, works in dialogs) ─
function VBarItem({ value, label, max, color, unit }: { value: number; label: string; max: number; color: string; unit: string }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', position: 'relative' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      {show && value > 0 && (
        <div style={{
          position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(10,10,20,0.88)', color: '#fff',
          padding: '3px 8px', borderRadius: '6px', fontSize: '10px',
          whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 10,
          marginBottom: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>{label}: {fmtNum(value)} {unit}</div>
      )}
      <div style={{
        width: '100%', borderRadius: '3px 3px 0 0',
        background: value > 0 ? color : 'rgba(128,128,128,0.1)',
        height: `${Math.max((value / max) * 60, value > 0 ? 4 : 0)}px`,
        transition: 'height 0.5s cubic-bezier(.4,0,.2,1)',
        opacity: value > 0 ? (0.35 + 0.65 * (value / max)) : 1,
      }} />
      <span style={{ fontSize: '9px', opacity: 0.4, marginTop: '3px', fontWeight: 500, lineHeight: 1 }}>{label}</span>
    </div>
  );
}

function VBar({ data, labels, color, unit }: { data: number[]; labels: string[]; color: string; unit: string }) {
  const max = Math.max(...data, 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px', width: '100%' }}>
      {data.map((v, i) => (
        <VBarItem key={i} value={v} label={labels[i]!} max={max} color={color} unit={unit} />
      ))}
    </div>
  );
}

// ── Horizontal bar (tags) ────────────────────────────────
function HBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
      <span style={{ fontSize: '11px', opacity: 0.6, width: '80px', flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, background: 'rgba(128,128,128,0.1)', borderRadius: '4px', height: '7px', overflow: 'hidden' }}>
        <div style={{
          width: `${(value / max) * 100}%`, height: '100%',
          background: color, borderRadius: '4px',
          transition: 'width 0.6s cubic-bezier(.4,0,.2,1)',
        }} />
      </div>
      <span style={{ fontSize: '11px', opacity: 0.45, width: '28px', textAlign: 'right', flexShrink: 0 }}>{value}</span>
    </div>
  );
}

// ── Heatmap — tooltip as info bar (no fixed positioning) ──
function Heatmap({ data, unit }: { data: DayCount[]; unit: string }) {
  const countMap: Record<string, number> = {};
  data.forEach(d => { countMap[d.date] = d.count; });
  const max = Math.max(...Object.values(countMap), 1);
  const [info, setInfo] = useState('');

  const weeks: { date: string; count: number }[][] = [];
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const start = new Date(today); start.setDate(start.getDate() - 23 * 7 + 1);
  while (start.getDay() !== 0) start.setDate(start.getDate() - 1);

  let week: { date: string; count: number }[] = [];
  for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
    const ds = d.toISOString().slice(0, 10);
    week.push({ date: ds, count: countMap[ds] || 0 });
    if (week.length === 7) { weeks.push(week); week = []; }
  }
  if (week.length) weeks.push(week);

  const getColor = (count: number) => {
    if (count === 0) return 'rgba(128,128,128,0.12)';
    const r = count / max;
    if (r < 0.25) return 'rgba(99,102,241,0.3)';
    if (r < 0.5) return 'rgba(99,102,241,0.52)';
    if (r < 0.75) return 'rgba(99,102,241,0.72)';
    return '#6366f1';
  };

  return (
    <div>
      {/* scrollbar hidden via inline style + global style tag */}
      <style>{`.ws-hm::-webkit-scrollbar{display:none}`}</style>
      <div class="ws-hm" style={{ overflowX: 'auto', overflowY: 'visible', scrollbarWidth: 'none' }}>
        <div style={{ display: 'inline-flex', gap: '3px', minWidth: 'max-content' }}>
          {weeks.map((wk, wi) => (
            <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {wk.map((cell, di) => (
                <div key={di}
                  onMouseEnter={() => setInfo(cell.count > 0 ? `${cell.date} · ${cell.count} ${unit}` : cell.date)}
                  onMouseLeave={() => setInfo('')}
                  style={{
                    width: '11px', height: '11px', borderRadius: '2px',
                    background: getColor(cell.count),
                    cursor: 'default',
                    transition: 'opacity 0.1s',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* info bar replaces floating tooltip */}
      <div style={{ height: '16px', fontSize: '11px', opacity: info ? 0.55 : 0, color: 'inherit', marginTop: '5px', transition: 'opacity 0.15s' }}>
        {info}
      </div>
    </div>
  );
}

// ── Stat card ────────────────────────────────────────────
function StatCard({ value, label, icon, accent }: { value: string | number; label: string; icon: any; accent: string }) {
  return (
    <div style={{
      borderRadius: '12px', padding: '14px 10px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      background: `${accent}10`, border: `1px solid ${accent}20`,
    }}>
      <span style={{ color: accent, opacity: 0.85 }}>{icon}</span>
      <span style={{ fontSize: '22px', fontWeight: 800, lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: '10px', opacity: 0.5, textAlign: 'center', fontWeight: 600 }}>{label}</span>
    </div>
  );
}

// ── Skeleton ──────────────────────────────────────────────
function Skeleton() {
  return (
    <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '16px' }}>
      <style>{`@keyframes ws-pulse{0%,100%{opacity:.3}50%{opacity:.65}}`}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[110, 60, 60].map((h, i) => (
          <div key={i} style={{ height: `${h}px`, borderRadius: '12px', background: 'rgba(128,128,128,0.1)', animation: `ws-pulse 1.4s ease-in-out ${i * 0.12}s infinite` }} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[36, 200].map((h, i) => (
          <div key={i} style={{ height: `${h}px`, borderRadius: '12px', background: 'rgba(128,128,128,0.1)', animation: `ws-pulse 1.4s ease-in-out ${i * 0.15}s infinite` }} />
        ))}
      </div>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────
export function App() {
  const [loading, setLoading] = useState(true);
  const [dailyData, setDailyData] = useState<DayCount[]>([]);
  const [monthData, setMonthData] = useState<MonthData[]>([]);
  const [streak, setStreak] = useState({ cur: 0, longest: 0 });
  const [totalNotes, setTotalNotes] = useState(0);
  const [activeDays, setActiveDays] = useState(0);
  const [weeklyData, setWeeklyData] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  const [tab, setTab] = useState<Tab>('heatmap');
  const [lang, setLang] = useState<'zh' | 'en'>(
    window.Blinko.i18n.language?.startsWith('zh') ? 'zh' : 'en'
  );

  const locale: Locale = lang === 'zh' ? zh : en;
  const t = (key: keyof Locale) => locale[key];
  const weekLabels = t('weeks').split(',');

  useEffect(() => {
    const api = window.Blinko.api.analytics as any;
    const months = lastNMonths(6);
    Promise.all([
      api.dailyNoteCount.mutate(),
      ...months.map((m: string) => api.monthlyStats.mutate({ month: m }).catch(() => null))
    ]).then(([daily, ...monthResults]: [DayCount[], ...(any[])]) => {
      setDailyData(daily);
      setStreak(calcStreak(daily));
      setTotalNotes(daily.reduce((s: number, d: DayCount) => s + d.count, 0));
      setActiveDays(daily.length);
      const weekly = [0, 0, 0, 0, 0, 0, 0];
      daily.forEach((d: DayCount) => { weekly[new Date(d.date + 'T12:00:00').getDay()] += d.count; });
      setWeeklyData(weekly);
      const md: MonthData[] = monthResults
        .map((r: any, i: number) => r ? ({ month: months[i]!.slice(5), totalWords: r.totalWords, tagStats: r.tagStats || [] }) : null)
        .filter(Boolean) as MonthData[];
      setMonthData(md);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;

  const totalChars = monthData.reduce((s, m) => s + m.totalWords, 0);
  const tagMap: Record<string, number> = {};
  monthData.flatMap(m => m.tagStats).forEach(t => { if (t.tagName !== 'Others') tagMap[t.tagName] = (tagMap[t.tagName] || 0) + t.count; });
  const topTags = Object.entries(tagMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const maxTag = topTags[0]?.[1] || 1;
  const charTrends = monthData.map(m => m.totalWords);
  const monthLabels = monthData.map(m => m.month);
  const active = streak.cur > 0;

  const tabBtn = (key: Tab, label: string) => (
    <button onClick={() => setTab(key)} style={{
      padding: '5px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 600,
      cursor: 'pointer', border: 'none', outline: 'none',
      background: tab === key ? 'rgba(99,102,241,0.15)' : 'transparent',
      color: tab === key ? '#6366f1' : 'inherit',
      opacity: tab === key ? 1 : 0.4,
      transition: 'all 0.15s',
    }}>{label}</button>
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '16px', padding: '20px', minHeight: '280px', boxSizing: 'border-box' }}>
      <style>{`@keyframes ws-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.ws-in{animation:ws-up 0.28s ease both}`}</style>

      {/* ── Left column ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {/* Hero */}
        <div class="ws-in" style={{
          background: active
            ? 'linear-gradient(145deg,#7c3aed,#4f46e5 60%,#2563eb)'
            : 'linear-gradient(145deg,#374151,#1f2937)',
          borderRadius: '14px', padding: '16px 14px 14px',
          color: 'white', boxShadow: active ? '0 6px 20px rgba(99,60,237,0.3)' : 'none',
          animationDelay: '0ms',
        }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button onClick={() => setLang(l => l === 'zh' ? 'en' : 'zh')} style={{
              background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white',
              borderRadius: '6px', padding: '2px 9px', fontSize: '10px', fontWeight: 600, cursor: 'pointer',
            }}>{lang === 'zh' ? 'EN' : '中文'}</button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '46px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>{streak.cur}</div>
            <div style={{ fontSize: '12px', opacity: 0.8, fontWeight: 600, marginTop: '3px' }}>{t('streak')}</div>
            {!active && <div style={{ fontSize: '11px', opacity: 0.4, marginTop: '4px', lineHeight: 1.4 }}>{t('writeToday')}</div>}
          </div>
          {active && (
            <div style={{ display: 'flex', gap: '4px', marginTop: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {Array.from({ length: Math.min(streak.cur, 18) }).map((_, i) => (
                <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)' }} />
              ))}
              {streak.cur > 18 && <span style={{ fontSize: '10px', opacity: 0.6 }}>+{streak.cur - 18}</span>}
            </div>
          )}
        </div>

        {/* Stat cards 2×2 */}
        <div class="ws-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px', animationDelay: '60ms' }}>
          <StatCard value={fmtNum(totalNotes)} label={t('totalNotes')} icon={<IconPen />} accent="#3b82f6" />
          <StatCard value={fmtNum(totalChars)} label={t('totalChars')} icon={<IconText />} accent="#8b5cf6" />
          <StatCard value={activeDays} label={t('activeDays')} icon={<IconCalendar />} accent="#22c55e" />
          <StatCard value={streak.longest} label={t('bestStreak')} icon={<IconFlame />} accent="#f59e0b" />
        </div>
      </div>

      {/* ── Right column ── */}
      <div class="ws-in" style={{ display: 'flex', flexDirection: 'column', gap: '10px', animationDelay: '100ms' }}>

        {/* Tab bar */}
        <div style={{ display: 'flex', gap: '2px', background: 'rgba(128,128,128,0.06)', borderRadius: '10px', padding: '4px' }}>
          {tabBtn('heatmap', t('tab_heatmap'))}
          {tabBtn('weekly', t('tab_weekly'))}
          {tabBtn('tags', t('tab_tags'))}
          {tabBtn('trends', t('tab_trends'))}
        </div>

        {/* Chart area */}
        <div style={{
          flex: 1, borderRadius: '12px', padding: '14px',
          background: 'rgba(128,128,128,0.05)', border: '1px solid rgba(128,128,128,0.1)',
        }}>
          {tab === 'heatmap' && <Heatmap data={dailyData} unit={t('notes')} />}

          {tab === 'weekly' && (
            <VBar data={weeklyData} labels={weekLabels} color="#6366f1" unit={t('notes')} />
          )}

          {tab === 'tags' && (
            topTags.length > 0
              ? <div>{topTags.map(([name, count]) => (
                  <HBar key={name} label={name} value={count} max={maxTag} color="linear-gradient(90deg,#6366f1,#8b5cf6)" />
                ))}</div>
              : <div style={{ opacity: 0.3, fontSize: '12px', textAlign: 'center', padding: '24px 0' }}>—</div>
          )}

          {tab === 'trends' && (
            charTrends.length > 0
              ? <VBar data={charTrends} labels={monthLabels} color="#2563eb" unit={t('chars')} />
              : <div style={{ opacity: 0.3, fontSize: '12px', textAlign: 'center', padding: '24px 0' }}>—</div>
          )}
        </div>

        <div style={{ textAlign: 'right', fontSize: '10px', opacity: 0.2 }}>{t('footer')}</div>
      </div>
    </div>
  );
}

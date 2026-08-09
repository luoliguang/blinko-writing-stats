/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';
import en from './locales/en.json';
import zh from './locales/zh.json';

// ── Types ────────────────────────────────────────────────
interface DayCount { date: string; count: number; }
interface MonthData {
  month: string;
  noteCount: number;
  totalWords: number;
  activeDays: number;
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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
  </svg>
);
const IconText = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconFlame = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

// ── Tooltip ──────────────────────────────────────────────
function Tooltip({ text, children }: { text: string; children: any }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: 'relative', display: 'contents' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      {children}
      {show && text && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 6px)', left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(10,10,20,0.88)', color: '#fff',
          padding: '4px 9px', borderRadius: '7px', fontSize: '11px',
          whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 999,
          boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
        }}>{text}</div>
      )}
    </div>
  );
}

// ── Bar chart (vertical) ─────────────────────────────────
function VBar({ data, labels, color, unit }: { data: number[]; labels: string[]; color: string; unit: string }) {
  const max = Math.max(...data, 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '72px', width: '100%' }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
          <Tooltip text={v > 0 ? `${labels[i]}: ${fmtNum(v)} ${unit}` : ''}>
            <div style={{ position: 'relative', width: '100%' }}>
              <div style={{
                width: '100%', borderRadius: '3px 3px 0 0',
                background: v > 0 ? color : 'rgba(128,128,128,0.1)',
                height: `${Math.max((v / max) * 52, v > 0 ? 4 : 0)}px`,
                transition: 'height 0.5s cubic-bezier(.4,0,.2,1)',
                opacity: v > 0 ? (0.35 + 0.65 * (v / max)) : 1,
              }} />
            </div>
          </Tooltip>
          <span style={{ fontSize: '9px', opacity: 0.4, marginTop: '3px', fontWeight: 500, lineHeight: 1 }}>{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

// ── Horizontal bar (for tags) ────────────────────────────
function HBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px' }}>
      <span style={{ fontSize: '11px', opacity: 0.65, width: '72px', flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, background: 'rgba(128,128,128,0.1)', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
        <div style={{
          width: `${(value / max) * 100}%`, height: '100%',
          background: color, borderRadius: '4px',
          transition: 'width 0.6s cubic-bezier(.4,0,.2,1)',
        }} />
      </div>
      <span style={{ fontSize: '11px', opacity: 0.5, width: '24px', textAlign: 'right', flexShrink: 0 }}>{value}</span>
    </div>
  );
}

// ── GitHub-style heatmap ─────────────────────────────────
function Heatmap({ data }: { data: DayCount[] }) {
  const countMap: Record<string, number> = {};
  data.forEach(d => { countMap[d.date] = d.count; });
  const max = Math.max(...Object.values(countMap), 1);

  const weeks: { date: string; count: number }[][] = [];
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const start = new Date(today); start.setDate(start.getDate() - 17 * 7 + 1);
  while (start.getDay() !== 0) start.setDate(start.getDate() - 1);

  let week: { date: string; count: number }[] = [];
  for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
    const ds = d.toISOString().slice(0, 10);
    week.push({ date: ds, count: countMap[ds] || 0 });
    if (week.length === 7) { weeks.push(week); week = []; }
  }
  if (week.length) weeks.push(week);

  const [tip, setTip] = useState<{ text: string; x: number; y: number } | null>(null);

  const getColor = (count: number) => {
    if (count === 0) return 'rgba(128,128,128,0.12)';
    const r = count / max;
    if (r < 0.25) return 'rgba(99,102,241,0.3)';
    if (r < 0.5) return 'rgba(99,102,241,0.52)';
    if (r < 0.75) return 'rgba(99,102,241,0.72)';
    return '#6366f1';
  };

  return (
    <div style={{ overflowX: 'auto', overflowY: 'visible', paddingBottom: '4px' }}>
      <div style={{ display: 'inline-flex', gap: '3px', minWidth: 'max-content' }}>
        {weeks.map((wk, wi) => (
          <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {wk.map((cell, di) => (
              <div key={di}
                onMouseEnter={(e: MouseEvent) => {
                  const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  setTip({ text: `${cell.date}${cell.count > 0 ? ': ' + cell.count : ''}`, x: r.left + r.width / 2, y: r.top });
                }}
                onMouseLeave={() => setTip(null)}
                style={{
                  width: '11px', height: '11px', borderRadius: '2px',
                  background: getColor(cell.count),
                  cursor: cell.count > 0 ? 'default' : 'default',
                }}
              />
            ))}
          </div>
        ))}
      </div>
      {tip && (
        <div style={{
          position: 'fixed', top: tip.y - 34, left: tip.x,
          transform: 'translateX(-50%)',
          background: 'rgba(10,10,20,0.88)', color: '#fff',
          padding: '4px 9px', borderRadius: '7px', fontSize: '11px',
          pointerEvents: 'none', zIndex: 9999, whiteSpace: 'nowrap',
          boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
        }}>{tip.text}</div>
      )}
    </div>
  );
}

// ── Stat card ────────────────────────────────────────────
function StatCard({ value, label, icon, accent }: { value: string | number; label: string; icon: any; accent: string }) {
  return (
    <div style={{
      borderRadius: '12px', padding: '12px 8px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
      background: `${accent}10`, border: `1px solid ${accent}22`,
    }}>
      <span style={{ color: accent, opacity: 0.8 }}>{icon}</span>
      <span style={{ fontSize: '22px', fontWeight: 800, lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: '10px', opacity: 0.5, textAlign: 'center', fontWeight: 600, lineHeight: 1.2 }}>{label}</span>
    </div>
  );
}

// ── Section wrapper ──────────────────────────────────────
function Section({ title, children }: { title?: string; children: any }) {
  return (
    <div style={{ borderRadius: '12px', padding: '12px', background: 'rgba(128,128,128,0.05)', border: '1px solid rgba(128,128,128,0.1)' }}>
      {title && <div style={{ fontSize: '11px', fontWeight: 700, opacity: 0.5, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</div>}
      {children}
    </div>
  );
}

// ── Skeleton ──────────────────────────────────────────────
function Skeleton() {
  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <style>{`@keyframes ws-pulse{0%,100%{opacity:.35}50%{opacity:.7}}`}</style>
      {[90, 56, 100, 100].map((h, i) => (
        <div key={i} style={{
          height: `${h}px`, borderRadius: '12px',
          background: 'rgba(128,128,128,0.1)',
          animation: `ws-pulse 1.4s ease-in-out ${i * 0.12}s infinite`,
        }} />
      ))}
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
        .map((r: any, i: number) => r ? ({
          month: months[i]!.slice(5),
          noteCount: r.noteCount,
          totalWords: r.totalWords,
          activeDays: r.activeDays,
          tagStats: r.tagStats || [],
        }) : null)
        .filter(Boolean) as MonthData[];
      setMonthData(md);

      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;

  // Derived data
  const totalChars = monthData.reduce((s, m) => s + m.totalWords, 0);
  const allTags = monthData.flatMap(m => m.tagStats);
  const tagMap: Record<string, number> = {};
  allTags.forEach(t => { if (t.tagName !== 'Others') tagMap[t.tagName] = (tagMap[t.tagName] || 0) + t.count; });
  const topTags = Object.entries(tagMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const maxTag = topTags[0]?.[1] || 1;

  const charTrends = monthData.map(m => m.totalWords);
  const monthLabels = monthData.map(m => m.month);

  const active = streak.cur > 0;

  const tabBtn = (key: Tab, label: string) => (
    <button onClick={() => setTab(key)} style={{
      padding: '5px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: 600,
      cursor: 'pointer', border: 'none', outline: 'none',
      background: tab === key ? 'rgba(99,102,241,0.15)' : 'transparent',
      color: tab === key ? '#6366f1' : 'inherit',
      opacity: tab === key ? 1 : 0.45,
      transition: 'all 0.18s',
    }}>{label}</button>
  );

  return (
    <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '9px', width: '100%', boxSizing: 'border-box' }}>
      <style>{`
        @keyframes ws-up { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .ws-in { animation: ws-up 0.3s ease both; }
      `}</style>

      {/* ── Hero ── */}
      <div class="ws-in" style={{
        background: active
          ? 'linear-gradient(135deg,#7c3aed 0%,#4f46e5 55%,#2563eb 100%)'
          : 'linear-gradient(135deg,#374151 0%,#1f2937 100%)',
        borderRadius: '16px', padding: '18px 16px 14px',
        color: 'white', boxShadow: active ? '0 6px 24px rgba(99,60,237,0.28)' : 'none',
        animationDelay: '0ms',
      }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
          <button onClick={() => setLang(l => l === 'zh' ? 'en' : 'zh')} style={{
            background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white',
            borderRadius: '6px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, cursor: 'pointer',
          }}>{lang === 'zh' ? 'EN' : '中文'}</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
          <div style={{ fontSize: '48px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>{streak.cur}</div>
          <div style={{ fontSize: '13px', opacity: 0.85, fontWeight: 600 }}>{t('streak')}</div>
          {!active && <div style={{ fontSize: '12px', opacity: 0.45, marginTop: '2px' }}>{t('writeToday')}</div>}
          {active && (
            <div style={{ display: 'flex', gap: '4px', marginTop: '8px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '200px' }}>
              {Array.from({ length: Math.min(streak.cur, 21) }).map((_, i) => (
                <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.85)' }} />
              ))}
              {streak.cur > 21 && <span style={{ fontSize: '11px', opacity: 0.7 }}>+{streak.cur - 21}</span>}
            </div>
          )}
        </div>
      </div>

      {/* ── Stat cards 2×2 ── */}
      <div class="ws-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px', animationDelay: '60ms' }}>
        <StatCard value={fmtNum(totalNotes)} label={t('totalNotes')} icon={<IconPen />} accent="#3b82f6" />
        <StatCard value={fmtNum(totalChars)} label={t('totalChars')} icon={<IconText />} accent="#8b5cf6" />
        <StatCard value={activeDays} label={t('activeDays')} icon={<IconCalendar />} accent="#22c55e" />
        <StatCard value={streak.longest} label={t('bestStreak')} icon={<IconFlame />} accent="#f59e0b" />
      </div>

      {/* ── Tabs + content ── */}
      <div class="ws-in" style={{ animationDelay: '120ms' }}>
        <Section>
          <div style={{ display: 'flex', gap: '2px', marginBottom: '12px', flexWrap: 'wrap' }}>
            {tabBtn('heatmap', t('tab_heatmap'))}
            {tabBtn('weekly', t('tab_weekly'))}
            {tabBtn('tags', t('tab_tags'))}
            {tabBtn('trends', t('tab_trends'))}
          </div>

          {tab === 'heatmap' && <Heatmap data={dailyData} />}

          {tab === 'weekly' && (
            <VBar data={weeklyData} labels={weekLabels} color="#6366f1" unit={t('notes')} />
          )}

          {tab === 'tags' && (
            topTags.length > 0
              ? <div>
                  {topTags.map(([name, count]) => (
                    <HBar key={name} label={name} value={count} max={maxTag} color="linear-gradient(90deg,#6366f1,#8b5cf6)" />
                  ))}
                </div>
              : <div style={{ opacity: 0.4, fontSize: '12px', textAlign: 'center', padding: '16px 0' }}>—</div>
          )}

          {tab === 'trends' && charTrends.length > 0 && (
            <VBar data={charTrends} labels={monthLabels} color="#2563eb" unit={t('chars')} />
          )}
        </Section>
      </div>

      <div style={{ textAlign: 'center', fontSize: '10px', opacity: 0.2, paddingBottom: '2px' }}>
        {t('footer')}
      </div>
    </div>
  );
}

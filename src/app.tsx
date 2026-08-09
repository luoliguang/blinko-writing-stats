/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';
import en from './locales/en.json';
import zh from './locales/zh.json';

interface DayCount { date: string; count: number; }
type Locale = typeof en;

// ── helpers ──────────────────────────────────────────────
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

// ── SVG icons (no emoji) ─────────────────────────────────
const IconPen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconFlame = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

// ── Tooltip wrapper ──────────────────────────────────────
function Tooltip({ text, children }: { text: string; children: any }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}
      onMouseEnter={(e: MouseEvent) => { setShow(true); setPos({ x: (e.target as HTMLElement).getBoundingClientRect().left, y: 0 }); }}
      onMouseLeave={() => setShow(false)}>
      {children}
      {show && text && (
        <div style={{
          position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(15,15,25,0.92)', color: '#fff', padding: '3px 8px',
          borderRadius: '6px', fontSize: '11px', whiteSpace: 'nowrap',
          pointerEvents: 'none', zIndex: 99, marginBottom: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}>{text}</div>
      )}
    </div>
  );
}

// ── Bar chart with tooltips ──────────────────────────────
function BarChart({ data, labels, color, unit }: { data: number[]; labels: string[]; color: string; unit: string }) {
  const max = Math.max(...data, 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px' }}>
      {data.map((v, i) => (
        <Tooltip key={i} text={v > 0 ? `${labels[i]}: ${v} ${unit}` : ''}>
          <div style={{
            width: '100%', borderRadius: '4px 4px 0 0',
            background: v > 0 ? color : 'rgba(128,128,128,0.1)',
            height: `${Math.max((v / max) * 60, v > 0 ? 5 : 0)}px`,
            transition: 'height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.2s',
            opacity: v > 0 ? (0.35 + 0.65 * (v / max)) : 1,
            cursor: v > 0 ? 'default' : 'default',
          }} />
          <span style={{ fontSize: '10px', opacity: 0.4, fontWeight: 500, marginTop: '4px' }}>{labels[i]}</span>
        </Tooltip>
      ))}
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
  const start = new Date(today); start.setDate(start.getDate() - 16 * 7 + 1);
  // align to Sunday
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
    const ratio = count / max;
    if (ratio < 0.25) return 'rgba(99,102,241,0.35)';
    if (ratio < 0.5)  return 'rgba(99,102,241,0.55)';
    if (ratio < 0.75) return 'rgba(99,102,241,0.75)';
    return '#6366f1';
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', gap: '3px' }}>
        {weeks.map((wk, wi) => (
          <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {wk.map((cell, di) => (
              <div key={di}
                onMouseEnter={(e: MouseEvent) => {
                  const r = (e.target as HTMLElement).getBoundingClientRect();
                  setTip({ text: `${cell.date}: ${cell.count}`, x: r.left, y: r.top });
                }}
                onMouseLeave={() => setTip(null)}
                style={{
                  width: '11px', height: '11px', borderRadius: '2px',
                  background: getColor(cell.count),
                  cursor: cell.count > 0 ? 'pointer' : 'default',
                  transition: 'transform 0.1s',
                }}
              />
            ))}
          </div>
        ))}
      </div>
      {tip && (
        <div style={{
          position: 'fixed', top: tip.y - 30, left: tip.x,
          background: 'rgba(15,15,25,0.92)', color: '#fff',
          padding: '3px 8px', borderRadius: '6px', fontSize: '11px',
          pointerEvents: 'none', zIndex: 999, whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}>{tip.text}</div>
      )}
    </div>
  );
}

// ── Stat card ────────────────────────────────────────────
function StatCard({ value, label, icon, accent }: { value: number | string; label: string; icon: any; accent: string }) {
  return (
    <div style={{
      borderRadius: '14px', padding: '14px 10px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      background: `${accent}12`, border: `1px solid ${accent}28`,
    }}>
      <span style={{ color: accent }}>{icon}</span>
      <span style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: '11px', opacity: 0.55, textAlign: 'center', fontWeight: 500 }}>{label}</span>
    </div>
  );
}

// ── Section header ───────────────────────────────────────
function Section({ title, children }: { title: string; children: any }) {
  return (
    <div style={{ borderRadius: '14px', padding: '14px', background: 'rgba(128,128,128,0.06)' }}>
      <div style={{ fontSize: '12px', fontWeight: 700, opacity: 0.6, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</div>
      {children}
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────
export function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DayCount[]>([]);
  const [streak, setStreak] = useState({ cur: 0, longest: 0 });
  const [totalNotes, setTotalNotes] = useState(0);
  const [activeDays, setActiveDays] = useState(0);
  const [weeklyData, setWeeklyData] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  const [monthlyData, setMonthlyData] = useState<number[]>([]);
  const [monthLabels, setMonthLabels] = useState<string[]>([]);
  const [tab, setTab] = useState<'weekly' | 'heatmap'>('heatmap');
  const [lang, setLang] = useState<'zh' | 'en'>(
    window.Blinko.i18n.language?.startsWith('zh') ? 'zh' : 'en'
  );

  const locale: Locale = lang === 'zh' ? zh : en;
  const t = (key: keyof Locale) => locale[key];
  const weekLabels = t('weeks').split(',');

  useEffect(() => {
    (window.Blinko.api.analytics.dailyNoteCount as any).mutate().then((raw: DayCount[]) => {
      setData(raw);
      setStreak(calcStreak(raw));
      setTotalNotes(raw.reduce((s, d) => s + d.count, 0));
      setActiveDays(raw.length);

      const weekly = [0, 0, 0, 0, 0, 0, 0];
      raw.forEach(d => { weekly[new Date(d.date + 'T12:00:00').getDay()] += d.count; });
      setWeeklyData(weekly);

      const monthly: Record<string, number> = {};
      raw.forEach(d => { const m = d.date.slice(0, 7); monthly[m] = (monthly[m] || 0) + d.count; });
      const months = Object.keys(monthly).sort().slice(-12);
      setMonthlyData(months.map(m => monthly[m]!));
      setMonthLabels(months.map(m => m.slice(5)));

      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const switchLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  if (loading) {
    return (
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[100, 60, 80, 80].map((h, i) => (
          <div key={i} style={{
            height: `${h}px`, borderRadius: '14px',
            background: 'rgba(128,128,128,0.1)',
            animation: 'ws-pulse 1.5s ease-in-out infinite',
            animationDelay: `${i * 0.15}s`,
          }} />
        ))}
      </div>
    );
  }

  const tabStyle = (active: boolean): any => ({
    padding: '5px 14px', borderRadius: '8px', fontSize: '12px',
    fontWeight: 600, cursor: 'pointer', border: 'none',
    background: active ? 'rgba(99,102,241,0.15)' : 'transparent',
    color: active ? '#6366f1' : 'inherit',
    opacity: active ? 1 : 0.5,
    transition: 'all 0.2s',
  });

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
      <style>{`
        @keyframes ws-pulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
        @keyframes ws-up { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .ws-in { animation: ws-up 0.35s ease both; }
      `}</style>

      {/* Hero */}
      <div class="ws-in" style={{
        background: streak.cur > 0
          ? 'linear-gradient(135deg,#7c3aed 0%,#4f46e5 55%,#2563eb 100%)'
          : 'linear-gradient(135deg,#374151 0%,#1f2937 100%)',
        borderRadius: '18px', padding: '22px 20px 18px',
        color: 'white', boxShadow: streak.cur > 0 ? '0 8px 28px rgba(99,60,237,0.32)' : 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
        animationDelay: '0ms',
      }}>
        {/* lang toggle */}
        <div style={{ alignSelf: 'flex-end', marginBottom: '4px' }}>
          <button onClick={switchLang} style={{
            background: 'rgba(255,255,255,0.15)', border: 'none',
            color: 'white', borderRadius: '6px', padding: '3px 10px',
            fontSize: '11px', fontWeight: 600, cursor: 'pointer',
          }}>{lang === 'zh' ? 'EN' : '中文'}</button>
        </div>

        <div style={{ fontSize: '44px', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1 }}>{streak.cur}</div>
        <div style={{ fontSize: '14px', opacity: 0.85, fontWeight: 600 }}>{t('streak')}</div>

        {streak.cur === 0 && (
          <div style={{ fontSize: '12px', opacity: 0.5, marginTop: '4px' }}>{t('writeToday')}</div>
        )}

        {/* streak dots */}
        {streak.cur > 0 && (
          <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
            {Array.from({ length: Math.min(streak.cur, 14) }).map((_, i) => (
              <div key={i} style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: i < streak.cur ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.2)',
              }} />
            ))}
            {streak.cur > 14 && <span style={{ fontSize: '11px', opacity: 0.7, marginLeft: '2px' }}>+{streak.cur - 14}</span>}
          </div>
        )}
      </div>

      {/* Stats */}
      <div class="ws-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', animationDelay: '70ms' }}>
        <StatCard value={totalNotes} label={t('totalNotes')} icon={<IconPen />} accent="#3b82f6" />
        <StatCard value={activeDays} label={t('activeDays')} icon={<IconCalendar />} accent="#22c55e" />
        <StatCard value={streak.longest} label={t('bestStreak')} icon={<IconFlame />} accent="#f59e0b" />
      </div>

      {/* Tab switcher + chart */}
      <div class="ws-in" style={{ animationDelay: '140ms' }}>
        <Section title="">
          <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
            <button style={tabStyle(tab === 'heatmap')} onClick={() => setTab('heatmap')}>{t('tab_heatmap')}</button>
            <button style={tabStyle(tab === 'weekly')} onClick={() => setTab('weekly')}>{t('tab_weekly')}</button>
          </div>

          {tab === 'heatmap' && <Heatmap data={data} />}
          {tab === 'weekly' && (
            <BarChart
              data={weeklyData}
              labels={weekLabels}
              color="linear-gradient(180deg,#7c3aed,#4f46e5)"
              unit={t('notes')}
            />
          )}
        </Section>
      </div>

      {/* Monthly trend */}
      {monthlyData.length > 0 && (
        <div class="ws-in" style={{ animationDelay: '210ms' }}>
          <Section title={t('monthlyTrend')}>
            <BarChart
              data={monthlyData}
              labels={monthLabels}
              color="linear-gradient(180deg,#2563eb,#4f46e5)"
              unit={t('notes')}
            />
          </Section>
        </div>
      )}

      <div style={{ textAlign: 'center', fontSize: '11px', opacity: 0.25, paddingBottom: '2px' }}>
        {t('footer')}
      </div>
    </div>
  );
}

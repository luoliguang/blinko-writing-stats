/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';
import {
  PenLine, Type, CalendarDays, Flame,
  Activity, FileText, TrendingUp, TrendingDown,
} from 'lucide-preact';
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

// ── Count-up hook ────────────────────────────────────────
function useCountUp(target: number, duration = 750) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (target === 0) { setVal(0); return; }
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return val;
}

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

// ── Heatmap with axis labels + info bar ──────────────────
function Heatmap({ data, unit, weekLabels, monthNames }: {
  data: DayCount[]; unit: string; weekLabels: string[]; monthNames: string[];
}) {
  const countMap: Record<string, number> = {};
  data.forEach(d => { countMap[d.date] = d.count; });
  const max = Math.max(...Object.values(countMap), 1);
  const [info, setInfo] = useState('');

  // Build week grid
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

  // Detect month label positions (first week whose Sunday or any cell starts a new month)
  const monthLabelCols: { label: string; col: number }[] = [];
  let lastMonth = '';
  weeks.forEach((wk, wi) => {
    wk.forEach(cell => {
      const m = cell.date.slice(0, 7);
      if (m !== lastMonth) {
        const mIdx = parseInt(cell.date.slice(5, 7)) - 1;
        monthLabelCols.push({ label: monthNames[mIdx] ?? '', col: wi });
        lastMonth = m;
      }
    });
  });

  const CELL = 11, GAP = 3, STRIDE = CELL + GAP;

  const getColor = (count: number) => {
    if (count === 0) return 'rgba(128,128,128,0.12)';
    const r = count / max;
    if (r < 0.25) return 'rgba(99,102,241,0.3)';
    if (r < 0.5) return 'rgba(99,102,241,0.52)';
    if (r < 0.75) return 'rgba(99,102,241,0.72)';
    return '#6366f1';
  };

  // Which day-rows to label: Mon=1, Wed=3, Fri=5
  const labelRows = new Set([1, 3, 5]);

  return (
    <div>
      <style>{`.ws-hm::-webkit-scrollbar{display:none}`}</style>
      <div class="ws-hm" style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>
        <div style={{ display: 'inline-flex', gap: '0', flexDirection: 'column', minWidth: 'max-content' }}>

          {/* Month labels row */}
          <div style={{ display: 'flex', marginLeft: '24px', height: '16px', position: 'relative', marginBottom: '2px' }}>
            {monthLabelCols.map(({ label, col }) => (
              <div key={col} style={{
                position: 'absolute', left: `${col * STRIDE}px`,
                fontSize: '10px', opacity: 0.45, fontWeight: 600, whiteSpace: 'nowrap',
              }}>{label}</div>
            ))}
          </div>

          {/* Grid: weekday labels + cells */}
          <div style={{ display: 'flex', gap: '0' }}>
            {/* Weekday label column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: `${GAP}px`, marginRight: '6px', width: '18px' }}>
              {weekLabels.map((label, i) => (
                <div key={i} style={{
                  height: `${CELL}px`, lineHeight: `${CELL}px`,
                  fontSize: '9px', opacity: labelRows.has(i) ? 0.4 : 0,
                  textAlign: 'right', fontWeight: 500,
                }}>{label.slice(0, 3)}</div>
              ))}
            </div>

            {/* Cell columns */}
            <div style={{ display: 'flex', gap: `${GAP}px` }}>
              {weeks.map((wk, wi) => (
                <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: `${GAP}px` }}>
                  {wk.map((cell, di) => (
                    <div key={di}
                      onMouseEnter={() => setInfo(cell.count > 0 ? `${cell.date} · ${cell.count} ${unit}` : cell.date)}
                      onMouseLeave={() => setInfo('')}
                      style={{
                        width: `${CELL}px`, height: `${CELL}px`, borderRadius: '2px',
                        background: getColor(cell.count),
                        cursor: 'default',
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div style={{
        height: '16px', fontSize: '11px', marginTop: '6px',
        opacity: info ? 0.5 : 0, transition: 'opacity 0.15s',
      }}>{info}</div>
    </div>
  );
}

// ── Animated streak number ───────────────────────────────
function AnimatedStreak({ target }: { target: number }) {
  const val = useCountUp(target, 600);
  return <>{val}</>;
}

// ── Stat card (with count-up) ────────────────────────────
function StatCard({ raw, label, icon, accent, fmt = fmtNum }: {
  raw: number; label: string; icon: any; accent: string;
  fmt?: (n: number) => string;
}) {
  const animated = useCountUp(raw);
  return (
    <div style={{
      borderRadius: '12px', padding: '14px 10px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      background: `${accent}10`, border: `1px solid ${accent}20`,
    }}>
      <span style={{ color: accent, opacity: 0.85 }}>{icon}</span>
      <span style={{ fontSize: '22px', fontWeight: 800, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
        {fmt(animated)}
      </span>
      <span style={{ fontSize: '10px', opacity: 0.5, textAlign: 'center', fontWeight: 600 }}>{label}</span>
    </div>
  );
}

// ── Line chart ───────────────────────────────────────────
function smoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return pts.length === 1 ? `M ${pts[0]!.x} ${pts[0]!.y}` : '';
  let d = `M ${pts[0]!.x} ${pts[0]!.y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]!;
    const p1 = pts[i]!;
    const p2 = pts[i + 1]!;
    const p3 = pts[i + 2] ?? pts[i + 1]!;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d;
}

function LineChart({ data, labels, color, unit }: {
  data: number[]; labels: string[]; color: string; unit: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  if (!data.length) return null;

  const W = 400, H = 130;
  const PAD = { top: 24, bottom: 28, left: 10, right: 10 };
  const cW = W - PAD.left - PAD.right;
  const cH = H - PAD.top - PAD.bottom;
  const max = Math.max(...data, 1);
  const min = Math.min(...data.filter(v => v > 0), 0);
  const range = max - min || 1;

  const pts = data.map((v, i) => ({
    x: PAD.left + (data.length === 1 ? cW / 2 : (i / (data.length - 1)) * cW),
    y: PAD.top + (1 - (v - min) / range) * cH,
    v,
  }));

  const line = smoothPath(pts);
  const fill = pts.length >= 2
    ? `${line} L ${pts.at(-1)!.x} ${PAD.top + cH} L ${pts[0]!.x} ${PAD.top + cH} Z`
    : '';

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="ws-lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {[0.25, 0.5, 0.75, 1].map(r => (
        <line key={r}
          x1={PAD.left} y1={PAD.top + r * cH}
          x2={W - PAD.right} y2={PAD.top + r * cH}
          stroke="rgba(128,128,128,0.07)" strokeWidth="1"
        />
      ))}

      {/* Fill */}
      {fill && <path d={fill} fill="url(#ws-lg)" />}

      {/* Line */}
      <path d={line} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      {pts.map((pt, i) => {
        const isHov = hovered === i;
        const tipW = 64, tipH = 20, tipX = Math.min(Math.max(pt.x - tipW / 2, PAD.left), W - PAD.right - tipW);
        return (
          <g key={i}>
            {/* X label */}
            <text x={pt.x} y={H - 6} textAnchor="middle" fontSize="9.5" fill="currentColor" opacity="0.38" fontWeight="500">
              {labels[i]}
            </text>

            {/* Invisible hover target */}
            <rect
              x={pt.x - 14} y={PAD.top - 4} width="28" height={cH + 8}
              fill="transparent"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />

            {/* Vertical guide on hover */}
            {isHov && (
              <line x1={pt.x} y1={PAD.top} x2={pt.x} y2={PAD.top + cH}
                stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
            )}

            {/* Dot */}
            <circle cx={pt.x} cy={pt.y} r={isHov ? 5.5 : 3.5}
              fill={isHov ? color : 'white'} stroke={color} strokeWidth="2"
              style={{ transition: 'r 0.12s' }} pointerEvents="none"
            />

            {/* Tooltip */}
            {isHov && pt.v > 0 && (
              <g pointerEvents="none">
                <rect x={tipX} y={pt.y - 28} width={tipW} height={tipH} rx="6"
                  fill="rgba(10,10,20,0.82)" />
                <text x={tipX + tipW / 2} y={pt.y - 14} textAnchor="middle"
                  fontSize="10.5" fill="white" fontWeight="600">
                  {fmtNum(pt.v)} {unit}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ── Insights row ─────────────────────────────────────────
function InsightsRow({ weeklyData, weekLabels, monthData, totalNotes, t }: {
  weeklyData: number[];
  weekLabels: string[];
  monthData: MonthData[];
  totalNotes: number;
  t: (k: keyof Locale) => string;
}) {
  const maxWd = Math.max(...weeklyData);
  const mostActiveDay = maxWd > 0 ? weekLabels[weeklyData.indexOf(maxWd)] ?? '—' : '—';

  const thisMonth = monthData[monthData.length - 1];
  const lastMonth = monthData[monthData.length - 2];
  const thisMonthWords = thisMonth?.totalWords ?? 0;
  const lastMonthWords = lastMonth?.totalWords ?? 0;
  const delta = lastMonthWords > 0
    ? Math.round(((thisMonthWords - lastMonthWords) / lastMonthWords) * 100)
    : null;

  const avgChars = totalNotes > 0
    ? Math.round(monthData.reduce((s, m) => s + m.totalWords, 0) / totalNotes)
    : 0;

  const chips: { icon: any; text: string; color: string }[] = [
    { icon: <Activity size={12} />, text: `${t('mostActive')}: ${mostActiveDay}`, color: '#6366f1' },
    { icon: <FileText size={12} />, text: `${t('avgNote')}: ${fmtNum(avgChars)} ${t('chars')}`, color: '#8b5cf6' },
    ...(delta !== null ? [{
      icon: delta >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />,
      text: `${t('thisMonth')}: ${delta >= 0 ? '+' : ''}${delta}%`,
      color: delta >= 0 ? '#22c55e' : '#ef4444',
    }] : []),
  ];

  return (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
      {chips.map((c, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '5px',
          background: `${c.color}10`, border: `1px solid ${c.color}25`,
          borderRadius: '20px', padding: '4px 10px', fontSize: '11px',
          color: c.color, fontWeight: 500,
        }}>
          {c.icon}
          <span style={{ color: 'inherit', opacity: 0.85 }}>{c.text}</span>
        </div>
      ))}
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
  const monthNames = t('months').split(',');

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
            <div style={{ fontSize: '46px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px', fontVariantNumeric: 'tabular-nums' }}>
              <AnimatedStreak target={streak.cur} />
            </div>
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
          <StatCard raw={totalNotes} label={t('totalNotes')} icon={<PenLine size={15} />} accent="#3b82f6" />
          <StatCard raw={totalChars} label={t('totalChars')} icon={<Type size={15} />} accent="#8b5cf6" />
          <StatCard raw={activeDays} label={t('activeDays')} icon={<CalendarDays size={15} />} accent="#22c55e" fmt={String} />
          <StatCard raw={streak.longest} label={t('bestStreak')} icon={<Flame size={15} />} accent="#f59e0b" fmt={String} />
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
          {tab === 'heatmap' && (
            <>
              <Heatmap data={dailyData} unit={t('notes')} weekLabels={weekLabels} monthNames={monthNames} />
              <InsightsRow
                weeklyData={weeklyData}
                weekLabels={weekLabels}
                monthData={monthData}
                totalNotes={totalNotes}
                t={t}
              />
            </>
          )}

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
              ? <LineChart data={charTrends} labels={monthLabels} color="#6366f1" unit={t('chars')} />
              : <div style={{ opacity: 0.3, fontSize: '12px', textAlign: 'center', padding: '24px 0' }}>—</div>
          )}
        </div>

        <div style={{ textAlign: 'right', fontSize: '10px', opacity: 0.2 }}>{t('footer')}</div>
      </div>
    </div>
  );
}

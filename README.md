# ✍️ Writing Stats — Blinko Plugin

> Track your writing habits, visualize your consistency, and discover patterns in your note-taking journey.

A statistics plugin for [Blinko](https://github.com/blinko-space/blinko) that turns your writing history into beautiful, interactive charts — streak counter, contribution heatmap, weekly radial chart, tag cloud, and monthly trends, all in one dialog.

---

## Features

### 🔥 Streak Counter
Never lose track of your momentum. The hero card shows your **current streak** and **longest streak**, with a live dot trail for active days. The gradient shifts from gray (no streak) to vivid indigo-violet when you're on a roll.

### 📅 Contribution Heatmap
A GitHub-style **23-week heatmap** showing every day you wrote. Cell intensity reflects note count. Click any cell to reveal the notes from that day — each row can be expanded to read the full content, with a direct **Open Note** button to jump there in Blinko.

### 🌐 Weekly Pattern (Polar Radial Chart)
A unique **radial bar chart** maps each day of the week as a spoke radiating from the center. The longer the bar, the more active that day. Your peak day glows with an indigo halo. Hover any spoke to see the exact count in the center hub.

### 🏷️ Tag Cloud
Your most-used tags rendered as **proportional pills** — bigger font and padding for higher-frequency tags. Each tag gets a deterministic color derived from its name, so your tag palette stays consistent across sessions.

### 📈 Monthly Trends
A smooth **Catmull-Rom bezier line chart** tracking your character output over the past 6 months. Gradient fill, hover tooltips, and animated dots make it easy to spot your most productive periods.

### 🃏 Stats Cards
Four at-a-glance cards with **animated count-up numbers**:
| Card | What it shows |
|------|--------------|
| Notes | Total notes in the past year |
| Characters | Total characters written |
| Active Days | Days with at least one note |
| Best Streak | Your all-time longest streak |

---

## Installation

Install directly from the **Blinko Plugin Marketplace**, or manually:

1. Download `release.zip` from the [latest release](https://github.com/luoliguang/blinko-writing-stats/releases/latest)
2. Open Blinko → **Settings → Plugins → Install from file**
3. Select the downloaded zip

---

## Usage

Click the **✍️ Writing Stats** button in the Blinko toolbar to open the stats dialog.

**Heatmap tab**
- Hover a cell to see the date and note count in the info strip
- Click a cell to open the **Day Note Panel** below the heatmap
- Click a note row to expand its full content
- Click **打开笔记 / Open Note** to navigate directly to that note in Blinko

**Weekly tab** — hover any spoke to update the center hub with that day's count

**Tags tab** — hover a tag pill to see a subtle lift effect

**Trends tab** — hover a month point for an exact character count tooltip

**Language toggle** — click `中文 / EN` in the top-right of the streak card to switch languages

---

## Tech Stack

Built with [Preact](https://preactjs.com/) + [Vite](https://vitejs.dev/), using the [Blinko Plugin API](https://docs.blinko.space/zh/plugins/plugin-api).

- All charts are hand-crafted SVG — no chart library dependency
- Smooth curves via Catmull-Rom → cubic bezier conversion
- Colors adapt to Blinko's dark/light theme via CSS variables
- Timezone-safe: all date comparisons use local calendar dates

---

## Development

```bash
yarn install
yarn dev              # start dev server with hot reload at :8080
yarn vite build       # production build → release/index.js
bun release:publish   # build + create GitHub release + submit to marketplace
```

---

## License

MIT © [giluoo](https://github.com/luoliguang)

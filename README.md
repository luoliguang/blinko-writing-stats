# Writing Stats — Blinko Plugin

A writing statistics plugin for [Blinko](https://github.com/blinko-space/blinko) that tracks your writing streaks, weekly patterns, monthly trends, and tag usage.

## Features

- **Streak Counter** — Track your current and longest daily writing streaks
- **Heatmap** — GitHub-style contribution heatmap for the past 23 weeks, click any day to preview that day's notes
- **Weekly Pattern** — Polar radial chart showing which days of the week you write most
- **Tag Cloud** — Visualize your most-used tags with proportional sizing and color coding
- **Monthly Trends** — Line chart tracking your character output over the past 6 months
- **Stats Cards** — At-a-glance numbers for total notes, characters, active days, and best streak

## Installation

Install via the Blinko plugin marketplace, or manually:

1. Download the latest release zip
2. Open Blinko → Settings → Plugins → Install from file

## Usage

Click the **✍️ Writing Stats** button in the Blinko toolbar to open the stats dialog.

- Click a heatmap cell to see notes written on that day
- Click a note row to expand the full preview
- Click **打开笔记** to navigate directly to that note

## Development

```bash
yarn install
yarn dev        # start dev server (hot reload)
yarn vite build # production build
```

## License

MIT

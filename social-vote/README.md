# Social Media Vote Tracker

A React feedback tracker that lets users vote for their preferred social media platform. Built for a CUNY City Tech web development assignment.

## Features

- Vote for Instagram, TikTok, X, or YouTube
- Live statistics with animated progress bars
- Conditional rendering — shows "No data collected yet" before the first vote
- Reset button appears only after votes are cast

## Component structure

```
App.jsx              ← parent: owns all state + event handlers
├── Button.jsx       ← stateless: receives handleClick + text as props
├── Statistics.jsx   ← receives votes + total as props; handles conditional rendering
│   └── StatisticLine.jsx  ← renders one stat row
```

## Assignment requirements met

| Requirement | Where |
|---|---|
| Multiple components | Button, StatisticLine, Statistics — all separate files |
| useState | App.jsx — tracks instagram, tiktok, x, youtube counts |
| Props | votes and total passed from App → Statistics → StatisticLine |
| Event handlers in parent | incrementVote() defined in App, passed to Button as handleClick |
| Conditional rendering | Statistics returns early with "No data" message when total === 0 |

## Local setup

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Open `vite.config.js` and set `base` to your repo name:
   ```js
   base: '/your-repo-name/',
   ```

2. Install gh-pages (already in devDependencies):
   ```bash
   npm install
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. In your GitHub repo → Settings → Pages → set source to `gh-pages` branch.

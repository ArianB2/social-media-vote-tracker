import StatisticLine from './StatisticLine'

// The platforms array defines all four voting options.
// It lives here so Statistics can map over it for rendering.
const platforms = [
  { key: 'instagram', name: 'Instagram', barClass: 'bar-ig' },
  { key: 'tiktok',   name: 'TikTok',    barClass: 'bar-tt' },
  { key: 'x',        name: 'X',         barClass: 'bar-x'  },
  { key: 'youtube',  name: 'YouTube',   barClass: 'bar-yt' },
]

// Statistics component
// - Receives votes (object) and total (number) as props from App
// - CONDITIONAL RENDERING:
//     If total === 0 → show "No data collected yet" message
//     Otherwise      → show StatisticLine rows + summary cards
// - Finds the leading platform for the summary section

const Statistics = ({ votes, total }) => {
  // Conditional rendering: nothing has been clicked yet
  if (total === 0) {
    return (
      <div className="stats-section">
        <p className="stats-title">Live results</p>
        <p className="no-data">No data collected yet — cast your first vote above.</p>
      </div>
    )
  }

  // Determine the leading platform
  const leader = platforms.reduce((a, b) =>
    votes[a.key] >= votes[b.key] ? a : b
  )

  return (
    <div className="stats-section">
      <p className="stats-title">Live results</p>

      {/* Render one StatisticLine per platform */}
      {platforms.map(p => (
        <StatisticLine
          key={p.key}
          label={p.name}
          value={votes[p.key]}
          suffix=" votes"
          barClass={p.barClass}
          pct={total > 0 ? Math.round((votes[p.key] / total) * 100) : 0}
        />
      ))}

      {/* Summary cards */}
      <div className="summary-grid">
        <div className="summary-card">
          <span className="summary-label">Total votes</span>
          <span className="summary-val">{total}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Leading platform</span>
          <span className="summary-val">{leader.name}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Top share</span>
          <span className="summary-val">
            {Math.round((votes[leader.key] / total) * 100)}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Statistics

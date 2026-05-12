// StatisticLine component
// - Renders a single row in the statistics table
// - Receives label, value, suffix, barClass, and pct as props
// - Used by the Statistics component to display each platform's data

const StatisticLine = ({ label, value, suffix = '', barClass, pct }) => {
  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <span className="stat-value">
        {value}{suffix}
      </span>
      <div className="bar-track">
        <div
          className={`bar-fill ${barClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default StatisticLine

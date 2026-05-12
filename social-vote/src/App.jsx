import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

// Platform config lives in App so the vote cards and their
// handlers can be generated from the same single source of truth.
const platforms = [
  { key: 'instagram', name: 'Instagram', abbr: 'IG', iconClass: 'icon-ig' },
  { key: 'tiktok',   name: 'TikTok',    abbr: 'TT', iconClass: 'icon-tt' },
  { key: 'x',        name: 'X',         abbr: 'X',  iconClass: 'icon-x'  },
  { key: 'youtube',  name: 'YouTube',   abbr: 'YT', iconClass: 'icon-yt' },
]

// App — parent component
// All state lives here. All event handlers are defined here
// and passed down as props. Child components never manage state.

const App = () => {
  // STATE: one count per platform (satisfies ≥3 category requirement)
  const [votes, setVotes] = useState({
    instagram: 0,
    tiktok: 0,
    x: 0,
    youtube: 0,
  })

  // EVENT HANDLER defined in parent, passed down to <Button /> as a prop.
  // Uses a key so one function handles all four platforms.
  const incrementVote = (key) => {
    setVotes(prev => ({ ...prev, [key]: prev[key] + 1 }))
  }

  const resetVotes = () => {
    setVotes({ instagram: 0, tiktok: 0, x: 0, youtube: 0 })
  }

  const total = Object.values(votes).reduce((a, b) => a + b, 0)

  return (
    <div className="app">
      <div className="header">
        <h1>Which platform do you prefer?</h1>
        <p>Vote for your most-used social media app</p>
      </div>

      {/* Vote cards — one per platform */}
      <div className="vote-grid">
        {platforms.map(p => (
          <div className="vote-card" key={p.key}>
            <div className={`platform-icon ${p.iconClass}`}>{p.abbr}</div>
            <span className="platform-name">{p.name}</span>
            <span className="vote-count">{votes[p.key]}</span>

            {/* Button receives the handler as a prop — no state inside Button */}
            <Button
              handleClick={() => incrementVote(p.key)}
              text="Vote"
            />
          </div>
        ))}
      </div>

      {/* Statistics receives vote state as props.
          It handles conditional rendering internally. */}
      <Statistics votes={votes} total={total} />

      {/* Only show Reset after at least one vote */}
      {total > 0 && (
        <button className="reset-btn" onClick={resetVotes}>
          Reset all votes
        </button>
      )}
    </div>
  )
}

export default App

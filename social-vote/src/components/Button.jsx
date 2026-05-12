// Button component
// - Stateless: no useState here
// - Receives handleClick and text as props from the parent (App)
// - Calls handleClick when clicked

const Button = ({ handleClick, text }) => {
  return (
    <button className="vote-btn" onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button

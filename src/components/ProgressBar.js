import { useState } from "react"

function ProgressBar() {
  const [inputValue, setInputValue] = useState(0)

  const handleInputChange = (e) => {
    let value = e.target.value
    setInputValue(value)
  }

  const percentage = Math.min(Math.max(inputValue, 0), 100)

  const parentDiv = {
    height: 30,
    width: 500,
    margin: '50px auto',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    padding: 5
  }

  const childDiv = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: 'red',
    borderRadius: 40,
    textAlign: 'right',
  }

  const progressText = {
    padding: 10,
    color: 'white',
    fontWeight: 900,
  }

  return (
    <>
      <input
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number between 0 and 100"
      />

      <div style={parentDiv}>
        <div style={childDiv}>
          <span style={progressText}>{`${percentage}%`}</span>
        </div>
      </div>
    </>

  )
}

export default ProgressBar

import { useState } from 'react'
import './ProgressBar.css'

function ProgressBar() {
  const [inputValue, setInputValue] = useState(0)

  const handleInputChange = (e) => {
    let value = e.target.value
    setInputValue(value)
  }

  const percentage = Math.min(Math.max(inputValue, 0), 100)

  return (
    <div className="container">
      <h3 className="title">Progress Bar</h3>

      <div className="parent-div">
        <div className="child-div" style={{ width: `${percentage}%` }}>
          <span className="progress-text">{`${percentage}%`}</span>
        </div>
      </div>

      <div>
        <label className="label">Input percentage: </label>
        <input
          type="text"
          inputMode="numeric"
          value={inputValue}
          onChange={handleInputChange}
          className="input"
        />
      </div>
    </div>
  )
}

export default ProgressBar

import { useState, useEffect } from 'react'

function Timer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  useEffect(() => {
    let interval = null

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const startTimer = () => setIsRunning(true)
  const stopTimer = () => setIsRunning(false)
  const resetTimer = () => {
    setIsRunning(false)
    setTime(0)
  }

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <div style={{ padding: '20px' }}>
      <h3>Timer</h3>

      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        {minutes} min {seconds} secs
      </div>

      <button
        onClick={startTimer}
        disabled={isRunning}
        style={{ marginRight: '10px' }}
      >
        Start
      </button>
      <button
        onClick={stopTimer}
        disabled={!isRunning}
        style={{ marginRight: '10px' }}
      >
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Timer

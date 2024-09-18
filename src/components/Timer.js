import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0); // Store time in seconds
  const [isRunning, setIsRunning] = useState(false); // To control the timer's state

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      // Start the timer
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1); // Increment time by 1 second
      }, 1000);
    } else if (!isRunning && time !== 0) {
      // Stop the timer when isRunning is false
      clearInterval(interval);
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [isRunning, time]); // Re-run effect when isRunning or time changes

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0); // Reset time to 0
  };

  // Calculate minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div style={{ padding: '20px' }}>
      <h3>Timer</h3>

      {/* Display the timer in minutes and seconds */}
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        {minutes} min {seconds} secs
      </div>

      {/* Control Buttons */}
      <button onClick={startTimer} disabled={isRunning} style={{ marginRight: '10px' }}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning} style={{ marginRight: '10px' }}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;

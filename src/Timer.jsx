import React from "react";
import useTimer from "./hooks/useTimer";
import "tachyons";
import DisplayTimer from "./components/DisplayTimer";

const Timer = ()  => {
      const {
        timeLeft,
        isRunning,
        isBreak,
        setTimeLeft,
        setIsRunning,
        resetTimer,
      } = useTimer();

      const handleTimeChange = (newTime) => {
        // Update timeLeft and reset the timer with the new time
        setTimeLeft(newTime);
        resetTimer(newTime);
      };

    return(
    <div className="tc">
      <h1>AiBar</h1>
      <h2>{isBreak ? "Break Time! 🎉" : "Work Time! 💪"}</h2>
      <DisplayTimer timeLeft={timeLeft} onTimeChange={handleTimeChange} />
      <button onClick={() => setIsRunning(prev => !prev)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
    )
}

export default Timer;
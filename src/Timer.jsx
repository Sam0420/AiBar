import React, { useState } from "react";
import useTimer from "./hooks/useTimer";
import TimerDisplay from "./components/DisplayTimer";
import TimerSettings from "./components/TimerSetting";
import 'tachyons';

const Timer = () => {
  const {
    timeLeft,
    isRunning,
    isBreak,
    setTimeLeft,
    setIsRunning,
    resetTimer,
    breakDuration,
    setBreakDuration,
    workTime,
    setWorkTime,
  } = useTimer();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Update the work time
  const handleTimeChange = (newTime) => {
    setTimeLeft(newTime * 60);
    setWorkTime(newTime * 60);
    resetTimer(newTime * 60);
  };

  // Update the break duration
  const handleBreakChange = (newBreakTime) => {
    setBreakDuration(newBreakTime * 60);
  };

  // Toggle start/pause
  const toggleRunning = () => setIsRunning((prev) => !prev);

  // Dynamically pick a background color based on break/work
  const bgClass = isBreak ? "bg-washed-green" : "bg-washed-red";

  return (
    <div
      className={`min-vh-100 w-100 flex flex-column items-center justify-center ${bgClass}`}
    >
      <h1 className="f1 mb3">AiBar</h1>
      <h2 className="f3 mb3">
        {isBreak ? "Break Time! 🎉" : "Work Time! 💪"}
      </h2>

      <TimerDisplay
        timeLeft={timeLeft}
        isRunning={isRunning}
        toggleRunning={toggleRunning}
        workDuration={workTime}
      />

      <button
        className="pa2 br2 bg-light-blue white b mt3"
        onClick={() => setIsSettingsOpen(true)}
      >
        Settings
      </button>

      {isSettingsOpen && (
        <TimerSettings
          currentWorkTime={workTime / 60}
          currentBreakTime={breakDuration / 60}
          onClose={() => setIsSettingsOpen(false)}
          onTimeChange={handleTimeChange}
          onBreakChange={handleBreakChange}
        />
      )}
    </div>
  );
};

export default Timer;
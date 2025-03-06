import React from "react";

const TimerDisplay = ({ timeLeft, isRunning, toggleRunning, resetTimer, workDuration }) => {
  // Format mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate progress
  const progress = Math.round(((workDuration - timeLeft) / workDuration) * 100);

  return (
    <div className="timer-display tc"> {/* "tc" for text-center */}
      <div className="time-count f1 b mb3">
        {formatTime(timeLeft)}
      </div>

      {/* Progress bar container */}
      <div className="progress-bar-container w-50 center bg-black-10 br-pill overflow-hidden mb3">
        <div
          className="progress-bar bg-blue h1"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Control buttons */}
      <div className="controls">
        <button
          className="pa2 mr2 br2 bg-green white b"
          onClick={toggleRunning}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default TimerDisplay;
import React from "react";
import "./DisplayTimer.css";

const TimerDisplay = ({ timeLeft, duration }) => {
  // Format seconds into mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate progress based on the current mode's duration
  const progress = Math.round(((duration - timeLeft) / duration) * 100);

  return (
    <div className="timer-display tc"> {/* "tc" for text-center */}
      <div className="time-count f1 mb3">
        {formatTime(timeLeft)}
      </div>

      {/* Progress bar container */}
      <div className="progress-bar-container w-40 center bg-black-10 br-pill overflow-hidden mb3">
        <div
          className="progress-bar bg-black h1"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default TimerDisplay;
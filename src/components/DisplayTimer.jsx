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
    <div className="timer-display tc">
    <div className="time-count  mb3">
    {formatTime(timeLeft)}
    </div>

  {/* Fixed-size progress bar container */}
  <div className="progress-bar-container center mb3">
    <div
      className="progress-bar"
      style={{ width: `${progress}%` , minWidth: "1px"  }}
    />
  </div>
  </div>
  );
  
};

export default TimerDisplay;
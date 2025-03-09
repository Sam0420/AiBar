import React, { useEffect, useState } from "react";
import useTimer from "./hooks/useTimer";
import TimerDisplay from "./components/DisplayTimer";
import TimerSettings from "./components/TimerSetting";
import 'tachyons';

const Timer = () => {
  const {
    timeLeft,
    isRunning,
    isBreak,
    setIsRunning,
    breakDuration,
    workTime,
    setWorkTime,
    updateBreakTime,
    updateWorkTime
  } = useTimer();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Request notification permission on user gesture
  const requestNotificationPermission = async () => {
    if ("Notification" in window && Notification.permission !== "granted") {
      try {
        const permission = await Notification.requestPermission();
        console.log("User responded with:", permission);
      } catch (err) {
        console.error("Permission request error:", err);
      }
    }
  };

  const handleStartClick = async () => {
    await requestNotificationPermission();

    const beep = new Audio('/startmp3.mp3');
    beep.play().catch(err => console.error('Unlock beep failed:', err));

    setIsRunning(true);
  };

  useEffect(() => {
    const handleKeyPress = (event)=>{
      if (event.code === "Space"){
        event.preventDefault();
        setIsRunning((prev) => !prev);
    } 
    };
    const handleEscapePress = (event) => {
      if (event.code === "Escape"){
        event.preventDefault();
        setIsSettingsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keydown", handleEscapePress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keydown", handleEscapePress);  
    };
  }, []);
  // Update the work time
  const handleTimeChange = (newTime) => {
    updateWorkTime(newTime);
  };

  // Update the break duration
  const handleBreakChange = (newBreakTime) => {
    updateBreakTime(newBreakTime);
  };

  // Dynamically pick background color based on break/work
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
        workDuration={workTime}
      />

      {!isRunning && (
        <button
          className="pa2 br2 bg-light-blue white b"
          onClick={handleStartClick}
        >
          Start
        </button>
      )}

      {isRunning && (
        <button
          className="pa2 br2 bg-orange white b"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>
      )}

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
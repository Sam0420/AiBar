import React, { useEffect, useState } from "react";
import useTimer from "./hooks/useTimer";
import useTask from "./hooks/useTask";
import TimerDisplay from "./components/DisplayTimer";
import TimerSettings from "./components/TimerSetting";
import TaskList from "./components/TaskList";  
import PlayPauseButton from "./components/PlayPauseButton";
import SettingsButton from "./components/SettingsButton";
import "./index.css";
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
    updateWorkTime,
    workColor,
    setWorkColor,
    breakColor, 
    setBreakColor,
    soundOn, 
    setSoundOn
  } = useTimer();

  const {
    tasks,
    addTask,
    removeTask,
    updateTask
  } = useTask(); 

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

  const toggleTimer = async () => {
    if (!isRunning){
    await requestNotificationPermission();
    if(soundOn && document.visibilityState === "visible"){
    const beep = new Audio('/startmp3.mp3');
    beep.play().catch(err => console.error('Unlock beep failed:', err));
    }
  }
    setIsRunning((prev) => !prev); 
  };

  useEffect(() => {
    const handleKeyPress = (event)=>{
      if (event.code === "Space"){
        event.preventDefault();
        setIsRunning((prev) => !prev);
    } else if (event.code === "Escape"){
        event.preventDefault();
        setIsSettingsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress); 
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
  const backgroundColor = isBreak ? breakColor : workColor;


  return (
    <div style={{ backgroundColor }} className="min-vh-100 w-100 flex flex-column">
      
      {/* Fixed Header Layout */}
      <div className="w-100 flex items-center justify-between ph4 pv3 z-10">
        <h1 className="title">AiBar</h1>
  
        {/* Right-side Button Group */}
        <div className="flex items-center gap-4">
          <SettingsButton
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            isOpen={isSettingsOpen}
          />
        </div>
        <button className="btn">Profile</button>
        <button className="btn">Logout</button>
      </div>
  
      {/* Main Content - Centered */}
      <div className="flex flex-column items-center justify-center flex-grow-1">
        <h2 className="subtitle f2 mb1">
          {isBreak ? "Break Time! 🎉" : "Work Time! 💪"}
        </h2>
  
        <TimerDisplay
          timeLeft={timeLeft}
          isRunning={isRunning}
          duration={isBreak ? breakDuration : workTime}
        />
  
        <PlayPauseButton isRunning={isRunning} toggleTimer={toggleTimer} /> 
  
        {/* Settings Panel */}
        {isSettingsOpen && (
          <TimerSettings
            currentWorkTime={workTime / 60}
            currentBreakTime={breakDuration / 60}
            onClose={() => setIsSettingsOpen(false)}
            onTimeChange={handleTimeChange}
            onBreakChange={handleBreakChange}
            workColor={workColor}
            setBreakColor={setBreakColor}
            setWorkColor={setWorkColor}
            breakColor={breakColor}
            soundOn={soundOn}
            setSoundOn={setSoundOn}
          />
        )}
  
        {/* Task List */}
        <TaskList
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default Timer;
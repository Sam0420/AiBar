import { useState, useEffect } from "react";

const useTimer = (initialTime = 1500, breakTime = 300) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [workTime, setWorkTime] = useState(initialTime);
  const [breakDuration, setBreakDuration] = useState(breakTime);
  const [workColor, setWorkColor] = useState("#ffcccc");
  const [breakColor, setBreakColor] = useState ("#ccffcc");
  const [soundOn, setSoundOn] = useState (true); 

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);

    } else if (timeLeft === 0) {

      if (soundOn && document.visibilityState === "visible") {
        const audio = new Audio("/timer.mp3");
        audio.play().catch((err) =>
          console.log("Audio Playback Failed:", err)
          );
        }
  
      // 2) Show notification (if granted)
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Pomodoro Timer", {
          body: isBreak
            ? "Break time is over! Back to work! 🎯"
            : "Time for a break! ☕",
        });
      }

      // 3) Switch between work & break
      if (!isBreak) {
        setTimeLeft(breakDuration);
        setIsBreak(true);
      } else {
        setTimeLeft(workTime);
        setIsBreak(false);
      }
    }
  }, [isRunning, timeLeft, isBreak, workTime, breakDuration, soundOn]);


  const updateBreakTime = (newBreakMins) => {
    const newBreakSeconds = newBreakMins * 60;

    if (isBreak) {
      
      const usedSoFar = breakDuration - timeLeft;
      let newTimeLeft = newBreakSeconds - usedSoFar;
      if (newTimeLeft < 0) {
        newTimeLeft = 1; // can't go negative
      }
      setTimeLeft(newTimeLeft);
    }
    
    setBreakDuration(newBreakSeconds);
  };
  const updateWorkTime = (newWorkMins) => {
    const newWorkSeconds = newWorkMins * 60;

    if (!isBreak) {
      
      const usedSoFar = workTime - timeLeft;
      let newTimeLeft = newWorkSeconds - usedSoFar;
      if (newTimeLeft < 0) {
        newTimeLeft = 0;
      }
      setTimeLeft(newTimeLeft);
    }

    setWorkTime(newWorkSeconds);
  };

  return {
    timeLeft,
    isRunning,
    isBreak,
    setTimeLeft,
    setIsRunning,
    breakDuration,
    setBreakDuration,
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
  };
};

export default useTimer;
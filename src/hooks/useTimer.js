import { useState, useEffect } from "react";

const useTimer = (initialTime = 1500, breakTime = 300) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [workTime, setWorkTime] = useState (initialTime)
    
    useEffect(() => {
            if (isRunning && timeLeft > 0) {
                const timer = setTimeout(() => {
                    setTimeLeft(prev => prev - 1);
                }, 1000);
                return () => clearTimeout(timer);
            } else if (timeLeft === 0) {
                if (!isBreak) {
                    setTimeLeft(breakTime); // Switch to 5-minute break
                    setIsBreak(true);
                } else {
                    setTimeLeft(initialTime); // Switch to 25-minute work session
                    setIsBreak(false);
                }
                setIsRunning(false);
            }
        }, [isRunning, isBreak, timeLeft, initialTime, breakTime]);
    
        const resetTimer = (newWorkTime) => {
            if (newWorkTime !== undefined) {
                setWorkTime(newWorkTime);
                setTimeLeft(newWorkTime);
              } else {
                setTimeLeft(workTime);
              }
              setIsRunning(false);
              setIsBreak(false);
            };

        return {
            timeLeft,
            isRunning,
            isBreak,
            setTimeLeft,
            setIsRunning,
            resetTimer
          };
        };
        
        export default useTimer;

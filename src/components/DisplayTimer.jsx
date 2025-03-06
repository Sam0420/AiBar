import { useState } from "react";

const DisplayTimer = ({timeLeft, onTimeChange, onBreakChange, breakDuration}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputMinutes, setInputMinutes] = useState("");
    const [isEditingBreak, setIsEditingBreak]= useState(false);
    const [inputBreakMinutes, setInputBreakMinutes] = useState ("");
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    const changeTime = () => {
        if (inputMinutes > 0){
            onTimeChange(parseInt(inputMinutes, 10) * 60);
        }
        setInputMinutes("");
        setIsEditing(false);
    };

    const changeBreakTime = () => {
        if (inputBreakMinutes > 0){
            onBreakChange(parseInt(inputMinutes, 10) * 60);
        }
        setInputBreakMinutes("");
        setIsEditingBreak(false);

    }
    
    return(
        <div>
          <h1 onClick={() => setIsEditing(true)} style={{ cursor: "pointer" }}>
          {isEditing ? (
            <input
              type="number"
              value={inputMinutes}
              onChange={(e) => setInputMinutes(e.target.value)}
              onBlur={changeTime}
              onKeyDown={(e) => {
                if (e.key === "Enter") changeTime();    
              }}
              autoFocus
            />
          ) : (
            formatTime(timeLeft) 
          )}
        </h1>

        <h2 onClick={() => setIsEditingBreak(true)} style={{cursor: "pointer"}}>
          {isEditingBreak ? (
            <input
              type="number"
              value={inputBreakMinutes}
              onChange={(e) => setInputBreakMinutes(e.target.value)}
              onBlur = {changeBreakTime}
              onKeyDown={(e) => {
                if (e.key === "Enter") changeBreakTime();
              }}
              autoFocus
            />
            ) :(
              `Break: ${breakDuration / 60} min `
            )}
        </h2>
      </div>
    );
};

export default DisplayTimer;
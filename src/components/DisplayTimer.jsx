import { useState } from "react";

const DisplayTimer = ({timeLeft, onTimeChange}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputMinutes, setInputMinutes] = useState("");
    
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
        </div>
    )
}

export default DisplayTimer;
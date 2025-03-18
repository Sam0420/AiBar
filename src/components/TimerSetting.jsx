import React, { useState } from "react";
import "./TimerSetting.css"
const TimerSettings = ({
  currentWorkTime, currentBreakTime, onTimeChange, onBreakChange, 
  onClose, workColor, setWorkColor, breakColor, setBreakColor, soundOn, setSoundOn 
}) => {
  const [workInput, setWorkInput] = useState(currentWorkTime);
  const [breakInput, setBreakInput] = useState(currentBreakTime);
  const [workBgColor, setWorkBgColor] = useState(workColor);
  const [breakBgColor, setBreakBgColor] = useState(breakColor);
  const [soundSetting, setSoundSetting] = useState(soundOn);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workInput > 0) onTimeChange(workInput);
    if (breakInput > 0) onBreakChange(breakInput);
    setWorkColor(workBgColor);
    setBreakColor(breakBgColor);
    setSoundOn(soundSetting);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="title">AiBar Settings</p>
        <form onSubmit={handleSubmit}>
          <label>
            Work Duration (min):
            <input type="number" value={workInput} min="1" onChange={(e) => setWorkInput(Number(e.target.value))} />
          </label>
          
          <label>
            Break Duration (min):
            <input type="number" value={breakInput} min="1" onChange={(e) => setBreakInput(Number(e.target.value))} />
          </label>

          <label>
            Work Mode Background:
            <input type="color" value={workBgColor} onChange={(e) => setWorkBgColor(e.target.value)} />
          </label>

          <label>
            Break Mode Background:
            <input type="color" value={breakBgColor} onChange={(e) => setBreakBgColor(e.target.value)} />
          </label>

          <label>
            Sound Enabled:
            <input type="checkbox" checked={soundSetting} onChange={(e) => setSoundSetting(e.target.checked)} />
          </label>

          <div className="modal-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimerSettings;
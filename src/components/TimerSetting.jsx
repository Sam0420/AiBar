import React, { useState } from "react";

const TimerSettings = ({
  currentWorkTime,
  currentBreakTime,
  onTimeChange,
  onBreakChange,
  onClose,
}) => {
  const [workInput, setWorkInput] = useState(currentWorkTime);
  const [breakInput, setBreakInput] = useState(currentBreakTime);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workInput > 0) onTimeChange(workInput);
    if (breakInput > 0) onBreakChange(breakInput);
    onClose();
  };

  return (
    // Modal Overlay
    <div className="fixed top-0 left-0 w-100 h-100 bg-black-40 flex items-center justify-center">
      {/* Modal Card */}
      <div className="bg-white br3 pa4 shadow-5 w-50 w-25-l">
        <h3 className="f4 mb3">Timer Settings</h3>
        <form onSubmit={handleSubmit} className="flex flex-column">
          <label className="mb2">
            <span className="db mb1">Work Duration (min):</span>
            <input
              className="pa2 input-reset ba b--black-20 w-100"
              type="number"
              value={workInput === 0 ? "" : workInput}
              min="1"
              onChange={(e) => setWorkInput(Number(e.target.value))}
            />
          </label>

          <label className="mb3">
            <span className="db mb1">Break Duration (min):</span>
            <input
              className="pa2 input-reset ba b--black-20 w-100"
              type="number"
              value={breakInput === 0 ? "" : breakInput}
              min= "1"
              onChange={(e) => setBreakInput(Number(e.target.value))}
            />
          </label>

          <div className="flex justify-end">
            <button type="submit" className="pa2 mr2 br2 bg-green white b">
              Save
            </button>
            <button
              type="button"
              className="pa2 br2 bg-red white b"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimerSettings;
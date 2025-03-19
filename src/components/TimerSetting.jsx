import React, { useState } from "react";
import { Box, Grid, Typography, Slider, Input } from "@mui/material";

import "./TimerSetting.css";

const TimerSettings = ({
  currentWorkTime, currentBreakTime, onTimeChange, onBreakChange, 
  onClose, workColor, setWorkColor, breakColor, setBreakColor, soundOn, setSoundOn 
}) => {
  const [workDuration, setWorkDuration] = useState(currentWorkTime);
  const [breakDuration, setBreakDuration] = useState(currentBreakTime);
  const [workBgColor, setWorkBgColor] = useState(workColor);
  const [breakBgColor, setBreakBgColor] = useState(breakColor);
  const [soundSetting, setSoundSetting] = useState(soundOn);

  // Handle work duration change
  const handleWorkSliderChange = (event, newValue) => {
    setWorkDuration(newValue);
  };

  const handleWorkInputChange = (event) => {
    setWorkDuration(event.target.value === "" ? 1 : Number(event.target.value));
  };

  // Handle break duration change
  const handleBreakSliderChange = (event, newValue) => {
    setBreakDuration(newValue);
  };

  const handleBreakInputChange = (event) => {
    setBreakDuration(event.target.value === "" ? 1 : Number(event.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workDuration > 0) onTimeChange(workDuration);
    if (breakDuration > 0) onBreakChange(breakDuration);
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
          
          {/* Work Duration Slider */}
          <Box sx={{ width: 350 }}>
          <Typography 
          gutterBottom 
          sx={{ fontSize: "12px", fontWeight: "normal", fontFamily: "Poppins, sans-serif" }}
          >
          Work Duration (min)
          </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Slider
                  value={workDuration}
                  min={1}
                  max={120}
                  step={1}
                  onChange={handleWorkSliderChange}
                  aria-labelledby="work-slider"
                  sx={{
                    '& .MuiSlider-track': {
                      backgroundColor: "#000000",// ✅ Gradient effect
                    },
                    '& .MuiSlider-thumb': {
                      backgroundColor: "#000000",
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: "#ccc",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Input
                  sx={{
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    width: "60px",  // Adjust width if needed
                    padding: "5px 10px", // ✅ Ensure enough padding inside
                    
                  }}
                  value={workDuration}
                  size="medium"
                  onChange={handleWorkInputChange}
                  inputProps={{
                    step: 1,
                    min: 1,
                    max: 120,
                    type: "number",
                    "aria-labelledby": "work-slider",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Break Duration Slider */}
          <Box sx={{ width: 350, marginTop: 2 }}>
          <Typography 
          gutterBottom 
          sx={{ fontSize: "12px", fontWeight: "normal", fontFamily: "Poppins, sans-serif" }}
          >
          Break Duration (min)
          </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Slider
                  value={breakDuration}
                  min={1}
                  max={60}
                  step={1}
                  onChange={handleBreakSliderChange}
                  aria-labelledby="break-slider"
                  sx={{
                    '& .MuiSlider-track': {
                      backgroundColor: "#000000",// ✅ Gradient effect
                    },
                    '& .MuiSlider-thumb': {
                      backgroundColor: "#000000",
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: "#ccc",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Input
                  sx={{
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    width: "60px",  // Adjust width if needed
                    padding: "5px 10px", // ✅ Ensure enough padding inside
                  }}
                  value={breakDuration}
                  size="small"
                  onChange={handleBreakInputChange}
                  inputProps={{
                    step: 1,
                    min: 1,
                    max: 60,
                    type: "number",
                    "aria-labelledby": "break-slider",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Work Mode Background */}
          <label>
            Work Mode Background:
            <input type="color" value={workBgColor} onChange={(e) => setWorkBgColor(e.target.value)} />
          </label>

          {/* Break Mode Background */}
          <label>
            Break Mode Background:
            <input type="color" value={breakBgColor} onChange={(e) => setBreakBgColor(e.target.value)} />
          </label>

          {/* Sound Toggle */}
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
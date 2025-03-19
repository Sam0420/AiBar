import React, { useState } from "react";
import { Box, Grid, Typography, Slider, Input, FormControlLabel } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

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

  const handleChange = (event) => {
    setSoundSetting(event.target.checked);
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

  const colorOptions = [
    "#1E1E1E", // Black
    "#FFFFFF", // White
    "#FF5733", // Red
    "#FFC300", // Yellow
    "#36D1DC", // Cyan Blue
    "#8E44AD", // Purple
    "#27AE60", // Green
    "#E67E22", // Orange
    "#2C3E50", // Dark Blue
  ];

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
          Work
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
            
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" , marginTop: 2 }}>
            {colorOptions.map((color) => (
              <Box
                key={color}
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: workBgColor === color ? "1px solid black" : "1px solid gray",
                }}
                onClick={() => setWorkBgColor(color)}
              />
            ))}
          </Box>
          {/* Break Duration Slider */}
          <Box sx={{ width: 350, marginTop: 2 }}>
          <Typography 
          gutterBottom 
          sx={{ fontSize: "12px", fontWeight: "normal", fontFamily: "Poppins, sans-serif"  }}
          >
         Break
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

          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" ,  marginTop: 2}}>
          {colorOptions.map((color) => (
            <Box
              key={color}
              sx={{
                width: 30,
                height: 30,
                backgroundColor: color,
                borderRadius: "50%",
                cursor: "pointer",
                border: breakBgColor === color ? "1px solid black" : "1px solid gray",
              }}
              onClick={() => setBreakBgColor(color)}
            />
          ))}

        </Box>
          {/* Sound Toggle */}

            <FormControlLabel
            sx={{ marginTop: "10px" }}
              control={
                <Checkbox
                  checked={soundSetting}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "normal",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Sound Enabled
                </Typography>
              }
            />

            <div className="buttons-container">
            <button className="save-btn button-17 save" type="submit">
              Save
            </button>
            <button className="cancel-btn button-17 cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimerSettings;
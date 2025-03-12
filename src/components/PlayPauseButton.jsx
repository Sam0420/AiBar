import React from "react";
import styles from "./PlayPauseButton.module.css"; // Scoped CSS
import { useState } from "react";

const PlayPauseButton = ({ isRunning, toggleTimer }) => {
  const [checked, setChecked] = useState(isRunning);

  const handleToggle = () => {
    setChecked((prev) => !prev);
    toggleTimer(); // Call the parent function
  };

  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          className={styles.playBtn}
          checked={checked}
          onChange={handleToggle}
        />
        <div className={styles.playIcon}></div>
        <div className={styles.pauseIcon}></div>
      </label>
    </div>
  );
};

export default PlayPauseButton;
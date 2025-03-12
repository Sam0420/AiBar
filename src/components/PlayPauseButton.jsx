import React from "react";
import styles from "./PlayPauseButton.module.css"; // Scoped CSS


const PlayPauseButton = ({ isRunning, toggleTimer}) => {


  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          className={styles.playBtn}
          checked={isRunning}
          onChange={toggleTimer}
        />
        <div className={styles.playIcon}></div>
        <div className={styles.pauseIcon}></div>
      </label>
    </div>
  );
};

export default PlayPauseButton;
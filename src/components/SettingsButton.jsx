
import React from "react";
import "./SettingsButton.css";

const SettingsButton = ({ onClick, isOpen, className = "" }) => {
  const buttonClasses = `setting-btn ${className} ${isOpen ? "open" : ""}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className="bar bar1"></span>
      <span className="bar bar2"></span>
      <span className="bar bar1"></span>
    </button>
  );
};

export default SettingsButton;
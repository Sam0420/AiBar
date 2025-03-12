
import React from "react";
import "./SettingsButton.css"; // Now this is global CSS

const SettingsButton = ({ onClick, isOpen, className = "" }) => {
  // Use the class names directly as defined in your CSS.
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
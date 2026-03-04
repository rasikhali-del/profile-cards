import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      className={`theme-toggle ${darkMode ? "dark" : "light"}`}
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      <span className="toggle-track">
        <span className="toggle-thumb">
          <span className="toggle-icon">{darkMode ? "🌙" : "☀️"}</span>
        </span>
        <span className="toggle-stars">✦ ✧ ✦</span>
      </span>
    </button>
  );
};

export default ThemeToggle;

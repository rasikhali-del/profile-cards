import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, onSearchChange, darkMode }) => {
  return (
    <div className={`search-wrapper ${darkMode ? "dark" : "light"}`}>
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm && (
        <button className="clear-btn" onClick={() => onSearchChange("")}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;

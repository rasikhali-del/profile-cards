import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, bio, avatar, isFollowed, onToggleFollow, darkMode }) => {
  return (
    <div className={`profile-card ${darkMode ? "dark" : "light"} ${isFollowed ? "followed" : ""}`}>
      <div className="card-glow"></div>
      <div className="card-content">
        <div className="avatar-wrapper">
          <div className="avatar-ring"></div>
          <img src={avatar} alt={name} className="avatar" />
          <span className={`status-dot ${isFollowed ? "active" : ""}`}></span>
        </div>
        <h3 className="profile-name">{name}</h3>
        <p className="profile-bio">{bio}</p>
        <button
          className={`follow-btn ${isFollowed ? "following" : ""}`}
          onClick={onToggleFollow}
        >
          <span className="btn-icon">{isFollowed ? "✓" : "+"}</span>
          <span className="btn-text">{isFollowed ? "Following" : "Follow"}</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

import React, { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import profilesData from "./data/profiles";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState(profilesData);
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Bonus: useEffect to log follow changes
  useEffect(() => {
    const followed = profiles.filter((p) => p.isFollowed).map((p) => p.name);
    console.log("📌 Currently following:", followed.length ? followed.join(", ") : "Nobody");
  }, [profiles]);

  const handleToggleFollow = (id) => {
    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id === id
          ? { ...profile, isFollowed: !profile.isFollowed }
          : profile
      )
    );
  };

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  // Filter profiles by search term
  const filteredProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const followingCount = profiles.filter((p) => p.isFollowed).length;

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {/* Animated background orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <header className="app-header">
        <div className="header-top">
          <div className="brand">
            <h1 className="app-title">
              <span className="title-glow">✦</span> ProfileHub
            </h1>
            <p className="app-subtitle">
              Discover & connect with amazing people
            </p>
          </div>
          <ThemeToggle darkMode={darkMode} onToggle={handleThemeToggle} />
        </div>

        <div className="stats-bar">
          <div className="stat">
            <span className="stat-number">{profiles.length}</span>
            <span className="stat-label">Users</span>
          </div>
          <div className="stat">
            <span className="stat-number stat-glow">{followingCount}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          darkMode={darkMode}
        />
      </header>

      <main className="cards-grid">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              bio={profile.bio}
              avatar={profile.avatar}
              isFollowed={profile.isFollowed}
              darkMode={darkMode}
              onToggleFollow={() => handleToggleFollow(profile.id)}
            />
          ))
        ) : (
          <div className="no-results">
            <span className="no-results-icon">🔎</span>
            <p>No users found for "{searchTerm}"</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Built with <span className="heart">♥</span> using React — Props &
          State Demo
        </p>
      </footer>
    </div>
  );
}

export default App;

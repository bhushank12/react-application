import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  function goToDashboard() {
    navigate('/');
  }

  return (
    <div className={`settings-container ${theme}`}>
      <h1>Settings</h1>
      <p>Current Theme: {theme}</p>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button className="back-to-dashboard-button" onClick={goToDashboard}>
        Dashboard
      </button>
    </div>
  );
}

export default Settings;

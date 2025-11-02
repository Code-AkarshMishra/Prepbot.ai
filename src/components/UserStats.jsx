import React from 'react';
import { useUserData } from '../hooks/useUserData';
import './UserStats.css'; 

// Helper component sirf progress bar ke liye
const ProgressBar = ({ label, xp, level, badges }) => {
  const XP_PER_LEVEL = 500;
  const progress = (xp % XP_PER_LEVEL) / (XP_PER_LEVEL / 100);

  return (
    <div className="stat-item">
      <div className="stat-header">
        <span className="stat-label">{label}</span>
        <span className="stat-level">Level {level}</span>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="stat-xp">{xp} XP</span>
      
      {/* --- NEW BADGE DISPLAY --- */}
      {badges && badges.length > 0 && (
        <div className="badge-container">
          {badges.map((badge) => (
            <span key={badge} className={`badge badge-${badge.toLowerCase()}`}>
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// Main component
const UserStats = () => {
  const { userData } = useUserData();

  return (
    <div className="user-stats-container">
      <h2 className="stats-title">Your Progress Dashboard</h2>
      
      {/* Overall Progress */}
      <ProgressBar 
        label="Overall Progress" 
        xp={userData.overall.xp} 
        level={userData.overall.level} 
      />
      
      <hr className="stat-divider" />

      {/* Course-specific Progress */}
      <div className="course-stats-grid">
        <ProgressBar 
          label="9th-12th" 
          xp={userData.courses['9th'].xp}
          level={userData.courses['9th'].level}
          badges={userData.courses['9th'].badges}
        />
        <ProgressBar 
          label="JEE" 
          xp={userData.courses.jee.xp} 
          level={userData.courses.jee.level}
          badges={userData.courses.jee.badges}
        />
        <ProgressBar 
          label="NEET" 
          xp={userData.courses.neet.xp} 
          level={userData.courses.neet.level}
          badges={userData.courses.neet.badges}
        />
        <ProgressBar 
          label="Tech Skills" 
          xp={userData.courses.tech.xp} 
          level={userData.courses.tech.level}
          badges={userData.courses.tech.badges}
        />
      </div>
    </div>
  );
};

export default UserStats;
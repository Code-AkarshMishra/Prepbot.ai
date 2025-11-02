import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AcademicLevelPage.css';
import { useUser } from '@clerk/clerk-react';

const AcademicLevelPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleLevelSelect = (level) => {
    navigate(`/subject/${level}`);
  };

  return (
    <div className="academic-level-container">
      <div className="academic-header">
        <h1 className="academic-title">
          Welcome, {user ? user.firstName : 'Student'}!
        </h1>
        <p className="academic-subtitle">
          Please select your academic level to begin learning.
        </p>
      </div>

      <div className="level-grid">
        {/* Card for 9th */}
        <div 
          className="level-card" 
          onClick={() => handleLevelSelect('9th')}
        >
          {/* ... card content ... */}
          <div className="level-card-icon">📚</div>
          <h2 className="level-card-title">Class 9th</h2>
          <p className="level-card-description">
            Start your journey with fundamentals in Physics, Chemistry, Maths, and more.
          </p>
          <button className="level-card-button">Select</button>
        </div>

        {/* Card for 10th */}
        <div 
          className="level-card" 
          onClick={() => handleLevelSelect('10th')}
        >
          {/* ... card content ... */}
          <div className="level-card-icon">🔬</div>
          <h2 className="level-card-title">Class 10th</h2>
          <p className="level-card-description">
            Prepare for your boards with in-depth concepts and tailored quizzes.
          </p>
          <button className="level-card-button">Select</button>
        </div>

        {/* Card for 11th --- YEH UPDATE HUA HAI --- */}
        <div 
          className="level-card" 
          onClick={() => handleLevelSelect('11th')}
        >
          <div className="level-card-icon">🧪</div>
          <h2 className="level-card-title">Class 11th</h2>
          <p className="level-card-description">
            Dive into advanced topics for your Science, Commerce, or Arts stream.
          </p>
          {/* Badge hata diya */}
          <button className="level-card-button">Select</button>
        </div>

        {/* Card for 12th --- YEH UPDATE HUA HAI --- */}
        <div 
          className="level-card" 
          onClick={() => handleLevelSelect('12th')}
        >
          <div className="level-card-icon">🎓</div>
          <h2 className="level-card-title">Class 12th</h2>
          <p className="level-card-description">
            Master your final year syllabus and prepare for competitive exams.
          </p>
          {/* Badge hata diya */}
          <button className="level-card-button">Select</button>
        </div>
      </div>
    </div>
  );
};

export default AcademicLevelPage;
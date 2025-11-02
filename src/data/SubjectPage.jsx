import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjectData } from './subjectData'; // Nayi data file
import './SubjectPage.css'; // Nayi CSS file

const SubjectPage = () => {
  // URL se parameter (e.g., "9th", "jee") padhein
  const { level } = useParams();
  const navigate = useNavigate();
  
  // Data file se course ki details nikaalein
  const course = subjectData[level];

  // Agar galat URL daala (jaise /subject/xyz)
  if (!course) {
    return (
      <div style={{ color: 'white', padding: '50px', textAlign: 'center' }}>
        <h1>Error 404</h1>
        <p>Course "{level}" not found.</p>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  // Button click handle karein (future ke liye)
  const handleButtonClick = (action, subject) => {
    // Example: /theory/9th/physics
    navigate(`/${action}/${level}/${subject.toLowerCase()}`);
  };

  return (
    <section className="subject-section">
      <div className="grain-bg"></div>
      <h1 className="subject-title">{course.title}</h1>
      
      <div className="subject-grid">
        {/* Course ke har subject ke liye ek card banayein */}
        {course.subjects.map((subject) => (
          <div key={subject} className="subject-card">
            <h2>{subject}</h2>
            <div className="subject-buttons">
              <button 
                className="subject-btn" 
                onClick={() => handleButtonClick('theory', subject)}
              >
                Theory
              </button>
              <button 
                className="subject-btn"
                onClick={() => handleButtonClick('videos', subject)}
              >
                Video Lecture
              </button>
              <button 
                className="subject-btn"
                onClick={() => handleButtonClick('quiz', subject)}
              >
                Quiz
              </button>
              <button 
                className="subject-btn"
                onClick={() => handleButtonClick('report', subject)}
              >
                Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubjectPage;
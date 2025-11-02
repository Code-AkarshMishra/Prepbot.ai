import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjectData } from '../data/subjectData';
import './SubjectPage.css';

const SubjectPage = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const course = subjectData[level];

  if (!course) {
    return (
      <div style={{ color: 'white', padding: '50px', textAlign: 'center' }}>
        <h1>Error 404</h1>
        <p>Course "{level}" not found.</p>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  // Button click handle karein (UPDATED LOGIC)
  const handleButtonClick = (action, subject) => {
    const subjectKey = subject.toLowerCase();

    if (action === 'videos') {
      navigate(`/videos/${level}/${subjectKey}`);
    } 
    else if (action === 'theory') {
      navigate(`/theory/${level}/${subjectKey}`);
    } 
    else {
      // Baaki buttons (Quiz, Report) abhi disabled hain
      alert(`The "${action}" page for ${subject} is coming soon!`);
    }
  };

  return (
    <section className="subject-section">
      <div className="grain-bg"></div>
      <h1 className="subject-title">{course.title}</h1>
      
      <div className="subject-grid">
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
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courseData } from '../data/courses.js'; // Humara main course data
import './TheoryPage.css'; // Hum is file ko agle step mein banayenge

const TheoryPage = () => {
  const { level, subject } = useParams();
  const navigate = useNavigate();

  // Data ko courses.js se fetch karein
  const course = courseData[level]?.[subject];

  // Agar course ya notes na mile
  if (!course || !course.notes || course.notes.length === 0) {
    return (
      <div style={{ color: 'white', padding: '50px', textAlign: 'center' }}>
        <h1>No Theory Found</h1>
        <p>Sorry, theory notes for "{subject}" are not available yet.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // PDF open karne ka function
  const openPDF = (note) => {
    // Abhi ke liye, sabhi links dummy.pdf par jaayenge
    alert(`Opening PDF for: ${note.title}\n(This is a demo linking to dummy.pdf)`);
    // Note: Iske kaam karne ke liye, 'public/pdfs/dummy.pdf' file honi chahiye
    window.open('/pdfs/dummy.pdf', "_blank");
  };

  return (
    // Humne aapki HTML file se classes li hain
    <div className="theory-page-body">
      <h1>Revisit The concept, Revise the Theory</h1>
      <h2 className="theory-page-subtitle">
        {course.title}
      </h2>

      <div className="container">
        {/* Saare chapters ki list yahaan dikhayi degi */}
        {course.notes.map((note, index) => (
          <div 
            key={note.id} 
            className="unit" 
            onClick={() => openPDF(note)}
          >
            📘 {index + 1}. {note.title}
          </div>
        ))}
      </div>

      <p>Click on any unit to open the PDF in a new tab.</p>
    </div>
  );
};

export default TheoryPage;
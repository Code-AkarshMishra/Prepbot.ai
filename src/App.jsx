import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

// Components aur Pages
import Navbar from './components/Navbar';
import ChatbotWidget from './components/ChatbotWidget';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AcademicLevelPage from './pages/AcademicLevelPage.jsx';
import SubjectPage from './pages/SubjectPage.jsx';
import VideoPage from './pages/VideoPage.jsx';
import TheoryPage from './pages/TheoryPage.jsx'; // Naya import

// Yeh aapke baaki ke pages hain jinke liye humne placeholder banaye hain
const QuizPage = () => <div style={{color: 'white', padding: '20px'}}>Quiz Page (To be built)</div>;
const TestPage = () => <div style={{color: 'white', padding: '20px'}}>Test Page (To be built)</div>;
const ReportPage = () => <div style={{color: 'white', padding: '20px'}}>Report Page (To be built)</div>;


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: '65px' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in/*" element={<LoginPage />} />
          <Route path="/sign-up/*" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={<SignedIn><DashboardPage /></SignedIn>} 
          />
          <Route 
            path="/academic-level" 
            element={<SignedIn><AcademicLevelPage /></SignedIn>} 
          />
          <Route 
            path="/subject/:level" 
            element={<SignedIn><SubjectPage /></SignedIn>} 
          />
          <Route 
            path="/videos/:level/:subject" 
            element={<SignedIn><VideoPage /></SignedIn>} 
          />
          <Route 
            path="/theory/:level/:subject" 
            element={<SignedIn><TheoryPage /></SignedIn>} 
          />

          {/* Baaki ke placeholder routes */}
          <Route path="/quiz" element={<SignedIn><QuizPage /></SignedIn>} />
          <Route path="/test" element={<SignedIn><TestPage /></SignedIn>} />
          <Route path="/report" element={<SignedIn><ReportPage /></SignedIn>} />

        </Routes>
      </main>
      <ChatbotWidget />
    </div>
  );
}
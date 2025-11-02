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
import VideoPage from './pages/VideoPage.jsx'; // Hum ab ise import kar rahe hain

// Yeh aapke baaki ke pages hain jinke liye humne placeholder banaye hain
const TheoryPage = () => <div style={{color: 'white', padding: '20px'}}>Theory Page (To be built)</div>;
const QuizPage = () => <div style={{color: 'white', padding: '20px'}}>Quiz Page (To be built)</div>;
const TestPage = () => <div style={{color: 'white', padding: '20px'}}>Test Page (To be built)</div>;
const ReportPage = () => <div style={{color: 'white', padding: '20px'}}>Report Page (To be built)</div>;


export default function App() {
  return (
    <div className="App">
      {/* Navbar har page par dikhega */}
      <Navbar />

      {/* Page content yahaan render hoga */}
      <main style={{ paddingTop: '65px' }}> {/* Navbar ki height ke liye padding */}
        <Routes>
          {/* Public Routes (Login ke bina bhi dikhenge) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in/*" element={<LoginPage />} />
          <Route path="/sign-up/*" element={<LoginPage />} />

          {/* Protected Routes (Login karna zaroori hai) */}
          {/* Dashboard */}
          <Route 
            path="/dashboard" 
            element={
              <SignedIn>
                <DashboardPage />
              </SignedIn>
            } 
          />
          {/* Academic Level */}
          <Route 
            path="/academic-level" 
            element={
              <SignedIn>
                <AcademicLevelPage />
              </SignedIn>
            } 
          />
          {/* Subject Page */}
          <Route 
            path="/subject/:level" // Example: /subject/9th
            element={
              <SignedIn>
                <SubjectPage />
              </SignedIn>
            } 
          />
          
          {/* --- YEH ROUTE UPDATE HUA HAI --- */}
          {/* Video Page (PlaylistPage ki jagah) */}
          <Route 
            path="/videos/:level/:subject" 
            element={<SignedIn><VideoPage /></SignedIn>} 
          />

          {/* Baaki ke placeholder routes */}
          <Route path="/theory" element={<SignedIn><TheoryPage /></SignedIn>} />
          <Route path="/quiz" element={<SignedIn><QuizPage /></SignedIn>} />
          <Route path="/test" element={<SignedIn><TestPage /></SignedIn>} />
          <Route path="/report" element={<SignedIn><ReportPage /></SignedIn>} />

        </Routes>
      </main>

      {/* Chatbot Widget har page par dikhega */}
      <ChatbotWidget />
    </div>
  );
}
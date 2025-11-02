// src/pages/HomePage.jsx

import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Make sure you have HomePage.css in the same folder
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [typewriterText, setTypewriterText] = useState('');

  // Typewriter Effect
  useEffect(() => {
    const text = "Personalized Learning Powered by AI";
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentText = text.substring(0, charIndex);
      setTypewriterText(currentText);

      let typeSpeed = isDeleting ? 50 : 75;

      if (!isDeleting && charIndex === text.length) {
        // Pause at end
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Pause at start
        typeSpeed = 500;
        isDeleting = false;
      }

      charIndex += isDeleting ? -1 : 1;
      timeoutId = setTimeout(type, typeSpeed);
    }

    type(); // Start effect

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {/* Navbar is in App.js, so we start with the hero section */}

      <section className="hero">
        <div className="hero-content">
          <h1>
            <span id="typewriter-line1" className="typewriter-text typing">
              {typewriterText}
            </span>
          </h1>
          <p>Prepbot.AI adapts to your learning style, speed, and knowledge level — turning education into an interactive and gamified journey.</p>
          {/* Use onClick with navigate for React routing */}
          <button onClick={() => navigate('/sign-up')} className="cta-btn hero-cta">
            Start Now
          </button>
        </div>
<div className="hero-animation-container">
          <video 
            className="hero-video"
            src="/animation.mp4"  /* Yeh public folder se video uthayega */
            autoPlay 
            loop 
            muted 
            playsInline
          >
          </video>
          {/* Yeh text video ke upar aayega */}
          <h2 className="hero-video-text">Prepbot.AI</h2>
        </div>

        <div className="floating-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
          <div className="shape shape5"></div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="features-header">
          <h2>Discover Our Powerful Features</h2>
          <p>Enhance your learning experience with our innovative tools designed to make education engaging, personalized, and fun.</p>
        </div>
        <div className="features-grid">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Adaptive Learning" />
            </div>
            <h3>Adaptive Learning</h3>
            <p>Our intelligent system analyzes your progress and tailors lessons accordingly. Whether you're a beginner or advanced learner, experience personalized content that keeps you motivated and on track.</p>
            <ul>
              <li>• Personalized quizzes</li>
              <li>• Progress tracking</li>
              <li>• Real-time feedback</li>
            </ul>
            <div className="hover-border"></div>
          </div>
          {/* Feature Card 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Gamified Dashboard" />
            </div>
            <h3>Gamified Dashboard</h3>
            <p>Stay motivated with our engaging dashboard that tracks your learning journey. Earn badges, unlock achievements, and compete with friends to make studying fun and addictive.</p>
            <ul>
              <li>• Badge system & rewards</li>
              <li>• Leaderboards</li>
              <li>• Progress milestones</li>
            </ul>
            <div className="hover-border"></div>
          </div>
          {/* Feature Card 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="Offline Mode" />
            </div>
            <h3>Offline Mode</h3>
            <p>Download lessons and quizzes to learn anytime, anywhere—even without an internet connection. Perfect for studying on the go or in areas with limited connectivity.</p>
            <ul>
              <li>• Download content</li>
              <li>• Offline quizzes</li>
              <li>• Seamless sync when online</li>
            </ul>
            <div className="hover-border"></div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Prepbot.AI</h2>
        <p className="about-description">
          Traditional online learning platforms treat all students the same, without considering individual learning paces, interests, or understanding levels. Prepbot.AI revolutionizes this by providing an AI-driven personalized learning experience that adapts content, difficulty, and study paths dynamically—making learning interactive, engaging, and tailored to each learner's needs.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-content">
              <div className="about-icon">
                <img src="https://img.icons8.com/ios-filled/80/00ffff/settings.png" alt="Adaptive Recommendations" />
              </div>
              <h3>Adaptive Recommendations</h3>
              <p>Personalized lessons and exercises based on quiz performance and learning patterns.</p>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-content">
              <div className="about-icon">
                <img src="https://img.icons8.com/ios-filled/80/00ffff/chat.png" alt="AI Mentor" />
              </div>
              <h3>AI Mentor Chatbot</h3>
              <p>Instant doubt-solving and guidance anytime, anywhere.</p>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-content">
              <div className="about-icon">
                <img src="httpsServices://img.icons8.com/ios-filled/80/00ffff/trophy.png" alt="Gamified Dashboard" />
              </div>
              <h3>Gamified Dashboard</h3>
              <p>Earn badges, streaks, and visualize your progress to stay motivated.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-logo">
          <span>Prepbot.AI</span>
        </div>
        <div className="footer-content">
          <div className="footer-column">
            <h4>Address</h4>
            <p>Tagore Hostel, SRMU, Lucknow</p>
          </div>
          <div className="footer-column">
            <h4>Helpline</h4>
            <p>9682043203</p>
          </div>
          <div className="footer-column">
            <h4>Email</h4>
            <p>support@prepbot.ai</p>
          </div>
        </div>
        <div className="footer-legal">
          <p>© 2025 PrepBot.AI | Built with ❤️ by Team PrepBot.AI</p>
        </div>
      </footer>
    </div>
  );
}
import React from 'react';
import './DashboardPage.css'; // Your existing CSS
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import UserStats from '../components/UserStats.jsx';
export default function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  // Helper function to navigate
  const handleExplore = (path) => {
    navigate(path);
  };

  // For hackathon demo, other cards can be disabled
  const handleComingSoon = () => {
    alert('This feature is coming soon!');
  };

  // Style for the images
  const iconStyle = {
    width: '60px',
    height: '60px',
    objectFit: 'contain', // Images ko stretch hone se rokega
    marginBottom: '15px' // Thodi spacing
  };

  return (
    <section>
      <div className="grain-bg"></div>
      
      <div className="relative">
        <span className="header-text">
         Welcome {user ? user.firstName : 'Dear'}!
        </span>
        
        <h1>Let’s power up your brain — what shall we learn today?</h1>
        
        <div className="grid">
          
          {/* Card 1: 9-12 Academic */}
          <div className="card" onClick={() => handleExplore('/academic-level')}>
            <div className="card-content">
              <img src="/icons/academic.jpg" alt="Academic" style={iconStyle} />
              <h2>9-12 <br /> Academic Level</h2>
              <p>
                Solve tough problems, simplify concepts, and prepare for exams — all faster and smarter. Get AI-powered help, instant answers, and personalized guidance — all in one place. Join PrepBot.AI today and learn smarter! 🚀
              </p>
              <button className="btn">Explore Now</button>
            </div>
          </div>

          {/* Card 2: JEE */}
          <div className="card" onClick={() => handleExplore('/subject/jee')}>
            <div className="card-content">
              <img src="/icons/jee.jpg" alt="JEE" style={iconStyle} />
              <h2>Jee Mains & <br /> Advanced</h2>
              <p>
               Master concepts, solve tough problems, and revise smarter — all with AI-powered guidance. Get instant solutions, notes, and personalized prep support for JEE Main & Advanced. Join PrepBot.AI and boost your JEE journey today! 🚀
              </p>
              <button className="btn">Explore Now</button>
            </div>
          </div>

          {/* Card 3: NEET */}
          <div className="card" onClick={() => handleExplore('/subject/neet')}>
            <div className="card-content">
              <img src="/icons/neet.png" alt="NEET" style={iconStyle} />
              <h2>NEET <br /> Examination</h2>
              <p>
                Simplify biology, master chemistry, and strengthen physics — all with AI-powered guidance. Get instant solutions, smart notes, and personalized prep support for NEET success. Join PrepBot.AI and start your smarter NEET journey today! 🚀
              </p>
              <button className="btn">Explore Now</button>
            </div>
          </div>

          {/* Card 4: GATE */}
          <div className="card" onClick={() => handleExplore('/subject/gate')}>
            <div className="card-content">
              <img src="/icons/gate.jpg" alt="GATE" style={iconStyle} />
              <h2>GATE <br /> Examination</h2>
              <p>
               Strengthen core concepts, solve complex problems, and revise smarter with AI-driven assistance. Get instant solutions, personalized guidance, and smart notes tailored for your GATE preparation. Join PrepBot.AI and power up your GATE journey today! 🚀
              </p>
              <button className="btn">Explore Now</button>
            </div>
          </div>

          {/* Card 5: Tech Skills */}
          <div className="card" onClick={() => handleExplore('/subject/tech')}>
            <div className="card-content">
              <img src="/icons/tech.png" alt="Tech Skills" style={iconStyle} />
              <h2>Tech <br /> Skills</h2>
              <p>
               Master Web & App Development, DevOps, and DSA in C++ or Java — all with smart AI guidance. Get hands-on learning, instant code help, and personalized roadmaps to grow faster. Join PrepBot.AI and start building your tech future today! 🚀
              </p>
             <button className="btn">Explore Now</button>
            </div>
          </div>

          {/* Card 6: UPSC --- UPDATED --- */}
          <div className="card coming-soon" onClick={handleComingSoon}>
            <div className="card-content">
              <img src="/icons/upsc.jpg" alt="UPSC" style={iconStyle} />
              <h2>UPSC <br /> Examinations</h2>
              <p>
                Simplify current affairs, master GS topics, and prepare smarter with AI-powered insights. Get instant notes, answer guidance, and personalized study support for every stage of UPSC. Join PrepBot.AI and make your IAS dream smarter! 🚀
              </p>
              <div className="coming-soon-badge">Coming Soon</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
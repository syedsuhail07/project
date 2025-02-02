import React, { useState } from "react";
import "./ExperiencesPage.css";

const ExperiencesPage = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  // IQ Game Questions (Hostel-themed)
  const iqQuestions = [
    { emojis: "🛏️🚪🪑", answer: "hostel room" },
    { emojis: "📚☕🌙", answer: "study night" },
    { emojis: "🔑🏃💨", answer: "lost keys" },
    { emojis: "🚿🕒🚫", answer: "cold shower" }
  ];

  // Feature details
  const features = [
    { 
      title: "Change Room", 
      emoji: "🔄", 
      details: "Request room changes with roommate compatibility matching and real-time availability updates."
    },
    { 
      title: "Generate Outpass", 
      emoji: "📄", 
      details: "Instant digital outpass generation with automated warden approval system."
    },
    { 
      title: "Submit Complaints", 
      emoji: "📢", 
      details: "Trackable complaint submission system with priority tagging and resolution timeline."
    },
    { 
      title: "Vacate Room", 
      emoji: "🚪", 
      details: "Structured vacate request process with automated checklist and clearance system."
    }
  ];

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === iqQuestions[currentQuestion].answer) {
      setScore(score + 1);
      alert("🎉 Correct! +1 point");
    } else {
      alert(`❌ Wrong! The answer was: ${iqQuestions[currentQuestion].answer}`);
    }
    setUserAnswer("");
    setCurrentQuestion((prev) => (prev + 1) % iqQuestions.length);
  };

  const BouncingBall = () => (
    <div className="bouncing-ball-container">
      <div className="outer-circle">
        <div className="bouncing-ball"></div>
      </div>
    </div>
  );

  return (
    <div className="experiences-container">
      {/* Floating Hostel Emojis */}
      <div className="floating-emojis">
        {['🏠', '🛏️', '📚', '🚪', '🎓', '🏢', '🪑'].map((emoji, index) => (
          <span 
            key={index} 
            className="floating-emoji"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Enhanced Navbar */}
      <nav className="hostel-navbar">
        <div className="navbar-brand">🏠 HostelHub</div>
        <div className="nav-links">
          {['Home', 'About', 'Experiences', 'Resources', 'Contact'].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Access Section */}
        <section className="access-section animate-slide-in">
          <div className="glass-card">
            <div className="text-content">
              <h1>🎓 Student & Admin Portal</h1>
              <BouncingBall />
              <p>
                Experience seamless hostel management with our intuitive platform. 
                Students can handle all accommodation needs while admins maintain 
                perfect hostel operations.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card animate-pop-in">
                  <div className="feature-emoji">{feature.emoji}</div>
                  <h3>{feature.title}</h3>
                  <button 
                    className="show-more"
                    onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                  >
                    {expandedFeature === index ? "Show Less" : "Show More"}
                  </button>
                  {expandedFeature === index && (
                    <div className="feature-details">
                      <p>{feature.details}</p>
                      <button 
                        className="action-button"
                        onClick={() => {/* Add navigation logic */}}
                      >
                        
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IQ Game Section */}
        <section className="iq-game-section animate-slide-up">
          <div className="glass-card">
            <h2>🧠 Hostel IQ Challenge</h2>
            <div className="game-container">
              <div className="emoji-question">
                {iqQuestions[currentQuestion].emojis}
              </div>
              <form onSubmit={handleAnswerSubmit}>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="What hostel situation is this?"
                />
                <button type="submit">Submit Answer</button>
              </form>
              <div className="score-board">
                Score: {score}/{iqQuestions.length}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section animate-fade-in">
          <div className="glass-card">
            <h2>🏡 Campus Living</h2>
            <div className="image-carousel">
              <div className="carousel-item" style={{ backgroundImage: "url('hostel1.jpg')" }}></div>
              <div className="carousel-item" style={{ backgroundImage: "url('hostel2.jpg')" }}></div>
              <div className="carousel-item" style={{ backgroundImage: "url('hostel3.jpg')" }}></div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="hostel-footer">
        <p>© 2025 HostelHub - Campus Accommodation Solutions</p>
      </footer>
    </div>
  );
};

export default ExperiencesPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
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
      <nav className="navbar hostel-navbar">
        <div className="navbar-brand">🏠 HostelHub</div>
        <div className="nav-links">
          {['Home', 'About', 'Experiences', 'Resources', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section animate-slide-in">
        <div className="hero-content">
          <h1>🏨 About HostelHub</h1>
          <p className="hero-subtitle">
            Redefining Student Accommodation Management 🎓
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section animate-fade-in">
        <div className="mission-card glass-card">
          <div className="mission-content">
            <h2>📜 Our Mission</h2>
            <p>
              To revolutionize hostel management through innovative technology, 
              creating seamless experiences for students and administrators alike.
            </p>
            <button 
              className="cta-button"
              onClick={() => navigate("/resources")}
            >
              Explore Features →
            </button>
          </div>
          <div className="mission-emojis">
            <span>🛏️</span>
            <span>📅</span>
            <span>🔑</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section animate-slide-up">
        <h2>👥 Meet Our Team</h2>
        <div className="team-grid">
          {[
            { name: "Syed", role: "CTO", emoji: "💻", social: "✖️" },
            { name: "Mazen", role: "COO", emoji: "📈", social: "📘" },
            { name: "Jesvin", role: "Marketing", emoji: "📢", social: "📷" },
            { name: "Ayman", role: "Support", emoji: "🤝", social: "🔗" }
          ].map((member, index) => (
            <div key={index} className="team-card">
              <div className="profile-emoji">{member.emoji}</div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <div className="social-icon">{member.social}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section animate-fade-in">
        <div className="vision-content">
          <div className="vision-text">
            <h2>🚀 </h2>
            <p>
              To become the global standard in campus accommodation management, 
              empowering educational institutions with smart, intuitive solutions.
            </p>
            <button 
              className="cta-button-outline"
              onClick={() => navigate("/complaints")}>
              OutPass 
            </button>
            
          </div>
          <div className="vision-graphics">
            <div className="graphic-item">🏢</div>
            <div className="graphic-item">📊</div>
            <div className="graphic-item">🤖</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hostel-footer animate-slide-up">
        <div className="footer-content">
          <div className="footer-brand">🏠 HostelHub</div>
          <div className="footer-links">
            <a href="/contact">📞 Contact</a>
            <a href="/privacy">🔒 Privacy</a>
            <a href="/terms">📝 Terms</a>
          </div>
        </div>
        <p className="copyright">© 2025 HostelHub - Campus Accommodation Solutions</p>
      </footer>
    </div>
  );
}

export default AboutPage;
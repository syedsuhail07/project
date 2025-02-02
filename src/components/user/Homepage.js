import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCog } from "react-icons/fa"; // Replaced FaUserCircle with FaUserCog
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Floating emojis data
  const emojis = ["🏠", "🏀", "⚽", "📚", "🏸", "🛏️", "🎓"];
  const [floatingElements] = useState(
    Array(15)
      .fill()
      .map(() => ({
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        style: {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          fontSize: `${Math.random() * 20 + 20}px`,
        },
      }))
  );

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="hostel-homepage">
      {/* Floating background emojis */}
      <div className="floating-emojis">
        {floatingElements.map((el, i) => (
          <span key={i} className="floating-emoji" style={el.style}>
            {el.emoji}
          </span>
        ))}
      </div>

      {/* Enhanced Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark hostel-navbar">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand" to="/home">
            <span className="hostel-logo">HostelHub</span>
          </Link>

          {/* Navbar Toggler (for mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu Items */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              {["Home", "About", "Experiences", "Resources", "Contact"].map(
                (item) => (
                  <li key={item} className="nav-item">
                    <Link className="nav-link" to={`/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* User Profile Dropdown */}
          <div className="user-profile">
            <FaUserCog
              size={32}
              className="profile-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="profile-dropdown">
                <Link to="/profile" className="dropdown-item">
                  👤 Profile
                </Link>
                <Link to="/logout" className="dropdown-item">
                  🚪 Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Permanent Notification Banner */}
      {/* <div className="notification-banner">
        <div className="banner-content">
          🚨 Important: Hostel curfew timing changed to 11 PM - 6 AM • Submit
          your room change requests by 25th October • Fire drill scheduled for
          20th October 3 PM 🚨
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title animate__animated animate__fadeInDown">
            Welcome to HostelHub 🎓
          </h1>
          <p className="hero-subtitle">
            Your Ultimate Campus Accommodation Solution 🏠
          </p>
          <button className="cta-button" onClick={() => navigate("/bookroom")}>
            Book Your Room Now 🛏️
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features ⚡</h2>
          <div className="features-grid">
            {[
              { title: "Change Request", emoji: "🔄", link: "/changeroom" },
              { title: "Digital Outpass", emoji: "📄", link: "/outpass" },
              { title: "Quick Complaints", emoji: "📢", link: "/complaints" },
              { title: "Vacate Request", emoji: "🚪", link: "/vacate" },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                onClick={() => navigate(feature.link)}
              >
                <div className="feature-emoji">{feature.emoji}</div>
                <h3 className="feature-title">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Student Experiences 🗣️</h2>
          <div className="testimonials-grid">
            {[
              {
                text: "The room booking process was seamless!",
                author: "Ahmad Sheikh ⭐⭐⭐⭐⭐",
                emoji: "😊",
              },
              {
                text: "Best hostel management system ever!",
                author: "Manish Royal ⭐⭐⭐⭐⭐",
                emoji: "🎉",
              },
              {
                text: "Quick complaint resolution system",
                author: "BrownHood ⭐⭐⭐⭐",
                emoji: "🚀",
              },
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-emoji">{testimonial.emoji}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Footer) */}
      <footer className="contact-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>🏠 HostelHub</h3>
              <p>Redefining Campus Living</p>
              <div className="social-links">
                {["📘", "📸"].map((emoji, i) => (
                  <span key={i} className="social-icon">
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
            <div className="footer-section">
              <h4>Contact Us 📞</h4>
              <p>📧 contact@hostelhub.com</p>
              <p>📱 +91 12345 67890</p>
              <p>📍 Campus Road, University Town</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 HostelHub | Campus Accommodation Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

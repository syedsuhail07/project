import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ResourcesPage.css";
import { useNavigate } from "react-router-dom";

function ResourcesPage() {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle cursor movement for color-changing block
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setCursorPosition({ x, y });
  };

  return (
    <div className="resources-container">
      {/* Color-Changing Block */}
      <div
        className="color-block"
        onMouseMove={handleMouseMove}
        style={{
          background: `linear-gradient(45deg, hsl(${cursorPosition.x}, 80%, 50%), hsl(${cursorPosition.y}, 80%, 50%))`,
        }}
      ></div>

      {/* Floating Hostel Emojis */}
      <div className="floating-emojis">
        {["🏠", "🛏️", "📚", "🚪", "🎓", "🏢", "🪑"].map((emoji, index) => (
          <span
            key={index}
            className="floating-emoji"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 20}px`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <a className="navbar-brand">
          <b>🏠 Hostel Hub</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {["Home", "About", "Experiences", "Resources", "Contact"].map(
              (item) => (
                <li key={item} className="nav-item">
                  <a className="nav-link" href={`/${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* User Guide Section */}
      <section className="user-guide-section py-5 animate-slide-in">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>📚 User Guide</h1>
              <p className="lead">
                Welcome to Hostel Hub, your one-stop platform for all your hostel
                needs. With just a few clicks, you can book a room, request a
                room change, generate an outpass, file a complaint, or request to
                vacate a room.
              </p>
              {/* <button
                className="btn btn-primary"
                onClick={() => navigate("/bookroom")}
              >
                Get Started →
              </button> */}
            </div>
            <div className="col-md-6">
              {[
                {
                  title: "Change Room Request",
                  emoji: "🔄",
                  description:
                    "Need a change of room? Submit your request here, and our team will assist you in finding a suitable alternative according to your preferences.",
                },
                {
                  title: "Generate Outpass",
                  emoji: "📄",
                  description:
                    "Generate an outpass quickly and conveniently for your authorized outings. Simply fill in the required details and get your outpass in minutes.",
                },
                {
                  title: "Complaints",
                  emoji: "📢",
                  description:
                    "Have a concern or complaint? Let us know, and we'll address it promptly to ensure a comfortable living experience for you and your fellow residents.",
                },
              ].map((feature, index) => (
                <div key={index} className="guide-feature animate-pop-in">
                  <div className="feature-header">
                    <span className="feature-emoji">{feature.emoji}</span>
                    <h5>{feature.title}</h5>
                  </div>
                  <p>{feature.description}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section text-center py-5 animate-fade-in">
        <div className="container">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              {
                question: "How do I book a room?",
                answer: "Navigate to the 'Book Room' section and follow the steps.",
              },
              {
                question: "Can I change my room after booking?",
                answer: "Yes, submit a room change request in the 'Change Room' section.",
              },
              {
                question: "How long does it take to process complaints?",
                answer: "Complaints are typically resolved within 24-48 hours.",
              },
            ].map((faq, index) => (
              <div key={index} className="faq-card">
                <h5>{faq.question}</h5>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-light">
        <p>© 2035 by Hostel Hub</p>
      </footer>
    </div>
  );
}

export default ResourcesPage;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactPage.css";

function ContactPage() {
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
    <div className="contact-container">
      {/* Color-Changing Block */}
      <div
        className="color-block"
        onMouseMove={handleMouseMove}
        style={{
          background: `linear-gradient(45deg, hsl(${cursorPosition.x}, 80%, 50%), hsl(${cursorPosition.y}, 80%, 50%))`,
        }}
      ></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <a className="navbar-brand">
          <b>Hostel Hub</b>
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

      {/* Get in Touch Section */}
      <section className="get-in-touch-section py-5 animate-slide-in">
        <div className="container">
          <h1>📨 Get in Touch</h1>
          <p className="lead">
            For any inquiries or assistance, feel free to reach out to us. We are
            here to help you with all your hostel needs.
          </p>
          <div className="contact-info">
            <div className="info-card">
              <span>📍</span>
              <h5>Address</h5>
              <p>123 Hostel Lane, Campus Town, IN</p>
            </div>
            <div className="info-card">
              <span>📞</span>
              <h5>Phone</h5>
              <p>+91 12345 67890</p>
            </div>
            <div className="info-card">
              <span>📧</span>
              <h5>Email</h5>
              <p>support@hostelhub.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5 animate-fade-in">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>📝 Contact Us Today</h2>
              <p>
                Complete the form below to get in touch with us. We will respond
                to your inquiry as soon as possible.
              </p>
            </div>
            <div className="col-md-6">
              <form className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section animate-slide-up">
        <div className="container text-center">
          <p>© 2025 by Hostel Hub - Campus Accommodation Solutions</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <a className="navbar-brand">Hostel Hub</a>
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
            <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/experiences">Experiences</a></li>
            <li className="nav-item"><a className="nav-link" href="/resources">Resources</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      

      {/* Purpose Section */}
      <section className="purpose-section text-center d-flex justify-content-center align-items-center" id="about">
        <div className="container">
          <h1 className="display-4">Our Purpose</h1>
          <p className="lead">
            At Hostel Hub, our mission is to provide an intuitive platform for students to easily book rooms, request room changes, generate outpasses, raise complaints, and submit vacate room requests.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section py-5" id="team">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="team-member">
                <div className="profile-picture bg-light"></div>
                <h5>Jane Smith</h5>
                <p>Adam Gupta</p>
                <p>CTO</p>
                <p className="social-icons">📷 📘 ✖️ 🔗</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="team-member">
                <div className="profile-picture bg-light"></div>
                <h5>David Lee</h5>
                <p>Sophie Chen</p>
                <p>COO</p>
                <p className="social-icons">📷 📘 ✖️ 🔗</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="team-member">
                <div className="profile-picture bg-light"></div>
                <h5>Sara Johnson</h5>
                <p>Mohammed Ali</p>
                <p>Marketing Manager</p>
                <p className="social-icons">📷 📘 ✖️ 🔗</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="team-member">
                <div className="profile-picture bg-light"></div>
                <h5>Michael Brown</h5>
                <p>Job Title</p>
                <p>Customer Support</p>
                <p className="social-icons">📷 📘 ✖️ 🔗</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section d-flex align-items-center py-5" id="vision">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Vision. Our Mission. Our Legacy.</h2>
              <p>All About Our Story</p>
              <p>This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique.</p>
              <button className="btn btn-outline-primary">Explore</button>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="vision-image bg-light"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-light">
        <p>© 2035 by Business Name. Built on Wix Studio</p>
      </footer>
    </div>
  );
};

export default AboutPage;
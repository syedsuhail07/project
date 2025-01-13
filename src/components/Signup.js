// src/components/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupInfo.password !== signupInfo.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setError('');
    console.log('Signing up with:', signupInfo);
    // Additional signup logic here (e.g., API call)
  };

  return (
    <div className="signup-container">
      {/* Animated logo */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/4470/4470315.png"
        alt="Hostel Logo"
        className="animated-logo"
      />
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              placeholder="Enter a password"
              required
            />
          </div>
          <div className="input-group">
            <label>Re-enter Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={signupInfo.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

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
      setError("🔒 Passwords don't match!");
      return;
    }
    setError('');
    console.log('Signing up with:', signupInfo);
  };

  return (
    <div className="signup-container">
      <div className="floating-emojis">
        <span>🏈</span>
        <span>🏸</span>
        <span>📚</span>
        <span>💻</span>
        <span>🍔</span>
      </div>

      <div className="signup-box">
        <div className="signup-header">
          <h1>🎉 Join Campus Life! 🎓</h1>
          <p>Create your account in 30 seconds ⏳</p>
        </div>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>📧 Campus Email:</label>
            <input
              type="email"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              placeholder="student@university.edu"
              required
            />
          </div>

          <div className="password-section">
            <div className="input-group">
              <label>🔑 Create Password:</label>
              <input
                type="password"
                name="password"
                value={signupInfo.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="input-group">
              <label>✅ Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={signupInfo.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && <div className="error-message">🚨 {error}</div>}

          <div className="terms-section">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">📝 I agree to Terms & Conditions</label>
          </div>

          <button type="submit" className="signup-button">
            🎓 Create Account
          </button>

          <div className="social-signup">
            <p>⚡ Quick Signup With:</p>
            <div className="social-buttons">
              <button type="button" className="google-btn">
                🅖 Google
              </button>
              <button type="button" className="microsoft-btn">
                Ⓜ️ Microsoft
              </button>
            </div>
          </div>
        </form>

        <div className="signup-footer">
          <p>🏠 Already part of our hostel? <Link to="/">Login Here</Link></p>
          <p>📞 Need help? <Link to="/support">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
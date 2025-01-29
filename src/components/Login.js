import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form refresh

    const { email, password } = loginInfo;

    // Debugging: Log the credentials to ensure they are captured correctly
    console.log('Email:', email, 'Password:', password);

    // Navigate based on credentials
    if (email === 'admin@example.com' && password === 'admin123') {
      navigate('/admin'); // Redirect to admin dashboard
    } else if (email === 'user@example.com' && password === 'user123') {
      navigate('/home'); // Redirect to user dashboard
    } else {
      setError('Invalid email or password');
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Hostel Logo" className="login-logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginInfo.email}
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
              value={loginInfo.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
}

export default Login;

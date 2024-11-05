import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <h1 className="main-title">Hostel Management</h1>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-field">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          No account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default App;

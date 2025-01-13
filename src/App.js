import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (credentials) => {
    const { email, password } = credentials;
    if (email === 'test@example.com' && password === 'password') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={isAuthenticated ? <Homepage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

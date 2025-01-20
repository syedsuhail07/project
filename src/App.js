import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/user/Homepage';
import Adminhome from './components/admin/Adminhome';
import Userdashboard from './components/user/userdashboard';
import UserProfile from './components/user/userprofile';
import Outpass from './components/admin/outpass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/admin" element={<Adminhome />} />
        <Route path="/user-dashboard" element={<Userdashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/outpass" element={<Outpass />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

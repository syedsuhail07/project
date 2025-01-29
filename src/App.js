import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from "./components/Login";
import Signup from './components/Signup';
import Homepage from './components/user/Homepage';
import Adminhome from './components/admin/Adminhome';
import AdminTickets from "./components/admin/AdminTickets";

// import Userdashboard from './components/user/userdashboard';
import UserProfile from './components/user/userprofile';
import Outpass from './components/admin/outpass';
import AboutPage from './components/user/AboutPage';
import ExperiencesPage from './components/user/ExperiencesPage';
import ResourcesPage from './components/user/ResourcesPage';
import ContactPage from './components/user/ContactPage';

import BookRoom from "./components/user/BookRoom";
import ChangeRoom from "./components/user/ChangeRoom";
import GenerateOutPass from "./components/user/GenerateOutPass";
import Complaints from "./components/user/Complaints";
import VacateRoom from "./components/user/VacateRoom";
function App() {
  return (
    <Router>
      
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/admin" element={<Adminhome />} />
        <Route path="/admin-tickets" element={<AdminTickets />} />
        {/* <Route path="/user-dashboard" element={<Userdashboard />} /> */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/outpass" element={<Outpass />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/bookroom" element={<BookRoom />} />
        <Route path="/changeroom" element={<ChangeRoom />} />
        <Route path="/outpass" element={<GenerateOutPass />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/vacate" element={<VacateRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
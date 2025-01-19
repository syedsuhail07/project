import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './userdashboard.css'; // Reusing the same CSS file for consistent styles

function Userdashboard() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="homepage-container">
      {/* Top Navigation Bar */}
      <div className="topbar">
        <div className="logo">
          <h3>Hostel Management System</h3>
        </div>
        <ul className="nav-links">
        <li className="item"><Link to="/user-dashboard">Dashboard</Link></li>
        <li className="item"><Link to="#">Complaint registration</Link></li>
            <li className="item"><Link to="#">Change Room Request</Link></li>
            <li className="item"><Link to="#">Room Booking</Link></li>
            <li className="item"><Link to="#">Outpass Registration</Link></li>
            <li className="item"><Link to="#">Hostel Vacate Management</Link></li>
        </ul>
          <div className="profile" onClick={toggleDropdown}>
                    <div className="profile-icon">
                      <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" />
                    </div>
                    <p>User</p>
                    {dropdown && (
                      <ul className="dropdown-menu dropdown-menu-show">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/login">Logout</Link></li>
          
                      </ul>
                    )}
                  </div>    
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome to the User Dashboard</h2>
        <div className="info-section">
          <div className="info-box">
            <h3>Announcements</h3>
            <p>Upcoming hostel meeting on Jan 20, 2025. Attendance is mandatory.</p>
          </div>
          <div className="info-box">
            <h3>Events</h3>
            <p>Sports day scheduled for Jan 25, 2025. Register at the reception.</p>
          </div>
          <div className="info-box">
            <h3>Important Info</h3>
            <p>Maintenance work in Block A from Jan 18–22, 2025. Please cooperate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdashboard;

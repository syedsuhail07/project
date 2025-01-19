import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Adminhome.css";

function Adminhome() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="adminhome-container">
      {/* Horizontal Navigation Bar */}
      <div className="topbar">
        <div className="logo">
          <h3>Admin Panel</h3>
        </div>
        <ul className="nav-links">
        <li className="item">
            <Link to="/admin">Dashboard</Link>
          </li>
          <li className="item">
            <Link to="#">Manage Complaints</Link>
          </li>
          <li className="item">
            <Link to="#">Approve Outpasses</Link>
          </li>
          <li className="item">
            <Link to="#">Room Allocation</Link>
          </li>
        </ul>
        <div className="profile">
          <button onClick={toggleDropdown} className="admin-button">
            Admin
          </button>
          <div className="profile-icon">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Profile"
            />
          </div>
          {dropdown && (
            <ul className="dropdown-menu dropdown-menu-show">
              <li>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome, Admin</h2>

        {/* Statistics Section */}
        <div className="stats-container">
          <div className="stat-box">
            <h3>Total Number of Rooms - Three Sharing</h3>
            <p>100</p>
          </div>
          <div className="stat-box">
            <h3>Number of Students</h3>
            <p>250</p>
          </div>
          <div className="stat-box">
            <h3>Rooms Allotted (Three Sharing)</h3>
            <p>84</p>
          </div>
          <div className="stat-box">
            <h3>Available Rooms (Three Sharing)</h3>
            <p>16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;

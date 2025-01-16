import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Adminhome.css';

function Adminhome() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };

  return (
    <div className="adminhome-container">
      <div className="topbar">
        <div className="logo">
          <h3>Admin Panel</h3>
        </div>
        <ul className="nav-links">
          <li className="item"><Link to="#">Complaint Management</Link></li>
          <li className="item"><Link to="#">Outpass Management</Link></li>
          <li className="item"><Link to="#">Manage Requests</Link></li>
          <li className="dropdown">
            <button onClick={toggleDropdown}>More</button>
                        {dropdown && (
                          <ul className="dropdown-menu">
                            <li><Link to="/">Logout</Link></li>
                          </ul>
                        )}
                      </li>
          </ul>
                    <div className="profile">
                      <div className="profile-icon">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" />
                      </div>
                      <p>Admin</p>
                    </div>
                  </div>
      
      <div className="main-content">
        <h2>Welcome to the Admin Dashboard</h2>
        {/* Add Admin-specific content here */}
      </div>
    </div>
  );
}

export default Adminhome;
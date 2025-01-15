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
          <li className="item"><Link to="#">Dashboard</Link></li>
          <li className="item"><Link to="#">User Management</Link></li>
          <li className="item"><Link to="#">Reports</Link></li>
          <li className="item"><Link to="#">Settings</Link></li>
          <li className="dropdown">
            <button onClick={toggleDropdown}>More</button>
            {dropdown && (
              <ul className="dropdown-menu">
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Welcome to the Admin Dashboard</h2>
        {/* Add Admin-specific content here */}
      </div>
    </div>
  );
}

export default Adminhome;
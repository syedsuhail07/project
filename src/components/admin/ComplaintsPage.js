import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './ComplaintsPage.css';

const ComplaintsPage = () => {
  // ... keep existing state and data ...

  return (
    <div className="complaints-container">
      {/* Navigation Bar */}
      {/* Navigation Bar */}
            <nav className="admin-navbar">
              <div className="nav-left">
                <div className="logo">
                  <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h2>Admin Panel</h2>
                  </Link>
                </div>
                <div className="nav-links">
                  <Link to="/room-allocation" className="nav-link">
                    Room Allocation
                  </Link>
                  <Link to="/outpass-data" className="nav-link">
                    Outpass Data
                  </Link>
                  <Link to="/complaints" className="nav-link active">
                    Complaints
                  </Link>
                </div>
              </div>
            </nav>

      {/* Rest of the component remains the same */}
    </div>
  );
};

export default ComplaintsPage;
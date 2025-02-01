import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminHome.css';

const AdminHome = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, name: 'Syed', roomNumber: '301', status: 'Pending' },
    { id: 2, name: 'Royal', roomNumber: '205', status: 'Pending' }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  const handleApprove = (id) => {
    setPendingRequests(pendingRequests.map(request => 
      request.id === id ? { ...request, status: 'Approved' } : request
    ));
  };

  const handleReject = (id) => {
    setPendingRequests(pendingRequests.map(request => 
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <div className="nav-left">
          <div className="logo">
            <h2>Admin Panel</h2>
          </div>
          <div className="nav-links">
            <Link to="/room-allocation" className="nav-link">Room Allocation</Link>
            <Link to="/outpass-data" className="nav-link">Outpass Data</Link>
            <Link to="/complaints-page" className="nav-link">Complaints</Link>
            <Link to="/vacate-request" className="nav-link">Vacate Request</Link>
          </div>
        </div>
        <div className="nav-right">
          <button className="logout-btn" onClick={() => setShowLogoutModal(true)}>Logout</button>
        </div>
      </nav>

      {showLogoutModal && (
        <div className="logout-modal">
          <div className="modal-content">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <button className="confirm-btn" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}

      <main className="admin-content">
        <h1>Welcome, Administrator</h1>
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Rooms</h3>
            <p>150</p>
          </div>
          <div className="stat-card">
            <h3>Active Students</h3>
            <p>450</p>
          </div>
          <div className="stat-card">
            <h3>Pending Requests</h3>
            <p>{pendingRequests.filter(req => req.status === 'Pending').length}</p>
          </div>
        </div>
        
        <div className="request-list">
          <h2>Pending Room Requests</h2>
          {pendingRequests.length === 0 ? <p>No pending requests</p> : (
            pendingRequests.map(request => (
              <div key={request.id} className="request-card">
                <p><strong>Name:</strong> {request.name}</p>
                <p><strong>Room Number:</strong> {request.roomNumber}</p>
                <p><strong>Status:</strong> {request.status}</p>
                {request.status === 'Pending' && (
                  <div className="action-buttons">
                    <button onClick={() => handleApprove(request.id)} className="approve-btn">Approve</button>
                    <button onClick={() => handleReject(request.id)} className="reject-btn">Reject</button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <div className="world-map-card">
          <div className="map-container">
            <div className="world-map"></div>
          </div>
          <div className="map-overlay">
            <h3>Hostel Network</h3>
            <p>Explore our hostels across the Campus</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;

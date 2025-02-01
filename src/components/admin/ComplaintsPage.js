import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import './ComplaintsPage.css'; 

const ComplaintsPage = () => {
  const location = useLocation();
  const [complaints, setComplaints] = useState([
    { id: 1, user: 'Syed', email: 'syed@example.com', roomNumber: '301', issue: 'WiFi not working', status: 'pending' },
    { id: 2, user: 'Royal', email: 'royal@example.com', roomNumber: '205', issue: 'Room AC not functioning', status: 'pending' }
  ]);

  const handleResolve = (id) => {
    setComplaints(complaints.map(complaint => 
      complaint.id === id ? { ...complaint, status: 'resolved' } : complaint
    ));
  };

  return (
    <div className="complaints-page-container">
      <nav className="admin-navbar">
        <div className="nav-left">
          <div className="logo">
            <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2>Admin Panel</h2>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/room-allocation" className={`nav-link ${location.pathname === "/room-allocation" ? "active" : ""}`}>Room Allocation</Link>
            <Link to="/outpass-data" className={`nav-link ${location.pathname === "/outpass-data" ? "active" : ""}`}>Outpass Data</Link>
            <Link to="/complaints-page" className={`nav-link ${location.pathname === "/complaints-page" ? "active" : ""}`}>Complaints</Link>
            <Link to="/vacate-request" className={`nav-link ${location.pathname === "/vacate-request" ? "active" : ""}`}>Vacate Request</Link>
          </div>
        </div>
      </nav>

      <div className="complaints-list">
        <h2>Complaints</h2>
        {complaints.length === 0 ? (
          <p>No complaints submitted.</p>
        ) : (
          complaints.map(complaint => (
            <div key={complaint.id} className="complaint-card">
              <h4>{complaint.user}</h4>
              <p><strong>Email:</strong> {complaint.email}</p>
              <p><strong>Room Number:</strong> {complaint.roomNumber}</p>
              <p><strong>Issue:</strong> {complaint.issue}</p>
              <p>Status: <span className={complaint.status}>{complaint.status}</span></p>
              {complaint.status === 'pending' && (
                <button onClick={() => handleResolve(complaint.id)} className="resolve-btn">Resolve</button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ComplaintsPage;

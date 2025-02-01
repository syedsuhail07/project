import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './VacateRequest.css'; // Create this CSS file


const VacateRequest = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      roomNumber: 'A-101',
      vacateDate: '2024-03-15',
      reason: 'Completion of studies',
      status: 'pending',
      submittedDate: '2024-03-01'
    },
    // Add more mock data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleApprove = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'approved' } : request
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'rejected' } : request
    ));
  };

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.roomNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || request.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="vacate-request-container">
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
            <Link to="/complaints-page" className="nav-link">
              Complaints
            </Link>
            <Link to="/vacate-request" className="nav-link active">
              Vacate Request
            </Link>
          </div>
        </div>
      </nav>

      <div className="vacate-content">
        <div className="filters">
          <input
            type="text"
            placeholder="Search by name or room..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select 
            value={selectedStatus} 
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="requests-list">
          {filteredRequests.length === 0 ? (
            <div className="no-requests">No vacate requests found</div>
          ) : (
            filteredRequests.map(request => (
              <div key={request.id} className="request-card">
                <div className="request-info">
                  <h3>{request.studentName}</h3>
                  <p>Room: {request.roomNumber}</p>
                  <p>Vacate Date: {request.vacateDate}</p>
                  <p>Reason: {request.reason}</p>
                  <p>Submitted: {request.submittedDate}</p>
                </div>
                <div className="request-actions">
                  <span className={`status-badge ${request.status}`}>
                    {request.status}
                  </span>
                  {request.status === 'pending' && (
                    <div className="action-buttons">
                      <button 
                        onClick={() => handleApprove(request.id)}
                        className="approve-btn"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleReject(request.id)}
                        className="reject-btn"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VacateRequest;
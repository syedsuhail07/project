import React, { useState } from "react";
import "./ChangeRoom.css";

const ChangeRoom = () => {
  const loggedInUser = {
    id: 1,
    name: "Syed",
    email: "syed@mail.com",
    phone: "123-456-7890",
    currentRoom: "101",
    block: "Block A",
    floor: "2nd Floor",
    roomType: "AC Double Sharing"
  };

  const [changeRequest, setChangeRequest] = useState({
    desiredRoom: "",
    reason: "",
  });

  const [recentRequest, setRecentRequest] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChangeRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (changeRequest.desiredRoom && changeRequest.reason) {
      const currentDate = new Date();
      const requestDetails = {
        ...loggedInUser,
        ...changeRequest,
        date: currentDate.toLocaleDateString('en-GB'),
        time: currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        status: "Pending Approval",
        requestId: `REQ-${Math.floor(1000 + Math.random() * 9000)}`
      };
      setRecentRequest(requestDetails);
      setChangeRequest({ desiredRoom: "", reason: "" });
    }
  };

  // Handler for printing the request summary
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="room-change-container">
      <div className="management-header">
        <h1>Hostel Room Change Management</h1>
        <p className="system-version">Hostel HUb</p>
      </div>

      <div className="content-wrapper">
        {/* User Profile Section */}
        <div className="user-profile-card">
          <div className="profile-header">
            <h2>Student Profile</h2>
            <span className="user-status active">Active</span>
          </div>
          <div className="profile-grid">
            <div className="profile-item">
              <span className="profile-label">Name:</span>
              <span className="profile-value">{loggedInUser.name}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Current Room:</span>
              <span className="profile-value highlight">{loggedInUser.currentRoom}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Block/Floor:</span>
              <span className="profile-value">{loggedInUser.block} ({loggedInUser.floor})</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Room Type:</span>
              <span className="profile-value">{loggedInUser.roomType}</span>
            </div>
          </div>
        </div>

        {/* Request Form Section */}
        <div className="request-form-card">
          <div className="form-header">
            <h2>Room Change Request Form</h2>
            <div className="form-steps">
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Desired Room Number</label>
              <input
                type="text"
                name="desiredRoom"
                value={changeRequest.desiredRoom}
                onChange={handleInputChange}
                placeholder="Enter new room number"
                className="modern-input"
              />
            </div>

            <div className="form-group">
              <label>Reason for Change</label>
              <textarea
                name="reason"
                value={changeRequest.reason}
                onChange={handleInputChange}
                placeholder="Provide detailed reason for room change..."
                className="modern-textarea"
                rows="4"
              />
              <span className="char-count">{changeRequest.reason.length}/250</span>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-request-btn">
                <span className="btn-icon">📨</span>
                Submit Request
              </button>
              <button type="button" className="cancel-btn">
                Clear Form
              </button>
            </div>
          </form>
        </div>

        {/* Recent Request Section */}
        {recentRequest && (
          <div className="request-details-card">
            <div className="request-header">
              <h3>Request Summary</h3>
              <span className={`status-badge ${recentRequest.status.toLowerCase().replace(' ', '-')}`}>
                {recentRequest.status}
              </span>
            </div>
            <div className="request-details">
              <div className="detail-column">
                <div className="detail-item">
                  <span className="detail-label">Request ID:</span>
                  <span className="detail-value">{recentRequest.requestId}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Date Submitted:</span>
                  <span className="detail-value">{recentRequest.date} | {recentRequest.time}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Current Room:</span>
                  <span className="detail-value highlight">{recentRequest.currentRoom}</span>
                </div>
              </div>
              <div className="detail-column">
                <div className="detail-item">
                  <span className="detail-label">Desired Room:</span>
                  <span className="detail-value highlight">{recentRequest.desiredRoom}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Block/Floor:</span>
                  <span className="detail-value">{recentRequest.block} ({recentRequest.floor})</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Contact:</span>
                  <span className="detail-value">
                    {recentRequest.phone}
                    <br />
                    {recentRequest.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="reason-section">
              <h4>Change Reason:</h4>
              <p className="reason-text">{recentRequest.reason}</p>
            </div>
            {/* <div className="request-actions">
              <button className="print-btn" onClick={handlePrint}>
                🖨️ Print Request
              </button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeRoom;

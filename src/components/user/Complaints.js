import React, { useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiClock, FiEdit, FiUser, FiMail, FiList } from "react-icons/fi";
import "./Complaints.css";

const Complaints = () => {
  const [complaintDetails, setComplaintDetails] = useState({
    name: "",
    email: "",
    complaintType: "Room Complaints",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submissionTime, setSubmissionTime] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [showAllTickets, setShowAllTickets] = useState(false);

  const complaintTypes = [
    "Room Complaints",
    "Hostel Facilities",
    "Hostel Rights",
    "Sanitation",
    "Security"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaintDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (complaintDetails.name && complaintDetails.email && complaintDetails.description) {
      const newTicket = {
        ...complaintDetails,
        id: `COMP-${Date.now().toString().slice(-6)}`,
        status: "Pending Review",
        submissionTime: new Date(),
      };
      setTickets(prevTickets => [newTicket, ...prevTickets]);
      setSubmitted(true);
      setSubmissionTime(new Date());
    }
  };

  const handleShowAllTickets = () => {
    setShowAllTickets(!showAllTickets);
  };

  return (
    <div className="complaints-container">
      <div className="complaints-header">
        <FiAlertCircle className="header-icon" />
        <h1>Hostel Complaint Portal</h1>
        <p>Submit and track your maintenance requests</p>
      </div>

      {!submitted ? (
        <div className="complaint-form-container">
          <form onSubmit={handleSubmit} className="complaint-form">
            <div className="form-section">
              <label className="input-group">
                <span className="input-label"><FiUser /> Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={complaintDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>
            </div>

            <div className="form-section">
              <label className="input-group">
                <span className="input-label"><FiMail /> Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={complaintDetails.email}
                  onChange={handleInputChange}
                  placeholder="Enter your institutional email"
                  required
                />
              </label>
            </div>

            <div className="form-section">
              <span className="input-label"><FiEdit /> Complaint Type</span>
              <div className="complaint-type-grid">
                {complaintTypes.map(type => (
                  <button
                    type="button"
                    key={type}
                    className={`type-btn ${complaintDetails.complaintType === type ? 'active' : ''}`}
                    onClick={() => setComplaintDetails(prev => ({ ...prev, complaintType: type }))}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label className="input-group">
                <span className="input-label"><FiEdit /> Complaint Details</span>
                <textarea
                  name="description"
                  value={complaintDetails.description}
                  onChange={handleInputChange}
                  placeholder="Describe your issue in detail..."
                  rows="5"
                  required
                />
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit Complaint
            </button>
          </form>
        </div>
      ) : (
        <div className="confirmation-card">
          <div className="confirmation-header">
            <FiCheckCircle className="success-icon" />
            <h2>Complaint Submitted Successfully!</h2>
            <p className="reference-id">Reference ID: {tickets[0].id}</p>
          </div>

          <div className="complaint-summary">
            <div className="summary-item">
              <span>Complaint Type:</span>
              <p>{tickets[0].complaintType}</p>
            </div>
            <div className="summary-item">
              <span>Submitted By:</span>
              <p>{tickets[0].name}</p>
            </div>
            <div className="summary-item">
              <span>Submission Time:</span>
              <p><FiClock /> {tickets[0].submissionTime.toLocaleString()}</p>
            </div>
            <div className="summary-item status">
              <span>Current Status:</span>
              <div className="status-badge">{tickets[0].status}</div>
            </div>
          </div>

          <button
            className="new-complaint-btn"
            onClick={() => setSubmitted(false)}
          >
            Submit New Complaint
          </button>

          <button
            className="show-tickets-btn"
            onClick={handleShowAllTickets}
          >
            <FiList /> {showAllTickets ? "Hide All Tickets" : "Show All Tickets"}
          </button>
        </div>
      )}

      {showAllTickets && (
        <div className="all-tickets-container">
          <h2>All Tickets</h2>
          <div className="tickets-list">
            {tickets.map(ticket => (
              <div key={ticket.id} className="ticket-card">
                <div className="ticket-header">
                  <span>Reference ID: {ticket.id}</span>
                  <div className={`status-badge ${ticket.status.toLowerCase().replace(" ", "-")}`}>
                    {ticket.status}
                  </div>
                </div>
                <div className="ticket-details">
                  <p><strong>Type:</strong> {ticket.complaintType}</p>
                  <p><strong>Submitted By:</strong> {ticket.name}</p>
                  <p><strong>Submission Time:</strong> <FiClock /> {ticket.submissionTime.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;
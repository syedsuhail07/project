import React, { useState } from "react";
import "./complaints.css";

const Complaints = () => {
  const [complaintDetails, setComplaintDetails] = useState({
    name: "",
    email: "",
    complaintType: "Room Complaints", // Default selection
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("Pending");
  const [submissionTime, setSubmissionTime] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaintDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      complaintDetails.name &&
      complaintDetails.email &&
      complaintDetails.description
    ) {
      setSubmitted(true);
      setSubmissionTime(new Date());
      alert("Complaint ticket raised successfully!");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="container complaints mt-5">
      <h2 className="text-center mb-4">Raise a Complaint Ticket</h2>
      {!submitted ? (
        <div className="complaints-banner">
          <div className="hover-animation">
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
          </div>
          <form onSubmit={handleSubmit} className="complaints-form mt-4">
            <div className="form-group mb-3">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={complaintDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={complaintDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Type of Complaint:</label>
              <div className="d-flex gap-3">
                <button
                  type="button"
                  className={`btn ${
                    complaintDetails.complaintType === "Room Complaints"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() =>
                    setComplaintDetails((prev) => ({
                      ...prev,
                      complaintType: "Room Complaints",
                    }))
                  }
                >
                  Room Complaints
                </button>
                <button
                  type="button"
                  className={`btn ${
                    complaintDetails.complaintType === "Hostel Facilities"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() =>
                    setComplaintDetails((prev) => ({
                      ...prev,
                      complaintType: "Hostel Facilities",
                    }))
                  }
                >
                  Hostel Facilities
                </button>
                <button
                  type="button"
                  className={`btn ${
                    complaintDetails.complaintType === "Hostel Rights"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() =>
                    setComplaintDetails((prev) => ({
                      ...prev,
                      complaintType: "Hostel Rights",
                    }))
                  }
                >
                  Hostel Rights
                </button>
              </div>
            </div>
            <div className="form-group mb-3">
              <label>Complaint Description:</label>
              <textarea
                name="description"
                className="form-control"
                rows="4"
                value={complaintDetails.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Raise Ticket
            </button>
          </form>
        </div>
      ) : (
        <div className="complaint-receipt">
          <h3 className="text-center">Complaint Raised Successfully</h3>
          <p><strong>Name:</strong> {complaintDetails.name}</p>
          <p><strong>Email:</strong> {complaintDetails.email}</p>
          <p><strong>Complaint Type:</strong> {complaintDetails.complaintType}</p>
          <p><strong>Description:</strong> {complaintDetails.description}</p>
          <button
            className="btn btn-secondary w-100 mt-3"
            onClick={() => setSubmitted(false)}
          >
            Raise Another Complaint
          </button>
          <div className="complaint-status-box">
            <h5>Complaint Status</h5>
            <p><strong>Status:</strong> {status}</p>
            {submissionTime && (
              <p>
                <strong>Submission Time:</strong> {submissionTime.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;

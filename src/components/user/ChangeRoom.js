import React, { useState } from "react";
import "./changeRoom.css";

const ChangeRoom = () => {
  // Simulated logged-in user
  const loggedInUser = {
    id: 1,
    name: "Syed",
    email: "syed@mail.com",
    phone: "1234567890",
    currentRoom: "101",
    block: "Block A",
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
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();

      const requestDetails = {
        ...loggedInUser,
        ...changeRequest,
        date: formattedDate,
        time: formattedTime,
      };

      setRecentRequest(requestDetails);
      alert("Room Change Request Submitted Successfully!");

      setChangeRequest({ desiredRoom: "", reason: "" });
    } else {
      alert("Please fill out all fields before submitting the request.");
    }
  };

  return (
    <div className="container change-room mt-5">
      <h2 className="text-center mb-4">Room Change Management</h2>

      {/* Logged-in User Profile */}
      <div className="user-profile mb-4">
        <h4>Logged-in User Profile</h4>
        <p><strong>Name:</strong> {loggedInUser.name}</p>
        <p><strong>Email:</strong> {loggedInUser.email}</p>
        <p><strong>Phone:</strong> {loggedInUser.phone}</p>
        <p><strong>Current Room:</strong> {loggedInUser.currentRoom}</p>
        <p><strong>Block:</strong> {loggedInUser.block}</p>
      </div>

      {/* Change Room Form */}
      <div className="change-room-form">
        <h4>Request Room Change</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Current Room:</label>
            <input
              type="text"
              className="form-control"
              value={loggedInUser.currentRoom}
              readOnly
            />
          </div>
          <div className="form-group mb-3">
            <label>Desired Room:</label>
            <input
              type="text"
              name="desiredRoom"
              className="form-control"
              value={changeRequest.desiredRoom}
              onChange={handleInputChange}
              placeholder="Enter Desired Room"
            />
          </div>
          <div className="form-group mb-3">
            <label>Reason for Change:</label>
            <textarea
              name="reason"
              className="form-control"
              rows="4"
              value={changeRequest.reason}
              onChange={handleInputChange}
              placeholder="Enter Reason for Room Change"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit Request
          </button>
        </form>
      </div>

      {/* Recent Request */}
      {recentRequest && (
        <div className="recent-request mt-5">
          <h4 className="text-center">Recent Room Change Request</h4>
          <p><strong>Date:</strong> {recentRequest.date}</p>
          <p><strong>Time:</strong> {recentRequest.time}</p>
          <p><strong>Name:</strong> {recentRequest.name}</p>
          <p><strong>Email:</strong> {recentRequest.email}</p>
          <p><strong>Phone:</strong> {recentRequest.phone}</p>
          <p><strong>Current Room:</strong> {recentRequest.currentRoom}</p>
          <p><strong>Desired Room:</strong> {recentRequest.desiredRoom}</p>
          <p><strong>Block:</strong> {recentRequest.block}</p>
          <p><strong>Reason:</strong> {recentRequest.reason}</p>
        </div>
      )}
    </div>
  );
};

export default ChangeRoom;

import React, { useState } from "react";
import "./generateOutpass.css";
import { useNavigate } from 'react-router-dom';


const GenerateOutpass = () => {
  const navigate = useNavigate();

  const [outpassDetails, setOutpassDetails] = useState({
    name: "",
    guardianName: "",
    phoneNumber: "",
    guardianPhoneNumber: "",
    reason: "",
    year: "",
    roomNumber: "",
  });

  const [generated, setGenerated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOutpassDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGenerated(true);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container generate-outpass mt-5">
      <h2 className="text-center mb-4" onClick={() => navigate("/generate-outpass")}>Generate Outpass</h2>
      {!generated ? (
        <form onSubmit={handleSubmit} className="outpass-form">
          <div className="form-group mb-3">
            <label>Name of Student:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={outpassDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Year of Study:</label>
            <input
              type="text"
              name="year"
              className="form-control"
              value={outpassDetails.year}
              onChange={handleInputChange}
              placeholder="Enter your year of study"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Room Number:</label>
            <input
              type="text"
              name="roomNumber"
              className="form-control"
              value={outpassDetails.roomNumber}
              onChange={handleInputChange}
              placeholder="Enter your room number"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Parent/Guardian Name:</label>
            <input
              type="text"
              name="guardianName"
              className="form-control"
              value={outpassDetails.guardianName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              value={outpassDetails.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Parent/Guardian Phone Number:</label>
            <input
              type="tel"
              name="guardianPhoneNumber"
              className="form-control"
              value={outpassDetails.guardianPhoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Reason for Going Out:</label>
            <textarea
              name="reason"
              className="form-control"
              rows="4"
              value={outpassDetails.reason}
              onChange={handleInputChange}
              placeholder="Write your reason here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Generate Outpass
          </button>
        </form>
      ) : (
        <div className="outpass-receipt">
          <div className="receipt-header text-center mb-4">
            <h3>Hostel Outpass</h3>
            <p>Issued on {formattedDate} at {formattedTime}</p>
          </div>
          <div className="receipt-body">
            <p>I, <strong>{outpassDetails.name}</strong>, a student of <strong>{outpassDetails.year}</strong> year, residing in room <strong>{outpassDetails.roomNumber}</strong>, request permission to leave the hostel for the following reason:</p>
            <p><strong>Reason:</strong> {outpassDetails.reason}</p>
            <p>My contact details are as follows:</p>
            <ul>
              <li><strong>Phone:</strong> {outpassDetails.phoneNumber}</li>
              <li><strong>Parent/Guardian Name:</strong> {outpassDetails.guardianName}</li>
              <li><strong>Parent/Guardian Phone:</strong> {outpassDetails.guardianPhoneNumber}</li>
            </ul>
          </div>
          <div className="signatures mt-4">
            <div>
              <p>________________________</p>
              <p>Parent/Guardian Signature</p>
            </div>
            <div>
              <p>________________________</p>
              <p>Hostel In-Charge Signature</p>
            </div>
          </div>
          <div className="actions mt-4">
            <button className="btn btn-primary w-100" onClick={handlePrint}>
              Print Outpass
            </button>
            <button
              className="btn btn-secondary w-100 mt-3"
              onClick={() => setGenerated(false)}
            >
              Generate Another Outpass
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateOutpass;
import React, { useState, useRef } from "react";
import "./generateOutpass.css";
import SignatureCanvas from 'react-signature-canvas';

const GenerateOutpass = () => {
  const [outpassDetails, setOutpassDetails] = useState({
    name: "",
    year: "",
    roomNumber: "",
    reason: "",
    checkIn: "",
    checkOut: ""
  });

  const [generated, setGenerated] = useState(false);
  const sigCanvas = useRef({});
  const [signature, setSignature] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOutpassDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignature(sigCanvas.current.toDataURL());
    setGenerated(true);
  };

  const handleClear = () => {
    sigCanvas.current.clear();
    setSignature(null);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container generate-outpass mt-5">
      <h2 className="text-center mb-4">Generate Outpass</h2>
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
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Reason for Going Out:</label>
            <textarea
              name="reason"
              className="form-control"
              rows="3"
              value={outpassDetails.reason}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label>Check-Out Date:</label>
            <input
              type="date"
              name="checkOut"
              className="form-control"
              value={outpassDetails.checkOut}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Check-In Date:</label>
            <input
              type="date"
              name="checkIn"
              className="form-control"
              value={outpassDetails.checkIn}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Student Digital Signature:</label>
            <SignatureCanvas ref={sigCanvas} penColor="black" canvasProps={{width: 300, height: 100, className: "signature-canvas"}} />
            <button type="button" className="btn btn-secondary mt-2" onClick={handleClear}>Clear Signature</button>
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
            <p>I, <strong>{outpassDetails.name}</strong>, a student of <strong>{outpassDetails.year}</strong> year, residing in room <strong>{outpassDetails.roomNumber}</strong>, formally request permission to leave the hostel premises for a specific period.</p>
            <p>The purpose of my request is as follows:</p>
            <p><strong>Reason:</strong> {outpassDetails.reason}</p>
            <p>I intend to leave the hostel on <strong>{outpassDetails.checkOut}</strong> and will return on <strong>{outpassDetails.checkIn}</strong>. I assure compliance with all hostel regulations and will report back as scheduled.</p>
          </div>
          <div className="signatures mt-4">
            <div>
              {signature && <img src={signature} alt="Student Signature" className="signature-preview" />}
              <p>Student Signature</p>
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

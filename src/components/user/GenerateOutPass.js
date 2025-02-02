import React, { useState, useRef } from "react";
import "./GenerateOutpass.css";
import SignatureCanvas from 'react-signature-canvas';
import { motion, AnimatePresence } from "framer-motion";

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
  const sigCanvas = useRef(null);
  const [signature, setSignature] = useState(null);
  const [outpassId] = useState(`OUTPASS-${Date.now().toString().slice(-6)}`);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOutpassDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sigCanvas.current.isEmpty()) {
      alert("Please provide your digital signature");
      return;
    }
    setSignature(sigCanvas.current.toDataURL());
    setGenerated(true);
  };

  const handleClear = () => {
    sigCanvas.current.clear();
    setSignature(null);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB');
  const formattedTime = currentDate.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="outpass-container">
      <motion.div 
        className="outpass-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Hostel Outpass System</h1>
        <p>Official Permission Portal</p>
      </motion.div>

      <AnimatePresence mode='wait'>
        {!generated ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            onSubmit={handleSubmit}
            className="outpass-form"
          >
            <div className="form-section">
              <h2>Student Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={outpassDetails.name}
                    onChange={handleInputChange}
                    required
                    className="modern-input"
                  />
                </div>
                <div className="form-group">
                  <label>Year of Study</label>
                  <select
                    name="year"
                    value={outpassDetails.year}
                    onChange={handleInputChange}
                    required
                    className="modern-select"
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Room Number</label>
                  <input
                    type="text"
                    name="roomNumber"
                    value={outpassDetails.roomNumber}
                    onChange={handleInputChange}
                    required
                    className="modern-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Outpass Details</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Departure Date</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={outpassDetails.checkOut}
                    onChange={handleInputChange}
                    required
                    className="modern-input"
                  />
                </div>
                <div className="form-group">
                  <label>Return Date</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={outpassDetails.checkIn}
                    onChange={handleInputChange}
                    required
                    className="modern-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Reason for Leave</label>
                <textarea
                  name="reason"
                  value={outpassDetails.reason}
                  onChange={handleInputChange}
                  required
                  className="modern-textarea"
                  placeholder="Provide detailed reason for leave..."
                />
                <span className="char-counter">{outpassDetails.reason.length}/200</span>
              </div>
            </div>

            <div className="form-section">
              <h2>Digital Signature</h2>
              <div className="signature-container">
                <SignatureCanvas 
                  ref={sigCanvas} 
                  penColor="#2c3e50" 
                  canvasProps={{
                    width: 400,
                    height: 150,
                    className: "signature-canvas"
                  }} 
                />
                <div className="signature-actions">
                  <button 
                    type="button" 
                    onClick={handleClear}
                    className="clear-signature-btn"
                  >
                    Clear Signature
                  </button>
                  <span className="signature-notice">Sign within the canvas area</span>
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="submit-btn"
            >
              Generate Outpass
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="receipt"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="outpass-receipt"
          >
            <div className="receipt-watermark"></div>
            <div className="receipt-header">
              <div className="university-branding">
                <img src="/university-logo.png" alt="University Logo" />
                <div>
                  <h2>Hostel Outpass</h2>
                  <p>Official Permission Document</p>
                </div>
              </div>
              <div className="receipt-meta">
                <p>Outpass ID: <strong>{outpassId}</strong></p>
                <p>Issued: {formattedDate} | {formattedTime}</p>
              </div>
            </div>

            <div className="receipt-body">
              <div className="student-info">
                <p><span>Student Name:</span> {outpassDetails.name}</p>
                <p><span>Year:</span> {outpassDetails.year}</p>
                <p><span>Room No:</span> {outpassDetails.roomNumber}</p>
              </div>

              <div className="leave-details">
                <h3>Leave Authorization</h3>
                <p>
                  This document certifies that <strong>{outpassDetails.name}</strong> is 
                  permitted to leave the hostel premises from <strong>{outpassDetails.checkOut}</strong> 
                  to <strong>{outpassDetails.checkIn}</strong>. The stated purpose of leave 
                  is: "{outpassDetails.reason}".
                </p>
              </div>

              <div className="signatures">
                <div className="signature-box">
                  {signature && <img src={signature} alt="Student Signature" />}
                  <p>Student Signature</p>
                </div>
                <div className="signature-box">
                  <div className="approval-stamp">APPROVED</div>
                  <p>Hostel In-Charge</p>
                </div>
              </div>

              <div className="security-notes">
                <h4>Important Instructions:</h4>
                <ul>
                  <li>This document must be presented at security checkpoints</li>
                  <li>Late return may result in disciplinary action</li>
                  <li>Valid only with official hostel stamp and signature</li>
                </ul>
              </div>
            </div>

            <div className="receipt-footer">
              <button onClick={handlePrint} className="print-btn">
                Print Outpass
              </button>
              <button 
                onClick={() => setGenerated(false)}
                className="new-outpass-btn"
              >
                Create New Outpass
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GenerateOutpass;
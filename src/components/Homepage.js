import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const [dropdown, setDropdown] = useState(false);
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [nationality, setNationality] = useState('');
  const [dob, setDob] = useState('');
  const [photo, setPhoto] = useState(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to an API or update state
    console.log({ name, usn, nationality, dob, photo });
    alert('Profile submitted successfully');
  };

  return (
    <div className="homepage-container">
      {/* Horizontal Navigation Bar */}
      <div className="topbar">
        <div className="logo">
          <h3>Hostel System</h3>
        </div>
        <ul className="nav-links">
          <li className="item"><Link to="#">Complaint registration</Link></li>
          <li className="item"><Link to="#">Change Room Request</Link></li>
          <li className="item"><Link to="#">Room Booking</Link></li>
          <li className="item"><Link to="#">Outpass Registration</Link></li>
          <li className="item"><Link to="#">Hostel Vacate Management</Link></li>
        </ul>
        <div className="profile" onClick={toggleDropdown}>
          <div className="profile-icon">
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" />
          </div>
          <p>User</p>
          {dropdown && (
            <ul className="dropdown-menu dropdown-menu-show">
              <li><Link to="/login">Logout</Link></li>
            </ul>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Student Profile Setup Form */}
        <div className="student-profile">
          <h2>Student Profile Setup</h2>
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>USN (ID Number):</label>
              <input
                type="text"
                value={usn}
                onChange={(e) => setUsn(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Nationality:</label>
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Upload Photo:</label>
              <input
                type="file"
                onChange={handlePhotoChange}
                accept="image/*"
                required
              />
            </div>
            <button type="submit">Submit Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

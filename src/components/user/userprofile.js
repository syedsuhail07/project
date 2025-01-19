import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './userprofile.css'; // Reusing the same CSS file for consistent styles

function Userprofile() {
  const [dropdown, setDropdown] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file); // Convert file to base64 string for preview
    }
  };

  return (
    <div className="homepage-container">
      {/* Top Navigation Bar */}
      <div className="topbar">
              <div className="logo">
                <h3>Hostel System</h3>
              </div>
              <ul className="nav-links">
              <li className="item"><Link to="/user-dashboard">Dashboard</Link></li>
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
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Logout</Link></li>
      
                  </ul>
                )}
              </div>
            </div>

      {/* Main Content */}
      <div className="main-content profile-content">
        <h2>User Profile</h2>
        <div className="profile-section">
          <div className="profile-image-container">
            <img
              src={profileImage || 'https://via.placeholder.com/150'}
              alt="User"
              className="profile-image"
            />
            <label className="file-input-label">
              Change Profile Picture
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
              />
            </label>
          </div>
          <div className="user-details">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Phone:</strong> +1234567890</p>
            <p><strong>Room Number:</strong> A-102</p>
            <p><strong>Address:</strong> 123 Main St, Hostel City</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;

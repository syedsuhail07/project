import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserProfileDropdown = () => {
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated"); // Clear authentication
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="profile-container" style={{ position: "relative", display: "inline-block" }}>
            {/* Profile Icon Clickable */}
            <div className="profile" onClick={toggleDropdown} style={{ cursor: "pointer", textAlign: "center", padding: "10px" }}>
                <div className="profile-icon">
                    <img 
                        src="https://www.w3schools.com/w3images/avatar2.png" 
                        alt="Profile"
                        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                    />
                </div>
                <p style={{ margin: "5px 0", fontWeight: "bold" }}>User</p>

                {/* Dropdown Menu */}
                {dropdown && (
                    <ul className="dropdown-menu dropdown-menu-show" style={{
                        display: "block",
                        position: "absolute",
                        right: 0,
                        top: "70px",
                        background: "white",
                        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                        minWidth: "150px",
                        textAlign: "left",
                        listStyle: "none",
                        padding: "10px 0"
                    }}>
                        <li style={{ padding: "10px" }}>
                            <Link to="/profile" style={{ textDecoration: "none", color: "#333" }}>Profile</Link>
                        </li>
                        <li style={{ padding: "10px" }}>
                            <button 
                                onClick={handleLogout} 
                                style={{ border: "none", background: "none", cursor: "pointer", color: "red", width: "100%", textAlign: "left" }}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default UserProfileDropdown;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./outpass.css";

function Outpass() {
  const [data, setData] = useState([
    { name: "Thomas", roomNumber: 300, date: "4/05/2024", idNumber: 45454542 },
    { name: "Thomas", roomNumber: 300, date: "4/05/2024", idNumber: 55454542 },
    { name: "Thomas", roomNumber: 300, date: "4/05/2024", idNumber: 65454542 },
    { name: "Thomas", roomNumber: 350, date: "4/05/2024", idNumber: 75454542 },
    { name: "Thomas", roomNumber: 300, date: "4/05/2024", idNumber: 85454542 },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [search, setSearch] = useState("");

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setSortConfig({ key, direction });
    setData(sortedData);
  };

  const getArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "↓" : "↑";
    }
    return "";
  };

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const filteredData = data.filter((item) =>
    [item.name,item.roomNumber, item.date, item.idNumber.toString()]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="adminhome-container">
      {/* Horizontal Navigation Bar */}
      <div className="topbar">
        <div className="logo">
          <h3>Admin Panel</h3>
        </div>
        <ul className="nav-links">
          <li className="item">
            <Link to="/admin">Dashboard</Link>
          </li>
          <li className="item">
            <Link to="#">Manage Complaints</Link>
          </li>
          <li className="item">
            <Link to="/outpass">Approve Outpasses</Link>
          </li>
          <li className="item">
            <Link to="#">Room Allocation</Link>
          </li>
        </ul>
        <div className="profile">
          <button onClick={toggleDropdown} className="admin-button">
            Admin
          </button>
          <div className="profile-icon">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Profile"
            />
          </div>
          {dropdown && (
            <ul className="dropdown-menu dropdown-menu-show">
              <li>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <h2>Outpass Issued:</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by Name,Room no, Date, or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("name")}>
                  Name {getArrow("name")}
                </th>
                <th onClick={() => handleSort("roomNumber")}>
                  Room Number {getArrow("roomNumber")}
                </th>
                <th onClick={() => handleSort("date")}>
                  Date {getArrow("date")}
                </th>
                <th onClick={() => handleSort("idNumber")}>
                  Id Number {getArrow("idNumber")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.roomNumber}</td>
                  <td>{row.date}</td>
                  <td>{row.idNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Outpass;

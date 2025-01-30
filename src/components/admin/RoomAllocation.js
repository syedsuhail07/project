// RoomAllocation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RoomAllocation.css'; // Create this CSS file

const RoomAllocation = () => {
  // Sample room allocation data
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      roomNumber: '301',
      checkInDate: '2024-05-01',
      duration: '7 days',
      status: 'Confirmed'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      roomNumber: '205',
      checkInDate: '2024-05-03',
      duration: '5 days',
      status: 'Pending'
    },
    // Add more sample data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Sorting functionality
  const sortedBookings = [...bookings].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  // Search functionality
  const filteredBookings = sortedBookings.filter(booking =>
    Object.values(booking).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="room-allocation-container">
      {/* Navigation Bar (Same as AdminHome) */}
      <nav className="admin-navbar">
        <div className="nav-left">
          <div className="logo">
          <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>Admin Panel</h2>
      </Link>
          </div>
          <div className="nav-links">
            <Link to="/room-allocation" className="nav-link active">
              Room Allocation
            </Link>
            <Link to="/outpass-data" className="nav-link">
              Outpass Data
            </Link>
            <Link to="/complaints" className="nav-link">
              Complaints
            </Link>
          </div>
        </div>
        
        {/* <div className="nav-right">
          <button className="logout-btn">
            Logout
          </button>
        </div> */}
      </nav>
      

      {/* Main Content */}
      <div className="room-allocation-content">
        <h1>Room Allocation Management</h1>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bookings-table-container">
          <table className="bookings-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('email')}>
                  Email {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('roomNumber')}>
                  Room {sortConfig.key === 'roomNumber' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                {/* <th onClick={() => handleSort('checkInDate')}>
                  Check-in {sortConfig.key === 'checkInDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('duration')}>
                  Duration {sortConfig.key === 'duration' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th> */}
                <th onClick={() => handleSort('status')}>
                  Status {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map(booking => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.roomNumber}</td>
                  {/* <td>{booking.checkInDate}</td>
                  <td>{booking.duration}</td> */}
                  <td>
                    <span className={`status-badge ${booking.status.toLowerCase()}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomAllocation;
// OutpassData.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OutpassData.css'; // Create this CSS file

const OutpassData = () => {
  // Sample outpass data (status removed)
  const [outpasses, setOutpasses] = useState([
    {
      id: 1,
      name: 'John Doe',
      roomNo: '301',
      fromDate: '2024-05-01',
      toDate: '2024-05-03',
      reason: 'Family Function',
      issuedOn: '2024-04-28'
    },
    {
      id: 2,
      name: 'Jane Smith',
      roomNo: '205',
      fromDate: '2024-05-05',
      toDate: '2024-05-07',
      reason: 'Medical Checkup',
      issuedOn: '2024-05-02'
    },
    // Add more sample data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Sorting functionality
  const sortedOutpasses = [...outpasses].sort((a, b) => {
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
  const filteredOutpasses = sortedOutpasses.filter(outpass =>
    Object.values(outpass).some(value =>
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
    <div className="outpass-data-container">
      {/* Navigation Bar */}
      <nav className="admin-navbar">
        <div className="nav-left">
          <div className="logo">
            <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2>Admin Panel</h2>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/room-allocation" className="nav-link">
              Room Allocation
            </Link>
            <Link to="/outpass-data" className="nav-link active">
              Outpass Data
            </Link>
            <Link to="/complaints" className="nav-link">
              Complaints
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="outpass-data-content">
        <h1>Outpass Management</h1>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search outpasses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="outpass-table-container">
          <table className="outpass-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('roomNo')}>
                  Room {sortConfig.key === 'roomNo' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('fromDate')}>
                  From Date {sortConfig.key === 'fromDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('toDate')}>
                  To Date {sortConfig.key === 'toDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('reason')}>
                  Reason {sortConfig.key === 'reason' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('issuedOn')}>
                  Issued On {sortConfig.key === 'issuedOn' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOutpasses.map(outpass => (
                <tr key={outpass.id}>
                  <td>{outpass.name}</td>
                  <td>{outpass.roomNo}</td>
                  <td>{outpass.fromDate}</td>
                  <td>{outpass.toDate}</td>
                  <td>{outpass.reason}</td>
                  <td>{outpass.issuedOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OutpassData;
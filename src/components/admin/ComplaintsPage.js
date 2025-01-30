import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComplaintsPage.css'; // Ensure this CSS file exists

const ComplaintsPage = () => {
  // Sample complaints data
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: 'John Doe',
      roomNo: '301',
      complaintDate: '2024-05-01',
      category: 'Maintenance',
      description: 'Leaking faucet in bathroom',
      status: 'Pending',
      resolution: ''
    },
    {
      id: 2,
      name: 'Jane Smith',
      roomNo: '205',
      complaintDate: '2024-05-03',
      category: 'Electrical',
      description: 'Flickering lights in room',
      status: 'In Progress',
      resolution: 'Technician assigned'
    },
    // Add more sample data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Sorting functionality
  const sortedComplaints = [...complaints].sort((a, b) => {
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
  const filteredComplaints = sortedComplaints.filter(complaint =>
    Object.values(complaint).some(value =>
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
    <div className="complaints-container">
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
            <Link to="/outpass-data" className="nav-link">
              Outpass Data
            </Link>
            <Link to="/complaints-page" className="nav-link active">
            Complaints
            </Link>

          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="complaints-content">
        <h1>Complaints Management</h1>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search complaints..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="complaints-table-container">
          <table className="complaints-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('roomNo')}>
                  Room {sortConfig.key === 'roomNo' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('complaintDate')}>
                  Date {sortConfig.key === 'complaintDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('category')}>
                  Category {sortConfig.key === 'category' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th>Description</th>
                <th onClick={() => handleSort('status')}>
                  Status {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th>Resolution</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map(complaint => (
                <tr key={complaint.id}>
                  <td>{complaint.name}</td>
                  <td>{complaint.roomNo}</td>
                  <td>{complaint.complaintDate}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.description}</td>
                  <td>
                    <span className={`status-badge ${complaint.status.toLowerCase().replace(' ', '-')}`}>
                      {complaint.status}
                    </span>
                  </td>
                  <td>{complaint.resolution || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
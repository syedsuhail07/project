import React, { useState, useEffect, useContext } from "react";
import "./BookRoom.css"; // Scoped CSS
import { UserContext } from "../context/UserContext";
import {
  FiUser,
  FiPrinter,
  FiHome,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaBed } from "react-icons/fa";

const BookRoom = () => {
  const userContext = useContext(UserContext);
  const userProfile = userContext ? userContext.userProfile : {};

  const [rooms, setRooms] = useState({});
  const [activeFloor, setActiveFloor] = useState(1);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Generate initial rooms data
  useEffect(() => {
    const initialRooms = {};
    for (let floor = 1; floor <= 5; floor++) {
      initialRooms[floor] = Array.from({ length: 10 }, (_, i) => ({
        id: `${floor}-${i + 1}`,
        number: i + 1,
        capacity: 2,
        // Random 0,1,2 to represent available beds
        available: Math.floor(Math.random() * 3),
      }));
    }
    setRooms(initialRooms);
  }, []);

  // Handle "Book Now" button click
  const handleBookingRequest = (floor, room) => {
    // If no beds are available, do nothing
    if (room.available === 0) return;

    // Decrement the available count by 1
    const updatedRooms = { ...rooms };
    const roomIndex = updatedRooms[floor].findIndex((r) => r.id === room.id);
    updatedRooms[floor][roomIndex].available -= 1;
    setRooms(updatedRooms);

    // Create a booking details object
    const bookingDetails = {
      floor,
      roomNumber: room.number,
      name: userProfile.name || "Guest",
      studentId: userProfile.studentId || "N/A",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      bookingId: `BID-${Math.floor(1000 + Math.random() * 9000)}`,
      status: "Confirmed",
    };

    setSelectedBooking(bookingDetails);
    setBookingHistory([...bookingHistory, bookingDetails]);
  };

  // Print the content of the receipt
  const handlePrintReceipt = () => {
    const printContent = document.getElementById("print-receipt");
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
  };

  // Filter rooms by search input (based on room number)
  const filteredRooms = rooms[activeFloor]?.filter((room) =>
    room.number.toString().includes(searchQuery)
  );

  return (
    <div className="bookroom-container">
      {/* Sidebar Section */}
      <div className="bookroom-sidebar">
        {/* Sidebar Header */}
        <div className="bookroom-sidebar-header">
          <FiHome className="bookroom-icon" />
          <h2>Hostel Hub</h2>
        </div>

        {/* Student Profile Info */}
        <div className="bookroom-student-profile">
          <div className="bookroom-profile-header">
            <FiUser className="bookroom-profile-icon" />
            <div>
              <h3>{userProfile.name || "Guest User"}</h3>
              <p>Student ID: {userProfile.studentId || "N/A"}</p>
              {userProfile.currentRoom && (
                <p>Current Room: {userProfile.currentRoom}</p>
              )}
            </div>
          </div>
        </div>

        {/* Floor Navigation */}
        <div className="bookroom-floor-navigation">
          <h3 className="bookroom-section-title">Floors</h3>
          <div className="bookroom-floor-buttons">
            {[1, 2, 3, 4, 5].map((floor) => (
              <motion.button
                key={floor}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bookroom-floor-btn ${
                  activeFloor === floor ? "active" : ""
                }`}
                onClick={() => setActiveFloor(floor)}
              >
                Floor {floor}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Booking History */}
        <div className="bookroom-booking-history">
          <h3 className="bookroom-section-title">Recent Bookings</h3>
          <div className="bookroom-history-list">
            {bookingHistory.slice(-3).map((booking) => (
              <div key={booking.bookingId} className="bookroom-history-item">
                <FiClock className="bookroom-history-icon" />
                <div>
                  <p>Room {booking.roomNumber}</p>
                  <small>{booking.date}</small>
                </div>
                <span
                  className={`bookroom-status ${booking.status.toLowerCase()}`}
                >
                  {booking.status}
                </span>
              </div>
            ))}
            {bookingHistory.length === 0 && (
              <p className="bookroom-no-history">No previous bookings</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bookroom-main-content">
        {/* Optional Search Bar */}
        {/*
        <div className="bookroom-search-bar">
          <FiSearch className="bookroom-search-icon" />
          <input
            type="text"
            placeholder="Search room number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        */}

        <div className="bookroom-room-grid-container">
          <div className="bookroom-floor-header">
            <h2>Floor {activeFloor} Rooms</h2>
            <div className="bookroom-availability-filter">
              <span>Availability:</span>
              <div className="bookroom-filter-option available">Available</div>
              <div className="bookroom-filter-option limited">Limited</div>
              <div className="bookroom-filter-option full">Full</div>
            </div>
          </div>

          <div className="bookroom-room-grid">
            {filteredRooms?.map((room) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bookroom-room-card"
              >
                <div className="bookroom-room-header">
                  <span>#{room.number}</span>
                  <div
                    className={`bookroom-status-indicator ${
                      room.available > 1
                        ? "available"
                        : room.available === 1
                        ? "limited"
                        : "full"
                    }`}
                  >
                    {room.available}{" "}
                    {room.available === 1 ? "bed" : "beds"} left
                  </div>
                </div>

                {/* Visual display of beds */}
                <div className="bookroom-capacity-visual">
                  {[...Array(room.capacity)].map((_, i) => (
                    <FaBed
                      key={i}
                      className={`bookroom-bed-icon ${
                        i < room.capacity - room.available ? "occupied" : ""
                      }`}
                    />
                  ))}
                </div>

                {/* Simple progress bar */}
                <div className="bookroom-progress-bar">
                  <div
                    className="bookroom-progress-fill"
                    style={{
                      width: `${(room.available / room.capacity) * 100}%`,
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bookroom-book-btn ${
                    room.available === 0 ? "disabled" : ""
                  }`}
                  onClick={() => handleBookingRequest(activeFloor, room)}
                  disabled={room.available === 0}
                >
                  {room.available > 0 ? "Book Now" : "Unavailable"}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Confirmation Modal with Overlay */}
        <AnimatePresence>
          {selectedBooking && (
            <motion.div
              className="bookroom-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bookroom-confirmation-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div id="print-receipt" className="bookroom-receipt-content">
                  <FiCheckCircle className="bookroom-success-icon" />
                  <h3>Booking Confirmed!</h3>
                  <div className="bookroom-receipt-details">
                    <div className="bookroom-detail-item">
                      <span>Student Name:</span>
                      <p>{selectedBooking.name}</p>
                    </div>
                    <div className="bookroom-detail-item">
                      <span>Student ID:</span>
                      {selectedBooking.studentId}
                    </div>
                    <div className="bookroom-detail-item">
                      <span>Room Details:</span>
                      Floor {selectedBooking.floor} - Room{" "}
                      {selectedBooking.roomNumber}
                    </div>
                    <div className="bookroom-detail-item">
                      <span>Booking ID:</span>{selectedBooking.bookingId}
                    </div>
                    <div className="bookroom-detail-item">
                      <span>Date & Time:</span>
                        {selectedBooking.date} - {selectedBooking.time}
                    </div>
                  </div>
                  <button className="bookroom-print-btn" onClick={handlePrintReceipt}>
                    <FiPrinter className="bookroom-icon" />
                    Print Receipt
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookRoom;

import { useState, useEffect } from "react";
import { FiCheckCircle, FiClock, FiAlertCircle, FiPrinter, FiCalendar, FiInfo } from "react-icons/fi";
import "./VacateRoom.css";

const VacateRoom = () => {
    const [when, setWhen] = useState("");
    const [reason, setReason] = useState("");
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        // Load tickets from local storage on mount
        const savedTickets = JSON.parse(localStorage.getItem("vacateTickets")) || [];
        setTickets(savedTickets);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const ticketData = {
            id: `VAC-${Date.now().toString().slice(-6)}`,
            when,
            reason,
            status: "Under Review",
            submitted: new Date().toISOString(),
        };

        const updatedTickets = [...tickets, ticketData];
        localStorage.setItem("vacateTickets", JSON.stringify(updatedTickets));
        
        setTickets(updatedTickets);
        setLoading(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        
        // Reset form
        setWhen("");
        setReason("");
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Approved': return '#28a745';
            case 'Rejected': return '#dc3545';
            default: return '#ffc107';
        }
    };

    return (
        <div className="vacate-container">
            <div className="vacate-header">
                <FiCalendar className="header-icon" />
                <h1>Room Vacating Request</h1>
                <p>Submit your room vacating request for hostel management review</p>
            </div>

            <form onSubmit={handleSubmit} className="vacate-form">
                <div className="form-section">
                    <label>
                        <FiCalendar /> Vacating Date
                        <input
                            type="date"
                            value={when}
                            onChange={(e) => setWhen(e.target.value)}
                            required
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </label>
                </div>

                <div className="form-section">
                    <label>
                        <FiInfo /> Reason for Vacating
                        <textarea
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                            placeholder="Please provide detailed reason..."
                        />
                    </label>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Request'}
                    {loading && <div className="spinner"></div>}
                </button>

                {showSuccess && (
                    <div className="success-message">
                        <FiCheckCircle />
                        Request submitted successfully!
                    </div>
                )}
            </form>

            {tickets.length > 0 && (
                <div className="tickets-section">
                    <h2><FiClock /> Previous Requests</h2>
                    <div className="tickets-list">
                        {[...tickets].reverse().map(ticket => (
                            <div key={ticket.id} className="ticket-card">
                                <div className="ticket-header">
                                    <span>ID: {ticket.id}</span>
                                    <span className="status-badge" 
                                          style={{ backgroundColor: getStatusColor(ticket.status) }}>
                                        {ticket.status}
                                    </span>
                                </div>
                                <div className="ticket-details">
                                    <p><strong>Vacating Date:</strong> {new Date(ticket.when).toDateString()}</p>
                                    <p><strong>Submitted:</strong> {new Date(ticket.submitted).toLocaleString()}</p>
                                    <p><strong>Reason:</strong> {ticket.reason}</p>
                                </div>
                                {/* <div className="ticket-actions">
                                    <button className="print-btn">
                                        <FiPrinter /> Print
                                    </button>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default VacateRoom;
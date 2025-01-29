import { useState } from "react";

const VacateRoom = () => {
    const [when, setWhen] = useState("");
    const [reason, setReason] = useState("");
    const [ticket, setTicket] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const ticketData = {
            id: Date.now(),
            when,
            reason,
            status: "Pending",
        };

        setTicket(ticketData);

        // Store ticket in local storage (mock backend)
        const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
        tickets.push(ticketData);
        localStorage.setItem("tickets", JSON.stringify(tickets));
    };

    const styles = {
        container: {
            maxWidth: "500px",
            margin: "50px auto",
            padding: "20px",
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
        },
        heading: {
            fontSize: "24px",
            color: "#333",
            marginBottom: "15px",
        },
        formGroup: {
            display: "flex",
            flexDirection: "column",
            marginBottom: "15px",
            textAlign: "left",
        },
        label: {
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "5px",
            color: "#555",
        },
        input: {
            padding: "10px",
            border: "2px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
            transition: "0.3s ease-in-out",
        },
        inputFocus: {
            borderColor: "#007bff",
            outline: "none",
        },
        button: {
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
        },
        buttonHover: {
            backgroundColor: "#0056b3",
        },
        ticketReceipt: {
            marginTop: "20px",
            padding: "15px",
            background: "#f8f9fa",
            borderRadius: "8px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
        },
        ticketText: {
            fontSize: "14px",
            color: "#555",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Vacate Room Request</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>When do you want to vacate?</label>
                    <input
                        type="date"
                        value={when}
                        onChange={(e) => setWhen(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Reason for vacating:</label>
                    <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>

                <button type="submit" style={styles.button}>
                    Submit Request
                </button>
            </form>

            {ticket && (
                <div style={styles.ticketReceipt}>
                    <h3 style={{ color: "#28a745" }}>Ticket Receipt</h3>
                    <p style={styles.ticketText}><strong>Ticket ID:</strong> {ticket.id}</p>
                    <p style={styles.ticketText}><strong>Vacate Date:</strong> {ticket.when}</p>
                    <p style={styles.ticketText}><strong>Reason:</strong> {ticket.reason}</p>
                    <p style={styles.ticketText}><strong>Status:</strong> {ticket.status}</p>
                </div>
            )}
        </div>
    );
};

export default VacateRoom;

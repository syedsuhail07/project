import { useEffect, useState } from "react";

const AdminTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        // Fetch tickets from local storage (mock backend)
        const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
        setTickets(storedTickets);
    }, []);

    return (
        <div>
            <h2>Vacate Room Requests (Admin)</h2>
            {tickets.length === 0 ? (
                <p>No requests yet.</p>
            ) : (
                tickets.map((ticket) => (
                    <div key={ticket.id}>
                        <h4>Ticket ID: {ticket.id}</h4>
                        <p><strong>Vacate Date:</strong> {ticket.when}</p>
                        <p><strong>Reason:</strong> {ticket.reason}</p>
                        <p><strong>Status:</strong> {ticket.status}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
};

export default AdminTickets;

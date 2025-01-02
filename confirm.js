document.addEventListener("DOMContentLoaded", function() {
    generateNewTicket();
});

function generateNewTicket() {
    const ticketNumber = `TKT${Math.floor(Math.random() * 900000) + 100000}`; // Generates a random 6-digit number prefixed with 'TKT'
    document.getElementById("ticketNumber").innerText = ticketNumber;
}

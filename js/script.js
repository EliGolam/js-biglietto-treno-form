// Handshake verification
console.log('script.js LOADED');

const tickets = document.getElementById('ticket-info');

// Initialize user input form
const form = document.forms['ticket-form'];

form.addEventListener('submit',function(e) {
    // Prevent page from refreshing
    e.preventDefault();

    // Initialize user input values
    const username = document.getElementById('username').value;
    const travelDistance = document.getElementById('travel-distance').value;
    const ageRange = document.getElementById('age-range').value;
    const travelDate = document.getElementById('travel-date').value;
    console.log(
        `
        FORM DEBUG
        Username: ${username}
        Travel Distance: ${travelDistance}
        Age Range: ${ageRange}
        Travel Date: ${travelDate}
        `
    )

    // Create Elements
    const p = document.createElement("p");
    const div = document.createElement('div');

    // Add content
    p.textContent = `
        Username: ${username}
        Travel Distance: ${travelDistance}
        Age Range: ${ageRange}
        Travel Date: ${travelDate}
    `;

    // Append to document
    div.appendChild(p);
    tickets.appendChild(div);
})
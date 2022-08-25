// Handshake verification
console.log('script.js LOADED');

const tickets = document.getElementById('ticket-info');
const current_lang = 'it-IT'

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

    // Initialize ticket details
    const ticketUsername = document.querySelector('.ticket-username');
    const ticketType = document.querySelector('.ticket-type');
    const ticketSeat = document.querySelector('.ticket-seat');
    const ticketCode = document.querySelector('.ticket-code');
    const ticketCost = document.querySelector('.ticket-cost');

    ticketUsername.innerHTML = username;
    
    switch (ageRange) {
        case 'Adult': {
            ticketType.innerHTML = 'Standard';
            break;
        }

        case 'Minor': {
            ticketType.innerHTML = 'Concession Minor';
            break
        }

        case 'Elderly': {
            ticketType.innerHTML = 'Concession Senior (65+)';
            break
        }
    }

    ticketSeat.innerHTML = Math.ceil(Math.random()*20) + '-' + Math.ceil(Math.random()*40);
    ticketCode.innerHTML = Math.floor(Math.random()*100000).toString().padStart(5, '0');

    let totalCost = travelDistance * 0.21;
    if (ageRange === 'Minor') {
        totalCost *= 0.8;
    }
    else if (ageRange === 'Elderly') {
        totalCost *= 0.6;
    }

    ticketCost.innerHTML = Intl.NumberFormat(current_lang, { style: 'currency', currency: 'EUR' }).format(totalCost);

    // Show Ticket
    const ticket = document.querySelector('.ticket-card');
    ticket.classList.add('active');
})
// Function to open the envelope and show the letter
function openEnvelope() {
    let envelope = document.querySelector(".envelope");
    let letter = document.querySelector(".letter");

    // Add 'open' class to envelope to start the opening animation
    envelope.classList.add("open");
    
    // Wait for the envelope to open, then display the letter
    setTimeout(() => {
        letter.classList.add("show");
    }, 1000);
}

// Function when the "Yes" button is clicked
function sayYes() {
    alert("Yay! 💕 Can't wait for our date! 🥰");
}

// Function to move the "No" button when it's clicked
function moveNoButton() {
    let noButton = document.querySelector(".no-button");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function openEnvelope() {
    document.querySelector(".envelope").classList.add("open");
    setTimeout(() => {
        document.querySelector(".letter").classList.add("show");
    }, 1000);
}

function sayYes() {
    alert("Yay! 💕 Can't wait for our date! 🥰");
}

function moveNoButton() {
    let noButton = document.querySelector(".no-button");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

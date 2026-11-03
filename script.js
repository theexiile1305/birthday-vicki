
/* ======================================
   Vicki'S BIRTHDAY SURPRISE
   With love from Michael ❤️
====================================== */

// GET HTML ELEMENTS

const balloonContainer = document.getElementById("balloons");
const surpriseButton = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const confettiContainer = document.getElementById("confetti-container");

// BALLOON EMOJIS

const balloonEmojis = [
    "🎈",
    "💗",
    "🎈",
    "💜",
    "🎈",
    "🌸",
    "🎈"
];

// CREATE FLOATING BALLOONS

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");

    balloon.textContent =
        balloonEmojis[
            Math.floor(Math.random() * balloonEmojis.length)
        ];

    balloon.style.left = Math.random() * 95 + "%";

    balloon.style.animationDuration =
        (6 + Math.random() * 7) + "s";

    balloon.style.fontSize =
        (25 + Math.random() * 30) + "px";

    balloonContainer.appendChild(balloon);

    // Remove balloon after animation

    setTimeout(() => {
        balloon.remove();
    }, 14000);
}

// START BALLOON ANIMATION

for (let i = 0; i < 12; i++) {
    setTimeout(createBalloon, i * 400);
}

setInterval(createBalloon, 900);


// CONFETTI EMOJIS

const confettiEmojis = [
    "🎉",
    "✨",
    "💖",
    "🎊",
    "🌸",
    "💕",
    "⭐"
];

// CREATE CONFETTI

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent =
            confettiEmojis[
                Math.floor(Math.random() * confettiEmojis.length)
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.fontSize =
            (12 + Math.random() * 20) + "px";

        confettiContainer.appendChild(confetti);

        // Clean up after animation

        setTimeout(() => {
            confetti.remove();
        }, 6500);
    }
}


// OPEN BIRTHDAY SURPRISE

let surpriseOpened = false;

surpriseButton.addEventListener("click", function () {

    if (surpriseOpened) {
        return;
    }

    surpriseOpened = true;

    // Reveal the birthday message

    surpriseMessage.classList.add("show");

    // Change button text

    surpriseButton.textContent =
        "Alles Gute zum Geburtstag, Vicki! ❤️";

    // Start celebration

    createConfetti();

    // Scroll to the surprise message

    setTimeout(() => {
        surpriseMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 300);

});


// EXTRA HEART CELEBRATION

function createHeart() {

    const heart = document.createElement("div");

    heart.textContent = "💗";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = "22px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "8";

    heart.style.transition = "transform 5s linear, opacity 5s";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
        heart.style.transform = "translateY(-110vh)";
        heart.style.opacity = "0";
    });

    setTimeout(() => {
        heart.remove();
    }, 5500);
}

// Hearts appear after opening the surprise

function startHeartCelebration() {

    for (let i = 0; i < 20; i++) {

        setTimeout(createHeart, i * 250);

    }

}

// Add hearts to the surprise button

surpriseButton.addEventListener("click", function () {

    if (surpriseOpened) {
        startHeartCelebration();
    }

}, { once: true });

console.log("Happy Birthday Vicki! ❤️");
console.log("Made with love by Michael!");


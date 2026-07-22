// =========================
// Background Animations
// =========================

const balloons = document.getElementById("balloons");
const hearts = document.getElementById("hearts");
const stars = document.getElementById("stars");

// Floating Balloons
function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";
    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.animationDuration = 8 + Math.random() * 8 + "s";
    balloon.style.fontSize = 35 + Math.random() * 25 + "px";

    balloons.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 16000);

}

setInterval(createBalloon, 800);

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = 6 + Math.random() * 5 + "s";
    heart.style.fontSize = 18 + Math.random() * 25 + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}

setInterval(createHeart, 900);

// Twinkling Stars
for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);

}

// =========================
// Birthday Surprise
// =========================

const startBtn = document.getElementById("startBtn");
const glassCard = document.querySelector(".glass-card");
const surprise = document.getElementById("surprise");
const typing = document.getElementById("typing");

const birthdayMessage = "Aan die beste mens op die planeet... 🎂❤️";

// Typewriter Effect
function typeWriter(text) {

    let i = 0;

    typing.textContent = "";

    const interval = setInterval(() => {

        typing.textContent += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(interval);
        }

    }, 70);

}

// Confetti
function launchConfetti() {

    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

}

// Button Click
startBtn.addEventListener("click", () => {

    // Fade out landing card
    glassCard.style.transition = "all 0.8s ease";
    glassCard.style.opacity = "0";
    glassCard.style.transform = "scale(0.9)";

    setTimeout(() => {

        glassCard.style.opacity = "0";
        glassCard.style.transform = "translateY(-40px) scale(.9)";
        glassCard.style.pointerEvents = "none";

        setTimeout(() => {
            glassCard.style.display = "none";
        }, 800);

        surprise.classList.remove("hidden");
        surprise.classList.add("visible");

        // Launch confetti
        launchConfetti();

        // Start typing
        typeWriter(birthdayMessage);

    }, 700);

});

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random()*100 + "%";

    sparkle.style.top = Math.random()*100 + "%";

    surprise.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2000);

}

setInterval(createSparkle,250);

// =========================
// Gift Box
// =========================

const giftBox = document.getElementById("giftBox");
const letter = document.getElementById("letter");

giftBox.addEventListener("click", () => {

    if (giftBox.classList.contains("open")) return;

    giftBox.classList.add("open");

    confetti({

        particleCount:120,

        spread:90,

        origin:{ y:0.65 }

    });

    setTimeout(() => {

        giftBox.style.opacity = "0";
        giftBox.style.transform = "scale(.5)";

    },600);

    setTimeout(() => {

        letter.classList.remove("hidden");
        letter.classList.add("show");

    },1200);

});


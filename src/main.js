// 🎂 Calculate Age
const birthday = new Date("2000-05-15");
const today = new Date();
let age = today.getFullYear() - birthday.getFullYear();
const m = today.getMonth() - birthday.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
  age--;
}
document.getElementById("zin-age").textContent = age;

// 🎵 Music Play
document.getElementById("play-music").addEventListener("click", () => {
  const audio = document.getElementById("birthday-audio");
  audio.play();
});

// 🌸 Sakura Petals Canvas
// const canvas = document.getElementById("sakura-canvas");
// const ctx = canvas.getContext("2d");
// let petals = [];

// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }
// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

// function createPetal() {
//   petals.push({
//     x: Math.random() * canvas.width,
//     y: 0,
//     size: 10 + Math.random() * 20,
//     speed: 1 + Math.random() * 2,
//     drift: Math.random() * 1,
//   });
// }

// function drawPetals() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (let petal of petals) {
//     ctx.beginPath();
//     ctx.fillStyle = "#ffb6c1";
//     ctx.arc(petal.x, petal.y, petal.size, 0, Math.PI * 2);
//     ctx.fill();
//     petal.y += petal.speed;
//     petal.x += Math.sin(petal.y / 20) * petal.drift;

//     if (petal.y > canvas.height) {
//       petal.y = 0;
//       petal.x = Math.random() * canvas.width;
//     }
//   }
// }
// setInterval(() => {
//   createPetal();
//   drawPetals();
// }, 30);

// ❄️ Snowflakes (emoji)
const snowContainer = document.getElementById("snowfall");
function createSnowflake() {
  const flake = document.createElement("div");
  flake.classList.add("snowflake");
  flake.innerText = "❄️";
  flake.style.left = Math.random() * window.innerWidth + "px";
  flake.style.animationDuration = 3 + Math.random() * 5 + "s";
  flake.style.fontSize = 10 + Math.random() * 20 + "px";
  snowContainer.appendChild(flake);
  setTimeout(() => flake.remove(), 8000);
}
setInterval(createSnowflake, 300);

// 🎉 Confetti Click
document.body.addEventListener("click", function (e) {
  for (let i = 0; i < 12; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = e.clientX + "px";
    confetti.style.top = e.clientY + "px";
    confetti.style.fontSize = Math.random() * 24 + 12 + "px";
    confetti.style.animation = "fall 1s ease-out forwards";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1000);
  }
});

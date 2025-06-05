window.addEventListener("load", () => {
  // Logo aparece e intro some
  setTimeout(() => {
    document.body.classList.add("loaded");
    const intro = document.querySelector('.intro');
    intro.style.display = 'none';
  }, 3500);
});

/* -------- Partículas -------- */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particlesArray;

// Configurações
const numberOfParticles = 80;
particlesArray = [];

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 2;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const directionX = (Math.random() - 0.5) * 0.5;
    const directionY = (Math.random() - 0.5) * 0.5;
    const color = 'rgba(255,255,255,0.2)';

    particlesArray.push({ x, y, directionX, directionY, size, color });
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.directionX;
    p.y += p.directionY;

    if (p.x > canvas.width || p.x < 0) p.directionX = -p.directionX;
    if (p.y > canvas.height || p.y < 0) p.directionY = -p.directionY;
  });
}

window.addEventListener('resize', () => {
  init();
});

init();
animate();

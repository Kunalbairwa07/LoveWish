/* ============================================================
   Happy Birthday Khushi — Interactions & Animations
   ============================================================ */

// ---------- Open Surprise ----------
const openBtn   = document.getElementById('openBtn');
const landing   = document.getElementById('landing');
const mainSite  = document.getElementById('mainSite');
const bgMusic   = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
  landing.classList.add('fade-out');
  setTimeout(() => {
    landing.classList.add('hidden');
    mainSite.classList.remove('hidden');
    startTyping();
    spawnBalloons();
    spawnPetals();
    spawnParticles();
  }, 700);

  // Try to play music (allowed because triggered by user gesture)
  bgMusic.volume = 0.5;
  bgMusic.play().catch(() => { /* ignore autoplay errors */ });
});

// ---------- Typing Effect ----------
function startTyping() {
  const text = "Happy Birthday My Love ❤️";
  const target = document.getElementById('typedText');
  let i = 0;
  target.textContent = "";
  const interval = setInterval(() => {
    target.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 90);
}

// ---------- Live Love Counter ----------
const startDate = new Date("2000-01-01T00:00:00").getTime();

function updateCounter() {
  const now  = Date.now();
  const diff = now - startDate;

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent    = days;
  document.getElementById('hours').textContent   = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}
updateCounter();
setInterval(updateCounter, 1000);

// ---------- Special Message Modal ----------
const modal      = document.getElementById('messageModal');
const messageBtn = document.getElementById('messageBtn');
const closeModal = document.getElementById('closeModal');

messageBtn.addEventListener('click', () => modal.classList.add('active'));
closeModal.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

// ---------- Floating Balloons ----------
function spawnBalloons() {
  const layer = document.querySelector('.balloons');
  const colors = ['#ff4d6d', '#ff6fa3', '#c084fc', '#a855f7', '#ff8fb6'];
  setInterval(() => {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.background = colors[Math.floor(Math.random() * colors.length)];
    b.style.animationDuration = (6 + Math.random() * 6) + 's';
    b.style.transform = `scale(${0.7 + Math.random() * 0.8})`;
    layer.appendChild(b);
    setTimeout(() => b.remove(), 12000);
  }, 900);
}

// ---------- Falling Petals ----------
function spawnPetals() {
  const layer = document.querySelector('.petals');
  setInterval(() => {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (5 + Math.random() * 5) + 's';
    p.style.opacity = 0.5 + Math.random() * 0.5;
    layer.appendChild(p);
    setTimeout(() => p.remove(), 10000);
  }, 500);
}

// ---------- Glowing Particles ----------
function spawnParticles() {
  const layer = document.querySelector('.particles');
  for (let i = 0; i < 40; i++) {
    const dot = document.createElement('div');
    dot.className = 'particle';
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.top  = Math.random() * 100 + 'vh';
    dot.style.animationDuration = (2 + Math.random() * 4) + 's';
    dot.style.animationDelay = Math.random() * 4 + 's';
    layer.appendChild(dot);
  }
}

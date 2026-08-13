// Lista de emojis que caen - Puedes cambiarlos aquí
const floatingEmojis = [
  '💕',
  '💜',
  '👀',
  '☺️',
  '🏎️',
  '🔞',
  '🥰',
  '💐',
  '🗽',
  '🍸',
  '🍹',
  '😈',
  '😏',
  '🎁',
  '🚗',
  '🥟',
  '🍛',
  '🍜',
  '🐈',
  '🇯🇵',
  '🍱',
  '👹',
  '🍣'
];

// Ruta de la imagen del logo de BTS (respecta `base` de Vite)
const btsLogoPath = import.meta.env.BASE_URL + 'images/logo.png';

export function startParticles() {
  const petals = document.getElementById('petals');
  const sparkles = document.getElementById('sparkles');

  if (!petals || !sparkles) return;

  function createPetal() {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = `${Math.random() * 100}vw`;
    const d = 8 + Math.random() * 8;
    p.style.animationDuration = `${d}s`;
    p.style.transform = `translateX(${(Math.random() - 0.5) * 50}px)`;
    petals.appendChild(p);
    setTimeout(() => p.remove(), d * 1000);
  }

  function createSpark() {
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = `${Math.random() * 100}vw`;
    const d = 5 + Math.random() * 6;
    s.style.animationDuration = `${d}s`;
    sparkles.appendChild(s);
    setTimeout(() => s.remove(), d * 1000);
  }

  function createEmoji() {
    const e = document.createElement('div');
    e.className = 'floating-emoji';
    e.style.left = `${Math.random() * 100}vw`;
    const randomEmoji = floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)];
    e.textContent = randomEmoji;
    const d = 8 + Math.random() * 8;
    e.style.animationDuration = `${d}s`;
    petals.appendChild(e);
    setTimeout(() => e.remove(), d * 1000);
  }

  function createBtsLogo() {
    const b = document.createElement('div');
    b.className = 'bts-logo';
    b.style.left = `${Math.random() * 100}vw`;
    
    // Crear imagen
    const img = document.createElement('img');
    img.src = btsLogoPath;
    img.style.width = '50px';
    img.style.height = '50px';
    img.style.objectFit = 'contain';
    
    b.appendChild(img);
    
    const d = 8 + Math.random() * 8;
    b.style.animationDuration = `${d}s`;
    petals.appendChild(b);
    setTimeout(() => b.remove(), d * 1000);
  }

  // Crear pétalos normalmente
  setInterval(createPetal, 450);
  setInterval(createSpark, 350);
  
  // Crear emojis aleatoriamente (25% de probabilidad cada 600ms)
  setInterval(() => {
    if (Math.random() < 0.25) createEmoji();
  }, 600);
  
  // Crear logo de BTS aleatoriamente (15% de probabilidad cada 1200ms)
  setInterval(() => {
    if (Math.random() < 0.15) createBtsLogo();
  }, 1200);
}

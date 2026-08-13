import { startParticles } from './particles.js';
import { createGiftBoxes } from '../components/GiftBoxes.js';
import { initGiftSelection } from './selection.js';

const CONFIG_PATH = `${import.meta.env.BASE_URL}selectedGift.json`;
const LOCAL_STORAGE_KEY = 'selectedGift';

async function loadSavedSelection() {
  let config = { selectedBox: null, resetLocalStorage: false };
  try {
    const response = await fetch(CONFIG_PATH, { cache: 'no-store' });
    if (response.ok) {
      config = await response.json();
    }
  } catch (error) {
    // No hace falta detener la app si el archivo no está disponible.
  }

  if (config.resetLocalStorage) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  if (typeof config.selectedBox === 'number' && [0, 1, 2, 3].includes(config.selectedBox)) {
    localStorage.setItem(LOCAL_STORAGE_KEY, config.selectedBox);
    return config.selectedBox;
  }

  const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedValue !== null) {
    const parsed = Number(storedValue);
    if ([0, 1, 2, 3].includes(parsed)) {
      return parsed;
    }
  }

  return null;
}

function renderGiftResult(welcomeSection, selectedIndex) {
  const optionImage = `${import.meta.env.BASE_URL}images/option${selectedIndex + 1}.png`;
  welcomeSection.innerHTML = `
    <div class="stage-card glass gift-result">
      <h2>¡Caja elegida!</h2>
      <p>Acabas de abrir la caja <strong>#${selectedIndex + 1}</strong>.</p>
      <div class="gift-image-wrapper">
        <img src="${optionImage}" alt="Regalo opción ${selectedIndex + 1}" />
      </div>
      <p class="gift-text">Felicidades ojitos lindoooos!! Espero que disfrutes el regalooo 🎁. Te amooooooo</p>
    </div>
  `;
}

export async function initApp() {
  const startBtn = document.getElementById('startBtn');
  const welcomeSection = startBtn?.closest('.hero');

  const savedIndex = await loadSavedSelection();

  // Record a visit (timestamp + optional device info) in localStorage
  try {
    const key = 'visitLog';
    const now = new Date();
    // Format timestamp in Colombia (Bogotá) timezone
    const formatter = new Intl.DateTimeFormat('es-CO', {
      timeZone: 'America/Bogota',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    const formatted = formatter.format(now);
    const entry = {
      timestamp: formatted + ' (America/Bogota)',
      platform: navigator.platform || null,
      userAgent: navigator.userAgent || null,
      screen: `${window.screen?.width || 0}x${window.screen?.height || 0}`
    };
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(entry);
    localStorage.setItem(key, JSON.stringify(existing));
    // also keep a plain-text copy for convenience
    try {
      const lines = existing.map(e => `${e.timestamp} | ${e.platform || ''} | ${e.screen} | ${e.userAgent || ''}`);
      localStorage.setItem('log.txt', lines.join('\n'));
    } catch (e) {
      // ignore text save errors
    }
  } catch (err) {
    // ignore storage errors
  }

  if (!startBtn) return;

  startBtn.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(35);
    if (!welcomeSection) return;

    welcomeSection.classList.add('fade-out');

    setTimeout(() => {
      welcomeSection.innerHTML = createGiftBoxes(savedIndex);
      welcomeSection.classList.remove('fade-out');
      welcomeSection.classList.remove('hero');
      welcomeSection.classList.add('stage');
      initGiftSelection((selectedIndex) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, selectedIndex);
        renderGiftResult(welcomeSection, selectedIndex);
      }, savedIndex);
    }, 700);
  });

  startParticles();
}

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

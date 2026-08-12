const selectionHint = 'Intenta escoger una caja';
const countdownLabel = 'Cuenta regresiva: ';
const loveMessages = [
  'Ya casi amooooor 💖',
  'Tú puedes 😘',
  'No olvides que te amo 💌',
  'Te dejaras ganar ojitos lindos? 💕',
  'Sigue mi vidaaa 💓',
  'Es un honor ser tu hombre 💕',
  'Te pasas de mamasita 💕',
  'Te amo demasiadoooo 😍',
  'Que ganas de besar tus labios y tu boca tambieeeen 😏😍'
];

function getRandomLoveMessage(messages) {
  if (!messages.length) return loveMessages[Math.floor(Math.random() * loveMessages.length)];
  const index = Math.floor(Math.random() * messages.length);
  return messages.splice(index, 1)[0];
}

export function initGiftSelection(onSelected, forcedIndex = null) {
  const boxes = Array.from(document.querySelectorAll('.gift-box'));
  const hint = document.getElementById('selectionHint');
  const countdown = document.getElementById('countdown');
  const popup = document.getElementById('popupMessage');
  let clicksCount = 0;
  const targetClick = 3 + Math.floor(Math.random() * 8); // Entre 3 y 10 clics
  const availableMessages = [...loveMessages];
  const directOpen = forcedIndex !== null;

  boxes.forEach((box) => {
    box.style.position = 'relative';
  });

  boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      if (box.disabled) return;
      if (navigator.vibrate) navigator.vibrate([30, 20, 30]);

      if (directOpen) {
        boxes.forEach((button) => button.disabled = true);
        const boxIndex = Number(box.dataset.box);
        onSelected(Number.isNaN(boxIndex) ? index : boxIndex);
        return;
      }

      clicksCount += 1;

      if (clicksCount <= targetClick) {
        boxes.forEach((button) => {
          button.disabled = true;
          button.classList.remove('selected', 'loser', 'winner');
        });

        moveBoxRandomly(box);
        const loveText = getRandomLoveMessage(availableMessages);
        showPopup(popup, loveText);

        setTimeout(() => {
          boxes.forEach((button) => button.disabled = false);
          hint.textContent = 'Ups... intenta otra vez.';
        }, 350);

        return;
      }

      // En el siguiente click después de targetClick, siempre es ganador
      boxes.forEach((button) => button.disabled = true);
      
      // Crear overlay oscuro (solo los bordes, no la caja)
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.zIndex = '10';
      overlay.style.pointerEvents = 'none';
      overlay.style.transition = 'opacity 0.5s ease';
      overlay.style.opacity = '0';
      
      // Obtener posición de la caja para centrar el efecto
      const boxRect = box.getBoundingClientRect();
      const boxCenterX = boxRect.left + boxRect.width / 2;
      const boxCenterY = boxRect.top + boxRect.height / 2;
      
      // Usar radial-gradient para oscurecer solo los bordes
      overlay.style.background = `radial-gradient(circle at ${boxCenterX}px ${boxCenterY}px, transparent 200px, rgba(0, 0, 0, 0.7) 400px)`;
      document.body.appendChild(overlay);
      
      // Desvanecer el overlay
      setTimeout(() => {
        overlay.style.opacity = '1';
      }, 50);
      
      // Ocultar las otras cajas
      boxes.forEach((button, i) => {
        if (i !== index) {
          button.style.opacity = '0';
          button.style.pointerEvents = 'none';
          button.style.transition = 'opacity 0.5s ease';
        }
      });
      
      // Asegurar que la caja ganadora esté por encima del overlay
      box.style.position = 'relative';
      box.style.zIndex = '1000';
      
      // Agregar animación de crecimiento a la caja ganadora
      box.classList.add('growing-box');
      startConfetti(box, 3000); // Confeti durante 3 segundos
      
      // Esperar 3 segundos sin mostrar cuenta regresiva
      setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
        onSelected(index);
      }, 3000);
    });
  });
}

function moveBoxRandomly(box) {
  const x = Math.round((Math.random() - 0.5) * 400);
  const y = Math.round((Math.random() - 0.5) * 320);
  box.style.transform = `translate(${x}px, ${y}px)`;
}

function showPopup(popup, message) {
  if (!popup) return;
  popup.innerHTML = `<span>${message}</span>`;
  popup.classList.add('visible');
  popup.classList.remove('hidden');

  clearTimeout(popup.hideTimeout);
  popup.hideTimeout = setTimeout(() => {
    popup.classList.remove('visible');
    popup.classList.add('hidden');
  }, 1200);
}

function startConfetti(box, duration) {
  const boxRect = box.getBoundingClientRect();
  const boxCenterX = boxRect.left + boxRect.width / 2;
  const boxCenterY = boxRect.top + boxRect.height / 2;
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '999';
  document.body.appendChild(container);

  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#ff78b7', '#d09cff', '#ffc4dd', '#ff8abd', '#e26ad7'][Math.floor(Math.random() * 5)];
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.left = (boxCenterX + (Math.random() - 0.5) * 60) + 'px';
    confetti.style.top = (boxCenterY + (Math.random() - 0.5) * 60) + 'px';
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = 2 + Math.random() * 4;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 2;
    
    let x = parseFloat(confetti.style.left);
    let y = parseFloat(confetti.style.top);
    let opacity = 1;
    
    container.appendChild(confetti);
    
    const animateConfetti = () => {
      x += vx;
      y += vy;
      opacity -= 0.015;
      confetti.style.left = x + 'px';
      confetti.style.top = y + 'px';
      confetti.style.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animateConfetti);
      } else {
        confetti.remove();
      }
    };
    
    animateConfetti();
  }

  const confettiInterval = setInterval(createConfetti, 30);
  
  setTimeout(() => {
    clearInterval(confettiInterval);
    setTimeout(() => container.remove(), 1000);
  }, duration);
}

function startCountdown(seconds, countdownElement, onComplete) {
  countdownElement.classList.remove('hidden');
  let remaining = seconds;
  countdownElement.textContent = countdownLabel + remaining;

  const interval = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      clearInterval(interval);
      countdownElement.classList.add('hidden');
      onComplete();
      return;
    }
    countdownElement.textContent = countdownLabel + remaining;
  }, 1000);
}

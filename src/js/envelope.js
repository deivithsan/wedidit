import { createEnvelopeModal } from '../components/Envelope.js';

export function initEnvelope() {
  const root = document.body;
  // append modal markup once
  if (!document.getElementById('envelopeModal')) {
    const frag = document.createRange().createContextualFragment(createEnvelopeModal());
    root.appendChild(frag);
  }

  const openBtn = document.getElementById('envelopeBtn');
  const modal = document.getElementById('envelopeModal');
  const closeBtn = document.getElementById('closeEnvelope');

  function openModal() {
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('open'), 10);
    document.documentElement.classList.add('no-scroll');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.documentElement.classList.remove('no-scroll');
    setTimeout(() => modal.classList.add('hidden'), 350);
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const resetButton = document.getElementById('resetGifts');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      if (window.confirm('¿Estás seguro de reiniciar los regalos?')) {
        localStorage.removeItem('selectedGift');
        window.location.reload();
      }
    });
  }

  // also close when clicking outside letter
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

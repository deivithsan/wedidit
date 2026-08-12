export function createWelcomeSection() {
  const container = document.createElement('main');
  container.className = 'hero glass';
  container.innerHTML = `
    <div class="badge">💕 Hecho con todo mi amor 💕</div>
    <div class="envelope-action">
      <button id="envelopeBtn" class="icon-btn" aria-label="Ver carta">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 7.5v9A2.5 2.5 0 004.5 19h15a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0019.5 5h-15A2.5 2.5 0 002 7.5z" stroke="#d75f9f" stroke-width="0.8" fill="rgba(255,255,255,0.02)"/>
          <path d="M3 7l8.5 6L20 7" stroke="#d75f9f" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <h1><span>Amor de mi vida</span></h1>
    <p>Preparé una sorpresa muy especial para ti por esa meta de los 100 días de racha. <br> Espero que disfrutes cada segundo de esta pequeña aventura como yo he disfrutado cada segundo a tu lado desde que llegaste a mi vida.<br><br> TE AMOOOOOOOO</p>
    <button id="startBtn">Comenzar</button>
  `;
  return container;
}

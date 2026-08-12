export function createGiftBoxes(selectedIndex = null) {
  const boxes = [0, 1, 2, 3].map((index) => `
        <button class="gift-box ${index === 3 ? 'box-four' : ''}" data-box="${index}" type="button" aria-label="Caja número ${index + 1}">
          <div class="box">
            <div class="face face-front">${index + 1}</div>
            <div class="face face-back"></div>
            <div class="face face-right"></div>
            <div class="face face-left"></div>
            <div class="face face-top"></div>
          </div>
        </button>
      `);

  const renderedBoxes = selectedIndex !== null ? boxes[selectedIndex] : boxes.join('');
  const hintText = selectedIndex !== null ? 'Ya tienes un regalo elegido. Toca la caja para abrirlo.' : 'Que contendraaaan? tatatataaaaaaan';

  return `
    <div class="stage gift-stage fade-in">
      <div class="stage-card">
        <h2>Elige una caja amor mioooooo</h2>
      </div>
      <div class="stage-grid ${selectedIndex !== null ? 'single-box-grid' : ''}" aria-label="Cuatro cajas sorpresa">
        ${renderedBoxes}
      </div>
      <div id="selectionHint" class="hint">${hintText}</div>
      <div id="countdown" class="countdown hidden" aria-live="polite"></div>
      <div id="popupMessage" class="popup-message hidden" aria-live="polite"></div>
    </div>
  `;
}

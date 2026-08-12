import './style.css';
import { createWelcomeSection } from './components/Welcome.js';
import { initApp } from './js/app.js';
import { initEnvelope } from './js/envelope.js';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
app.appendChild(createWelcomeSection());

initApp();
initEnvelope();

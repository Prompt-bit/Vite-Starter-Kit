import { renderCodeSnippet } from './utils.js';

export function init(container) {
  const card = document.createElement('div');
  card.className = 'demo-card';

  const h3 = document.createElement('h3');
  h3.textContent = 'Form Validation';

  const form = document.createElement('form');
  form.innerHTML = `
    <label>Name (required)<br><input name="name" required></label><br>
    <label>Email (required)<br><input name="email" type="email" required></label>
    <div style="margin-top:0.5rem">
      <button type="submit">Submit</button>
      <button type="button" id="resetBtn">Reset</button>
    </div>
    <div id="formMsg" aria-live="polite" style="margin-top:0.5rem;color:#991b1b"></div>
  `;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    if (!name || !email) {
      form.querySelector('#formMsg').textContent = 'Please fill out all fields correctly.';
      return;
    }
    form.querySelector('#formMsg').textContent = `Thanks, ${name}! We received ${email}.`;
  });

  form.querySelector('#resetBtn').addEventListener('click', () => {
    form.reset();
    form.querySelector('#formMsg').textContent = '';
  });

  // Code snippet for developers
  const snippet = `form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    // validate inputs...
  });`;

  renderCodeSnippet(card, snippet, 'js');

  card.appendChild(h3);
  card.appendChild(form);
  container.appendChild(card);
}

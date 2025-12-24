import { renderCodeSnippet } from './utils.js';

export function init(container) {
  const card = document.createElement('div');
  card.className = 'demo-card';

  const h3 = document.createElement('h3');
  h3.textContent = 'LocalStorage Demo';

  const input = document.createElement('input');
  input.placeholder = 'Type something...';
  input.value = localStorage.getItem('starter:note') || '';

  const save = document.createElement('button');
  save.textContent = 'Save';

  const clear = document.createElement('button');
  clear.textContent = 'Clear';

  const msg = document.createElement('div');
  msg.style.marginTop = '0.5rem';

  save.addEventListener('click', () => {
    localStorage.setItem('starter:note', input.value);
    msg.textContent = 'Saved!';
  });

  clear.addEventListener('click', () => {
    localStorage.removeItem('starter:note');
    input.value = '';
    msg.textContent = 'Cleared.';
  });

  const row = document.createElement('div');
  row.style.display = 'flex';
  row.style.gap = '0.5rem';
  row.style.marginTop = '0.5rem';

  row.appendChild(save);
  row.appendChild(clear);

  card.appendChild(h3);
  card.appendChild(input);
  card.appendChild(row);
  card.appendChild(msg);

  const snippet = `save.addEventListener('click', () => {
  localStorage.setItem('starter:note', input.value);
});`;

  renderCodeSnippet(card, snippet, 'js');

  container.appendChild(card);
}

import { renderCodeSnippet } from './utils.js';

export function init(container) {
  const card = document.createElement('div');
  card.className = 'demo-card';

  const h3 = document.createElement('h3');
  h3.textContent = 'Modal Dialog';

  const open = document.createElement('button');
  open.textContent = 'Open Modal';

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="modal-content" role="document">
      <p>This is a simple modal. Press Escape or click close to dismiss.</p>
      <div style="margin-top:0.8rem">
        <button id="closeModal">Close</button>
      </div>
    </div>
  `;

  open.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  modal.querySelector('#closeModal').addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  card.appendChild(h3);
  card.appendChild(open);
  card.appendChild(modal);

  const snippet = `open.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'false');
});

modal.querySelector('#closeModal').addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
});`;

  renderCodeSnippet(card, snippet, 'js');

  container.appendChild(card);
}

import { renderCodeSnippet } from './utils.js';

export function init(container) {
  const card = document.createElement('div');
  card.className = 'demo-card';

  const h3 = document.createElement('h3');
  h3.textContent = 'Accordion';

  const items = [
    { title: 'Item 1', body: 'Content for item 1.' },
    { title: 'Item 2', body: 'Content for item 2.' },
    { title: 'Item 3', body: 'Content for item 3.' }
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'demo-accordion';

  items.forEach((it, idx) => {
    const head = document.createElement('button');
    head.className = 'accordion-head';
    head.type = 'button';
    head.textContent = it.title;

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.textContent = it.body;

    head.addEventListener('click', () => {
      const expanded = head.getAttribute('aria-expanded') === 'true';
      head.setAttribute('aria-expanded', String(!expanded));
      body.style.display = expanded ? 'none' : 'block';
    });

    head.setAttribute('aria-expanded', 'false');
    body.style.display = 'none';

    wrapper.appendChild(head);
    wrapper.appendChild(body);
  });

  card.appendChild(h3);
  card.appendChild(wrapper);

  const snippet = `head.addEventListener('click', () => {
  const expanded = head.getAttribute('aria-expanded') === 'true';
  head.setAttribute('aria-expanded', String(!expanded));
  body.style.display = expanded ? 'none' : 'block';
});`;

  renderCodeSnippet(card, snippet, 'js');

  container.appendChild(card);
}

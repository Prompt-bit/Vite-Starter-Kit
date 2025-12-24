const DEMOS = [
  { id: 'counter', label: 'Counter (built-in)', loader: null },
  { id: 'form', label: 'Form validation', loader: './demos/form.js' },
  { id: 'fetch', label: 'Fetch API', loader: './demos/fetch.js' },
  { id: 'modal', label: 'Modal dialog', loader: './demos/modal.js' },
  { id: 'accordion', label: 'Accordion', loader: './demos/accordion.js' },
  { id: 'storage', label: 'LocalStorage demo', loader: './demos/storage.js' }
];

function createCounterDemo(container) {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.textContent = 'Counter Demo';

  const p = document.createElement('p');
  p.textContent = 'Simple counter to demonstrate event handling.';

  const btn = document.createElement('button');
  btn.id = 'countBtn';
  btn.type = 'button';
  btn.setAttribute('aria-live', 'polite');

  let count = 0;
  btn.textContent = `Count: ${count}`;
  btn.addEventListener('click', () => {
    count += 1;
    btn.textContent = `Count: ${count}`;
  });

  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(btn);
  container.appendChild(section);
}

async function loadDemo(id, container) {
  container.innerHTML = '';
  if (id === 'counter') {
    createCounterDemo(container);
    return;
  }
  const demo = DEMOS.find(d => d.id === id);
  if (!demo || !demo.loader) return;
  try {
    const module = await import(demo.loader);
    if (typeof module.init === 'function') module.init(container);
  } catch (err) {
    container.textContent = 'Failed to load demo: ' + err.message;
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return console.error('Missing #app container');

  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'Starter Kit — Demos';
  header.appendChild(title);

  const nav = document.createElement('nav');
  nav.className = 'demo-nav';

  DEMOS.forEach(d => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'demo-btn';
    b.textContent = d.label;
    b.addEventListener('click', () => loadDemo(d.id, demoContainer));
    nav.appendChild(b);
  });

  const demoContainer = document.createElement('div');
  demoContainer.id = 'demo-container';
  demoContainer.className = 'demo-container';

  app.appendChild(header);
  app.appendChild(nav);
  app.appendChild(demoContainer);

  // Load default demo (counter)
  loadDemo('counter', demoContainer);
});

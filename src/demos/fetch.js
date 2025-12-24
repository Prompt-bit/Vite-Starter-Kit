import { renderCodeSnippet } from './utils.js';

export async function init(container) {
  const card = document.createElement('div');
  card.className = 'demo-card';

  const h3 = document.createElement('h3');
  h3.textContent = 'Fetch API Demo';

  const btn = document.createElement('button');
  btn.textContent = 'Load sample from jsonplaceholder.typicode.com';

  const pre = document.createElement('pre');
  pre.style.whiteSpace = 'pre-wrap';
  pre.style.marginTop = '0.5rem';

  btn.addEventListener('click', async () => {
    btn.disabled = true;
    btn.textContent = 'Loading...';
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();
      pre.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      pre.textContent = 'Fetch failed: ' + err.message;
    } finally {
      btn.disabled = false;
      btn.textContent = 'Load sample from jsonplaceholder.typicode.com';
    }
  });

  card.appendChild(h3);
  card.appendChild(btn);
  card.appendChild(pre);

  const snippet = `const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await res.json();
console.log(data);`;

  renderCodeSnippet(card, snippet, 'js');

  container.appendChild(card);
}

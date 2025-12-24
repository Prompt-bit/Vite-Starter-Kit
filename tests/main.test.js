import { test, expect } from 'vitest';

test('main.js creates counter button and increments', async () => {
  document.body.innerHTML = '<main id="app" class="container"></main>';
  await import('../src/main.js');
  document.dispatchEvent(new Event('DOMContentLoaded'));

  const btn = document.getElementById('countBtn');
  expect(btn).not.toBeNull();
  expect(btn.textContent).toContain('Count: 0');

  btn.click();
  expect(btn.textContent).toContain('Count: 1');
});
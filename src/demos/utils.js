export function renderCodeSnippet(container, codeString, language = 'js') {
  const details = document.createElement('details');
  details.className = 'code-details';

  const summary = document.createElement('summary');
  summary.textContent = 'Show code';

  const pre = document.createElement('pre');
  const code = document.createElement('code');
  code.className = `language-${language}`;
  code.textContent = codeString.trim();

  pre.appendChild(code);
  details.appendChild(summary);
  details.appendChild(pre);

  container.appendChild(details);
}

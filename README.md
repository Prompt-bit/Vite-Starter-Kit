# Starter Kit — Vanilla JavaScript Frontend 🚀

A minimal, framework-free starter kit for frontend projects using plain HTML, CSS and JavaScript.

## Quickstart

- Open `index.html` in your browser, or run a local static server (recommended):
  - VS Code: install **Live Server** extension and click "Go Live"
  - Python: `python -m http.server 5173`

## What’s included

- `index.html` — application entry
- `src/main.js` — minimal demo app (counter)
- `src/styles.css` — basic styles
- `README.md`, `LICENSE (MIT)`, `.gitignore`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`
- `.vscode/extensions.json` — recommended extensions: Live Server, EditorConfig

## Cleanup performed

- Moved stylesheet to `index.html` head; removed inline style injection from JS
- Rewrote `src/main.js` to create DOM nodes safely (no raw innerHTML)
- Simplified `index.js` and removed duplicate console logs

## Developer scripts

- `npm run dev` — start Vite dev server
- `npm run build` — create production build with Vite
- `npm run start` — serve built files with `npx serve`
- `npm run lint` — run ESLint
- `npm run format` — run Prettier formatter
- `npm run test` — run Vitest

## Demos included

- Counter (built-in)
- Form validation
- Fetch API (jsonplaceholder sample)
- Modal dialog
- Accordion
- LocalStorage demo

Each demo now includes a collapsible **code snippet** to help developers see the minimal implementation.

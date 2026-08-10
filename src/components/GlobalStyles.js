import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
===============
Design tokens
===============
Palette reads like instrumentation: cool near-black panels, cool text, and a
single warm signal colour reserved for actions and live accents.
*/
:root {
  --bg: #0B0F14;
  --surface: #131A22;
  --surface-raised: #1A222C;
  --text: #E8EEF4;
  --muted: #94A3B1;
  --line: rgba(232, 238, 244, 0.12);
  --line-strong: rgba(232, 238, 244, 0.22);

  --accent: #FFB454;
  --accent-soft: rgba(255, 180, 84, 0.14);
  --accent-contrast: #16100A;

  --font-display: "IBM Plex Sans Condensed", "IBM Plex Sans", system-ui, sans-serif;
  --font-body: "IBM Plex Sans", system-ui, -apple-system, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  --transition: all 0.25s ease;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --measure: 68ch;
}

/*
===============
Base typography
===============
*/
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.15;
}

p {
  color: var(--text);
}

a:hover {
  cursor: pointer;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

/* Readable measure for prose blocks */
.prose {
  max-width: var(--measure);
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(232, 238, 244, 0.82);
}

/* Small uppercase mono label used for metadata and eyebrows */
.label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.link-icons {
  line-height: 0;
  font-size: 1.75rem;
  transition: var(--transition);
  color: var(--text);

  &:hover {
    color: var(--accent);
  }
}

.section {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-items: stretch;
  padding: clamp(4rem, 10vw, 8rem) 0;
  border-top: 1px solid var(--line);
}

/*
===============
Components
===============
*/
.navbar {
  border-bottom: 1px solid var(--line);
  background: rgba(11, 15, 20, 0.82);
  backdrop-filter: blur(14px);
}

.navbar .nav-link {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.navbar .nav-link:hover {
  color: var(--text);
}

.navbar .nav-link.active {
  color: var(--accent);
}

.btn {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 0.4rem;
  padding: 0.75rem 1.6rem;
  transition: var(--transition);
}

.btn-outline-light {
  border: 1px solid var(--line-strong);
  color: var(--text);
}

.btn-outline-light:hover,
.btn-outline-light:focus-visible {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-contrast);
}

.form-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.form-control {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 0.4rem;
  padding: 0.75rem 0.9rem;
  color: var(--text);
  font-family: var(--font-body);
}

.form-control::placeholder {
  color: rgba(232, 238, 244, 0.3);
}

.form-control:focus {
  background: var(--surface-raised);
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
  color: var(--text);
}

.input-group-text {
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--muted);
}

.alert {
  border-radius: 0.4rem;
  font-size: 0.95rem;
}

.pagination .page-link {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.pagination .page-link:hover {
  background: var(--accent-soft);
  color: var(--accent);
}

.page-item.active .page-link {
  background-color: var(--accent);
  border-color: var(--accent);
  color: var(--accent-contrast);
}

.page-item.disabled .page-link {
  background: transparent;
  opacity: 0.35;
}

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 2rem;
  }
  .form-group {
    max-width: 750px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;

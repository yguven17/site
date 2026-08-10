import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
===============
Variables
===============
*/
:root {
  --primary-light: #b0edfd;
  /* Primary Color */
  --primary: #61DBFB;
  --primary-dark: #316e7e;
  --primary-contrast: #10222a;
  --border: 1px solid #61DBFB;
  --hairline: 1px solid rgba(251, 253, 255, 0.14);
  --muted: rgba(251, 253, 255, 0.62);
  --transition: all 0.3s linear;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
    "Liberation Mono", monospace;
}

/*
===============
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}

a:hover {
  cursor: pointer;
}

/* Visible keyboard focus everywhere */
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};

  &:hover {
        color: var(--primary);
      }
}

/* Content-driven spacing instead of locking every section to the viewport */
.section {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-items: stretch;
  padding: clamp(3.5rem, 9vw, 7rem) 0;
}

.title {
    font-family: "Permanent Marker";
}

/*
===============
Components
===============
*/
.navbar {
  border-bottom: 1px solid rgba(97, 219, 251, 0.25);
  background: rgba(39, 39, 42, 0.85);
  backdrop-filter: blur(12px);
}

.navbar .nav-link {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.navbar .nav-link.active {
  color: var(--primary);
}

.btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  border-radius: 2rem;
  padding: 0.7rem 1.7rem;
  transition: var(--transition);
}

.btn-outline-light {
  border: 1px solid rgba(251, 253, 255, 0.3);
  color: #FBFDFF;
}

.btn-outline-light:hover,
.btn-outline-light:focus-visible {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--primary-contrast);
}

.form-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.form-control {
  background: rgba(255, 255, 255, 0.04);
  border: var(--hairline);
  border-radius: 0.55rem;
  padding: 0.7rem 0.9rem;
  color: #FBFDFF;
}

.form-control::placeholder {
  color: rgba(251, 253, 255, 0.32);
}

.form-control:focus {
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(97, 219, 251, 0.18);
  color: #FBFDFF;
}

.input-group-text {
  background: rgba(255, 255, 255, 0.04);
  border: var(--hairline);
  color: var(--muted);
}

.alert {
  border-radius: 0.55rem;
  font-size: 0.95rem;
}

.pagination .page-link {
  background: transparent;
  border: var(--hairline);
  color: #FBFDFF;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.pagination .page-link:hover {
  background: rgba(97, 219, 251, 0.12);
  color: var(--primary);
}

.page-item.active .page-link {
    background-color: var(--primary);
    border-color: var(--primary);
    color: var(--primary-contrast);
}

.page-item.disabled .page-link {
  background: transparent;
  opacity: 0.35;
}

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 3rem;
  }
  .form-group {
      max-width: 750px;
    }
}

 @media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--primary);
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

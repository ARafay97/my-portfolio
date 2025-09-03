/*import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <h1 className={styles.logo}>MyPortfolio</h1>

        <ul className={`${styles.menu} ${menuOpen ? styles.showMenu : ''}`}>
          <li><a href="#home" className={styles.link}>Home</a></li>
          <li><a href="#projects" className={styles.link}>Projects</a></li>
          <li><a href="#sites" className={styles.link}>E-Commerce</a></li>
          <li><a href="#contact" className={styles.link}>Contact</a></li>
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.toggle}
            onClick={() => setDarkMode(v => !v)}
            aria-pressed={darkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'DARK' : 'LIGHT'}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
*/

import { useEffect, useMemo, useState } from 'react';
import styles from './Navbar.module.css';

function safeStorageGet(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : v === 'true';
  } catch { return fallback; }
}
function safeStorageSet(key, value) {
  try { localStorage.setItem(key, String(value)); } catch {}
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => safeStorageGet('darkMode', false));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    safeStorageSet('darkMode', darkMode);
  }, [darkMode]);

  // Close menu on hash navigation
  useEffect(() => {
    const onHash = () => setMenuOpen(false);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main">
      <div className={styles.navInner}>
        <a href="#home" className={styles.logo}>MyPortfolio</a>

        <ul className={`${styles.menu} ${menuOpen ? styles.showMenu : ''}`}>
          <li><a href="#home" className={styles.link} onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#projects" className={styles.link} onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#sites" className={styles.link} onClick={() => setMenuOpen(false)}>E-Commerce</a></li>
          <li><a href="#contact" className={styles.link} onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setDarkMode(v => !v)}
            aria-pressed={darkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'DARK' : 'LIGHT'}
          </button>

          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobileOpen : ''}`}
      >
        <ul className={styles.mobileList}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#sites" onClick={() => setMenuOpen(false)}>E-Commerce</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

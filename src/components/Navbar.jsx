import { useEffect, useState } from 'react';
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

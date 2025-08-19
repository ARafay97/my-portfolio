import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>MyPortfolio</h1>
<ul className={styles.menu}>
  <li><a href="#home">Home</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

      <button
        className={styles.toggle}
        onClick={() => setDarkMode(prev => !prev)}
      >
        {darkMode ? 'DARK' : 'LIGHT'}
      </button>
    </nav>
  );
}

export default Navbar;

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Abdul Rafay. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;

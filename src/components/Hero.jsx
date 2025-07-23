import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Abdul Rafay
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Software Engineering Student & Aspiring AI Researcher
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

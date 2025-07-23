import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Contact Me</h2>
      <form
        className={styles.form}
        action="https://formspree.io/f/your-form-id"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

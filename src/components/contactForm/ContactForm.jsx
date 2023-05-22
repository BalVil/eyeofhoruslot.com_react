import styles from './ContactForm.module.scss';
import contactImage from 'images/email.png';

function ContactForm() {
  return (
    <div className={styles.formWrapper} data-form>
      <p className={styles.formTitle}>Please enter your details below</p>

      <div className={styles.formImg}>
        <img src={contactImage} alt="email" />
      </div>
      <form className={styles.contactForm} data-contactus>
        <input
          required
          type="text"
          className={styles.formItem}
          name="name"
          placeholder="Your name"
        />

        <input
          required
          type="text"
          className={styles.formItem}
          name="email"
          placeholder="Your email"
          pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
        />

        <textarea
          required
          name="message"
          placeholder="Your message"
          className={styles.formItem}
        ></textarea>

        <button type="submit" className={styles.formBtn}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

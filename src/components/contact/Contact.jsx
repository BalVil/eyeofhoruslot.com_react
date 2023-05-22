import styles from './Contact.module.scss';
import Container from 'components/container/Container';

function Contact() {
  return (
    <section className={styles.contact}>
      <Container>
        {/* <div class="contact-us__container"> */}

        {/* <div class="submit-success">
            <img
              src="/img/thank_yellow.png"
              alt="Thank you"
              class="submit-success__img"
            />
            <p>
              Please wait. <br />
              We will get back to you as soon as possible
            </p>
          </div> */}

        <h2 className={styles.visuallyHidden}>Contact us</h2>

        <nav className={navBar}></nav>

        {/* </div> */}
      </Container>
    </section>
  );
}

export default Contact;

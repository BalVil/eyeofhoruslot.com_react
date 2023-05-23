import { useLocation } from 'react-router-dom';

import Back from 'components/back/Back';
import ContactForm from 'components/contactForm/ContactForm';
import Footer from 'components/footer';
import Container from 'components/container/Container';
import Section from 'components/section/Section';

function Contact() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <main>
        <Section>
          <Container>
            {/* <Back backLink={backLinkHref} /> */}
            <ContactForm />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;

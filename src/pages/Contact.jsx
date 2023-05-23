import { useLocation } from 'react-router-dom';

import Back from 'components/back/Back';
import ContactForm from 'components/contactForm/ContactForm';
import Footer from 'components/footer';

function Contact() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <main>
        <Back backLink={backLinkHref} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Contact;

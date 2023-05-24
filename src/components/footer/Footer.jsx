import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Social from 'components/social';
import Container from 'components/container/Container';
import TermsModal from 'components/terms&PrivacyModal/TermsModal';
import PrivacyModal from 'components/terms&PrivacyModal/PrivacyModal';
import styles from './Footer.module.scss';
import eighteenPlus from 'images/18plus.png';

function Footer() {
  const [isOpenTerms, setIsOpenTerms] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);

  return (
    <>
      <footer className={styles.footer} id="footer">
        <Container>
          <div className={styles.footerContainer}>
            <div className={styles.plus18}>
              <img src={eighteenPlus} alt="18+" height="40" width="40" />
            </div>

            <div className={styles.footerRow}>
              <ul className={styles.footerUl}>
                <li>
                  <a
                    href="#footer"
                    className={styles.footerLink}
                    onClick={() => setIsOpenPrivacy(true)}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className={styles.footerLink}
                    onClick={() => setIsOpenTerms(true)}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <NavLink to="/contact" className={styles.footerLink}>
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <Social />
            </div>

            <div>
              <p className={styles.footerFont}>
                Disclaimer: This website is dedicated to offering free social
                games to people over the age of 18. We are committed to
                promoting responsible gambling with no real money. It is
                critical to recognize that success in our social casino game
                does not imply success in "real money gambling."
              </p>
            </div>

            <div className={styles.footerFont}>
              <small>
                Eyeofhoruslot.com.com&copy; 2022-2023 All rights reserved
              </small>
            </div>
          </div>
        </Container>
      </footer>
      {isOpenTerms && <TermsModal showTerms={setIsOpenTerms} />}
      {isOpenPrivacy && <PrivacyModal showPrivacy={setIsOpenPrivacy} />}
    </>
  );
}

export default Footer;

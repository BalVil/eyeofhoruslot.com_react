import { NavLink } from 'react-router-dom';

import Social from 'components/social/Social';
import Container from 'components/container/Container';
import styles from './Footer.module.scss';
import eighteenPlus from 'images/18plus.png';

function Footer() {
  return (
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
                  data-modal-open2
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className={styles.footerLink}
                  data-modal-open3
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
              Disclaimer: For 18+ players, our platform offers free social
              games. We promote responsible gambling and note that success in
              these games does not guarantee real money gambling achievements.
            </p>
          </div>

          <div className={styles.footerFont}>
            <small> Ifruitslot.com&copy; 2022-2023 All rights reserved </small>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import Container from 'components/container/Container';
import Modal from 'components/modal/Modal';

import styles from './Hero.module.scss';
import homePageImage from 'images/game.jpg';
import Button from 'components/button/Button';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.heroSection}>
      <Container className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          Embark on a free social gaming adventure.
        </h1>
        <div>
          <img
            src={homePageImage}
            alt="Colt Lightning poster"
            width="1200"
            height="600"
            className={styles.gameImg}
          />
        </div>
        <div className={styles.btnContainer}>
          <Button title={'Play'} onClick={() => setIsOpen(true)} />

          {isOpen &&
            createPortal(
              <Modal setIsOpen={setIsOpen} />,
              document.querySelector('#modal-root')
            )}

          {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
        </div>
      </Container>
    </section>
  );
}

export default Hero;

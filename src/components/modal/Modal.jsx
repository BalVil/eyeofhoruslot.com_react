import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import ButtonClose from 'components/buttonClose/ButtonClose';
import Button from 'components/button/Button';
import styles from './Modal.module.scss';
import modalImage from 'images/game.jpg';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.backDrop} onClick={() => setIsOpen(false)}>
      <div className={styles.modalForm}>
        <ButtonClose onClick={() => setIsOpen(false)}>
          <AiOutlineCloseCircle />
        </ButtonClose>

        <img
          src={modalImage}
          alt="Reactoonz 2"
          className={styles.modalImg}
          width="250"
        />

        <form data-register>
          <input
            type="email"
            required
            autocomplete="email"
            placeholder="Enter your email"
            className="hero__input"
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
          />

          <div className="checkbox">
            <label className="checkbox__label">
              <input
                type="checkbox"
                required
                name="checkbox"
                className="checkbox__input checkbox__input--bcg visually-hidden"
              />
              <span className="checkbox__icon checkbox__icon--border">
                <svg width="16" height="15">
                  <use href="/img/icons.svg#icon-check"></use>
                </svg>
              </span>
              I'm 18 years old and I accept the&nbsp;
              <a href="#" data-modal-open3 className="link">
                Terms & Conditions&nbsp;
              </a>
              and&nbsp;
              <a href="#" data-modal-open2 className="link">
                Privacy Policy
              </a>
            </label>
          </div>

          <Button type={'submit'} title={'Submit'}></Button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

function Modal({ variant, children }) {
  return createPortal(
    <div className={styles.backDrop}>
      <div className={styles[variant]}>{children}</div>
    </div>,
    document.querySelector('#modal-root')
  );
}

export default Modal;

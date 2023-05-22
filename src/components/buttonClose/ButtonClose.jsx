import styles from './ButtonClose.module.scss';

function ButtonClose({ type = 'button', onClick, children }) {
  return (
    <button type={type} className={styles.closeBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonClose;

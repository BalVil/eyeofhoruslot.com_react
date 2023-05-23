import styles from './Button.module.scss';

function Button({ ariaLabel, title, type = 'button', onClick }) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={styles.btn}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;

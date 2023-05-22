import styles from './Button.module.scss';

function Button({ title, type = 'button', onClick }) {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;

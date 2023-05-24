import Button from 'components/button/Button';
import styles from './Cookies.module.scss';

const Cookies = ({ showCookies }) => {
  return (
    <>
      <div className={styles.cookieBar}>
        <p>
          We kindly seek your consent to use cookies as per our policies,
          allowing you to proceed with accessing and exploring our website.
        </p>
        <Button title={'GO IT'} onClick={() => showCookies(false)} />
      </div>
    </>
  );
};

export default Cookies;

import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaVimeo, FaPinterestP } from 'react-icons/fa';

import styles from './Social.module.scss';

function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a
          href="https://www.pinterest.com/"
          aria-label="pinterest"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          {/* <img
            src="./img/social/pinterest.png"
            alt="pinterest"
            width="36"
            height="36"
            className={styles.socialIcon}
          /> */}
          <FaPinterestP size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com"
          aria-label="facebook"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com"
          aria-label="instagram"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/"
          aria-label="youtube"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://vimeo.com/"
          aria-label="vimeo"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <FaVimeo size={30} />
        </a>
      </li>
    </ul>
  );
}

export default Social;

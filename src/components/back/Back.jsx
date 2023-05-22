import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './Back.module.scss';

const Back = ({ backLink }) => {
  return (
    <>
      <Link to={backLink} className={styles.link}>
        <IoMdArrowRoundBack className={styles.svg} size={16} />
        Go back
      </Link>
    </>
  );
};

export default Back;

Back.propTypes = {
  backLink: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    hash: PropTypes.string,
    state: PropTypes.bool,
  }).isRequired,
};

import Modal from 'components/modal';
import Button from 'components/button/Button';
import styles from './StopModal.module.scss';

function StopModal({ showStopModal }) {
  return (
    <Modal variant="stopModal" closeModal={() => showStopModal(true)}>
      <div className={styles.popUpText}>
        <p>
          Our website only provides entertaining social games, with no
          real-money gambling or betting. The content is aimed at adults over
          the age of 18.
        </p>
        <p>Do you want to continue?</p>
      </div>
      <div className={styles.popUpButtons}>
        <Button title={'YES'} onClick={() => showStopModal(false)}></Button>
        <Button
          variant="btnNo"
          title={'NO'}
          onClick={() => showStopModal(true)}
        ></Button>
      </div>
    </Modal>
  );
}

export default StopModal;

import Modal from 'components/modal';
import Button from 'components/button/Button';
import styles from './StopModal.module.scss';

function StopModal({ showStopModal }) {
  return (
    <Modal variant="stopModal" closeModal={() => showStopModal(true)}>
      <div className={styles.popUpText}>
        <p>
          Please be aware that this website only provides free social games for
          recreational purposes and does not allow any form of real-money
          gambling or betting. The content on this platform is only intended for
          people who are at least 18 years old.
        </p>
        <p>Do you want to continue using our extensive range of services?</p>
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

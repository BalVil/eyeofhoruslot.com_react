import { GrFormClose } from 'react-icons/gr';
import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import styles from './GameModal.module.scss';

function GameModal({ showGame }) {
  return (
    <Modal variant="gameModal" closeModal={showGame}>
      <ButtonClose
        aria-label={'close'}
        type={'button'}
        onClick={() => showGame(false)}
      >
        <GrFormClose size={40} />
      </ButtonClose>

      <iframe
        className={styles.iframe}
        title="Game"
        sandbox="allow-same-origin allow-scripts"
        allow="autoplay; fullscreen; screen-wake-lock"
        src="https://asccw.playngonetwork.com/casino/ContainerLauncher?pid=2&gid=coltlightning&lang=en_GB&practice=1&channel=desktop&demo=2"
      ></iframe>
    </Modal>
  );
}

export default GameModal;

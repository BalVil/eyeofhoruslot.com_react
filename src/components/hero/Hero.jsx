import Container from 'components/container/Container';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <section>
      <Container>
        <h1 className={styles.heroTitle}>
          Join in a free social gaming experience
        </h1>
        <div>
          <img
            src="./assets/img/game.jpg"
            alt="Lucky Joker 100 poster"
            width="1280"
            height="960"
            className={styles.gameImg}
          />
        </div>
        <div>
          <button type="button" className={styles.btn} data-modal-open4>
            Play
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

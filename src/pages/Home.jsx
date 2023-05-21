import React from 'react';

import Hero from 'components/hero/Hero';
import styles from 'components/container/Container.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      {/* {movies && <MovieList movies={movies} titlePage={'Trending today'} />} */}
      <Hero />
    </div>
  );
}

export default Home;

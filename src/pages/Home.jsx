import React, { useState } from 'react';

import StopModal from 'components/stopModal/StopModal';
import Hero from 'components/hero/Hero';
import Footer from 'components/footer';
import Cookies from 'components/coockies/Cookies';

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && <StopModal setIsOpen={setIsOpen} />}
      <main>
        <Hero />
      </main>
      <Footer />
      {isOpen && <Cookies setIsOpen={setIsOpen} />}
    </>
  );
}

export default Home;

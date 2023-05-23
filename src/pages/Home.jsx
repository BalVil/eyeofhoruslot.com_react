import React, { useState } from 'react';

import Hero from 'components/hero/Hero';
import Footer from 'components/footer';
import Cookies from 'components/coockies/Cookies';

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <main>
        <Hero />
      </main>
      <Footer />
      {isOpen && <Cookies setIsOpen={setIsOpen} />}
    </>
  );
}

export default Home;

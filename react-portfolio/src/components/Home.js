import React from 'react';
import '../App.css';

import Navbar from './Navbar';
import Header from './Header';
import Introduce from './Introduce';
import Skills from './Skills';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Introduce />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Introduce from './components/Introduce';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Introduce />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

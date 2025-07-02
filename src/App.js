// App.js (Single Page Application Layout)
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

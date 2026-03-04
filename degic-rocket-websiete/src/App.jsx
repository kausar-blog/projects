import './App.css';
import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';
import Slider from './Components/Slider';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Slider />
    </>
  );
}

export default App;

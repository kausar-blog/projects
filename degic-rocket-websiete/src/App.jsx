import './App.css';
import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';
import Slider from './Components/Slider';
import Video from './Components/Video';
import Time from './Components/Time';
import PresentationCTA from './Components/BombArea';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Slider />
      <Video />
      <Time />
      <PresentationCTA />
    </>
  );
}

export default App;

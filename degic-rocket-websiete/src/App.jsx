import './App.css';
import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';
import Slider from './Components/Slider';
import Video from './Components/Video';
import Time from './Components/Time';
import PresentationCTA from './Components/BombArea';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

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
      <Blog />
      <Footer />
    </>
  );
}

export default App;

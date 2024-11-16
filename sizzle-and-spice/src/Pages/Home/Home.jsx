import React from 'react'
import About from './About'
import Hero from './Hero'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div className="Home-section">
      <Hero />
      <About />
      <Reviews />
    </div>
  );
}

export default Home
import React from 'react';
import {Link} from "react-router-dom";
import "./hero.css"
function Hero() {
  return (
    <section className="herosection">
      <div className="hero-textbox">
        <h2 className="hero-maintitle">Welcome to sizzle & spice</h2>
        <p className="hero-subtitle">"Fast. Fresh. Flavorful." </p>
        <div className="button-holder">
          <Link to="/Signup">
            <button className="button">Sign up</button>
          </Link>
          <Link to="/Login">
            <button className="button">Log in</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero
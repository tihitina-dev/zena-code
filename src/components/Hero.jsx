import React from 'react';
import '../styles.css';
import heroImage from '../assets/zenaC.jpg';


const Hero = () => (
  <section className="hero-centered">
    <img src={heroImage} alt="ZenaCode team" className="hero-centered-img" />
    <h2 className="hero-centered-title">Building Smart Software for Africa and Beyond</h2>
    <p className="hero-centered-subtitle">
      We help businesses unlock digital transformation through powerful, scalable software and technology solutions.
    </p>
    <a href="#contact" className="hero-centered-button">Request a Quote</a>
  </section>
);

export default Hero;

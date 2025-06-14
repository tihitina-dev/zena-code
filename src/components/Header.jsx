import React from 'react';
import '../styles.css';
import logo from '../assets/logo.png';

const Header = () => (
  <header>
  <h1 className="logo">ZenaCode</h1>

    <nav>
          <a href="#" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
    </nav>

</header>
);

export default Header;

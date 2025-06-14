import React from 'react';
import '../styles.css';

const Products = () => (
  <section id="products" className="products-section">
    <h2 className="section-heading">Featured Products</h2>
    <div className="card-grid">
      <div className="card">
        <h3>ZenaPOS</h3>
        <p>A smart, cloud-based Point of Sale system built for Ethiopian SMEs and retailers.</p>
      </div>
      <div className="card">
        <h3>ZenaLearn</h3>
        <p>A digital learning platform offering localized courses and skill-building for African youth.</p>
      </div>
      <div className="card">
        <h3>ZenaChat</h3>
        <p>An AI-powered customer support chatbot with Amharic and English support capabilities.</p>
      </div>
    </div>
  </section>
);

export default Products;

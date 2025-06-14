import React from 'react';
import '../styles.css';

const Services = () => (
  <section id="services" className="services-section">
    <h2 className="section-heading">Our Services</h2>
    <div className="card-grid">
      <div className="card">
        <h3>Custom Software Development</h3>
        <p>We design and develop mobile, web, and enterprise apps tailored to your business needs.</p>
      </div>
      <div className="card">
        <h3>Cloud & DevOps Solutions</h3>
        <p>Deploy, scale, and secure your applications with modern cloud technologies.</p>
      </div>
      <div className="card">
        <h3>AI & Automation</h3>
        <p>Implement AI-driven tools to optimize workflows and automate business processes.</p>
      </div>
    </div>
  </section>
);

export default Services;

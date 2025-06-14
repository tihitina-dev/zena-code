import React from 'react';
import '../styles.css';

const Columns = () => (
  <section className="columns">
    <div className="column" id="services">
      <img src="https://via.placeholder.com/150" alt="Services" />
      <h3>SERVICES</h3>
      <p>We provide full-stack software development, AI solutions, and digital transformation tools.</p>
    </div>
    <div className="column" id="blog">
      <img src="https://via.placeholder.com/150" alt="Blog" />
      <h3>ZENACODE BLOG</h3>
      <p>Insights on AI, software, startups, and success stories from Ethiopia and beyond.</p>
    </div>
    <div className="column" id="news">
      <img src="https://via.placeholder.com/150" alt="News" />
      <h3>LATEST NEWS</h3>
      <p>Follow our latest launches, partnerships, and community engagements.</p>
    </div>
    <div className="column" id="partners">
      <img src="https://via.placeholder.com/150" alt="Partners" />
      <h3>PARTNERS</h3>
      <p>We collaborate with top global and local organizations in AI and innovation.</p>
    </div>
  </section>
);

export default Columns;

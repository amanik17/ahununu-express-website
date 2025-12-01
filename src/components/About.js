import React from 'react';

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">About Ahununu Express</h1>
        <div className="grid grid-2">
          <div className="card">
            <h3>Our Story</h3>
            <p>Ahununu Express has been Ethiopia's trusted logistics partner for over a decade, providing reliable express delivery services across the country. We pride ourselves on connecting businesses and individuals through our comprehensive network spanning from Addis Ababa to remote regions.</p>
          </div>
          <div className="card">
            <h3>Our Mission</h3>
            <p>To be the leading express service provider in Ethiopia, delivering excellence through innovation, reliability, and customer satisfaction while supporting the country's economic growth and development.</p>
          </div>
          <div className="card">
            <h3>Core Values</h3>
            <ul>
              <li>✓ Reliability & Trust</li>
              <li>✓ Customer First</li>
              <li>✓ Innovation</li>
              <li>✓ Integrity</li>
              <li>✓ Cultural Respect</li>
            </ul>
          </div>
          <div className="card">
            <h3>Our Network</h3>
            <p>With distribution centers in over 85 cities across Ethiopia and a fleet of modern vehicles adapted for diverse terrains, we ensure your packages reach their destination safely and on time, from urban centers to rural communities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

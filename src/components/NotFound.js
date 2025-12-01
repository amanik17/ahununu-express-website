import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h1 className="section-title">Page Not Found</h1>
        <p style={{ marginTop: '0.5rem' }}>We couldn't find the page you're looking for.</p>
        <p style={{ marginTop: '1rem' }}>
          <Link className="btn btn-primary" to="/">Go to Home</Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound; 
import React from 'react';

const News = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">News & Resources</h1>
        <div className="grid grid-2">
          <div className="card">
            <h3>Latest News</h3>
            <div style={{ marginBottom: '1rem' }}>
              <h4>New Lagos Distribution Center Opens</h4>
              <p>We've expanded our capacity with a new 50,000 sq ft facility...</p>
            </div>
            <div>
              <h4>Express Delivery Now Available 24/7</h4>
              <p>Round-the-clock service for urgent deliveries...</p>
            </div>
          </div>
          <div className="card">
            <h3>Frequently Asked Questions</h3>
            <div>
              <h4>How do I track my package?</h4>
              <p>Use our tracking tool with your tracking number.</p>
            </div>
            <div>
              <h4>What are your delivery times?</h4>
              <p>Standard: 2-3 days, Express: Next day delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

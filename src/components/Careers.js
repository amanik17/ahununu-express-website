import React from 'react';

const Careers = () => {
  const jobs = [
    { title: 'Delivery Driver', location: 'Addis Ababa', type: 'Full-time' },
    { title: 'Logistics Coordinator', location: 'Gonder', type: 'Full-time' },
    { title: 'Customer Service Rep', location: 'Bahir Dar', type: 'Part-time' }
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Join Our Team</h1>
        <p className="section-subtitle">Build your career with Ethiopia's leading express delivery service</p>
        <div className="grid grid-3">
          {jobs.map((job, index) => (
            <div key={index} className="card">
              <h3>{job.title}</h3>
              <p>📍 {job.location}</p>
              <p>⏰ {job.type}</p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;

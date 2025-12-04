import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <div className="grid grid-2">
          <div className="card">
            <h3>Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-textarea"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="card">
            <h3>Contact Information</h3>
            <div style={{ lineHeight: '2' }}>
              <p>📞 <strong>Phone:</strong> +251 970 025656</p>
              <p>📧 <strong>Email:</strong> info@ahununuexpress.com</p>
              <p>📍 <strong>Address:</strong> 22 golagol, Addis Ababa, Ethiopia</p>
              <p>🕒 <strong>Hours:</strong> Mon-Sat 8:30AM-7PM, Sun 8:30AM-12:30PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

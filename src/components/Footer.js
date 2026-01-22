import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, setConsent, initAnalytics } from '../utils/analytics';

const Footer = () => {
  const linkStyle = {
    color: '#C7EA46',
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  };

  const [consent, setConsentState] = useState(getConsent());
  useEffect(() => { initAnalytics(); }, []);

  return (
    <footer style={{ 
      background: 'var(--text-dark)', 
      color: 'white', 
      padding: '3rem 0 1rem',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div className="grid grid-4">
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img src="/assets/logo_footer.png" alt="Ahununu Logistics Logo" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <p>Your trusted express service provider across Ethiopia.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li><Link to="/services" style={linkStyle}>Road Freight</Link></li>
              <li><Link to="/services" style={linkStyle}>Air Freight</Link></li>
              <li><Link to="/services" style={linkStyle}>Last Mile</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li><Link to="/about" style={linkStyle}>About Us</Link></li>
              <li><Link to="/careers" style={linkStyle}>Careers</Link></li>
              <li><Link to="/news" style={linkStyle}>News</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul style={{ listStyle: 'none', lineHeight: '1.6' }}>
              <li><Link to="/tracking" style={linkStyle}>Track Package</Link></li>
              <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
              <li><Link to="/quote" style={linkStyle}>Get Quote</Link></li>
              <li style={{ marginTop: '0.5rem' }}>
                <a href="tel:+251970025656" style={linkStyle}>+251 970 025656</a>
              </li>
              <li>
                <a href="tel:+251953563356" style={linkStyle}>+251 953 563356</a>
              </li>
              <li>
                <a href="tel:8414" style={{ ...linkStyle, fontWeight: 'bold' }}>8414</a>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <a href="https://maps.app.goo.gl/cFxkaWWpgfkZPTFv8" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  22 Golagol, Addis Ababa Ethiopia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ opacity: 0.9 }}>
            <small>Analytics: </small>
            <button
              className="btn btn-outline"
              onClick={() => { setConsent(true); setConsentState(true); }}
              disabled={consent}
            >
              Allow
            </button>
            <button
              className="btn btn-outline"
              onClick={() => { setConsent(false); setConsentState(false); }}
              disabled={!consent}
              style={{ marginLeft: '0.5rem' }}
            >
              Deny
            </button>
          </div>

          <div style={{ 
            borderTop: '1px solid #475569', 
            paddingTop: '2rem', 
            textAlign: 'center',
            width: '100%'
          }}>
            <p>&copy; 2025 Ahununu Express. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

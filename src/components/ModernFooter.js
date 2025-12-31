import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModernFooter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const footerLinks = {
    services: [
      { label: 'Road Freight', href: '#' },
      { label: 'Air Freight', href: '#' },
      { label: 'Warehousing', href: '#' },
      { label: 'Last Mile Delivery', href: '#' },
      { label: 'Medical Express', href: '#' },
      { label: 'B2B Solutions', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News & Press', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    support: [
      { label: 'Track Package', href: '#' },
      { label: 'Get Quote', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Shipping Guide', href: '#' },
      { label: 'Claims', href: '#' },
      { label: 'Feedback', href: '#' }
    ],
    legal: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: '📘', label: 'Facebook', href: '#', color: '#1877F2' },
    { icon: '🐦', label: 'Twitter', href: '#', color: '#1DA1F2' },
    { icon: '💼', label: 'LinkedIn', href: '#', color: '#0A66C2' },
    { icon: '📸', label: 'Instagram', href: '#', color: '#E4405F' },
    { icon: '📱', label: 'TikTok', href: '#', color: '#000000' },
    { icon: '▶️', label: 'YouTube', href: '#', color: '#FF0000' }
  ];

  return (
    <footer style={{
      background: '#1e293b',
      color: 'white',
      paddingTop: '4rem'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Newsletter Section */}
        <div style={{
          background: 'linear-gradient(135deg, #7fba42 0%, #6ba036 100%)',
          borderRadius: '24px',
          padding: '3rem',
          marginBottom: '4rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />

          <div style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 800,
                marginBottom: '0.5rem'
              }}>
                📬 Stay Updated
              </h3>
              <p style={{
                fontSize: '1.1rem',
                opacity: 0.95,
                lineHeight: 1.6
              }}>
                Subscribe to our newsletter for exclusive deals, shipping tips, and company updates.
              </p>
            </div>

            <div>
              {!subscribed ? (
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{
                      flex: 1,
                      minWidth: '200px',
                      padding: '1rem 1.5rem',
                      fontSize: '1rem',
                      border: 'none',
                      borderRadius: '12px',
                      outline: 'none'
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubscribe}
                    style={{
                      padding: '1rem 2rem',
                      background: 'white',
                      color: '#7fba42',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Subscribe →
                  </motion.button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>✅</span>
                  <span style={{ fontWeight: 600 }}>
                    Thanks for subscribing! Check your inbox.
                  </span>
                </motion.div>
              )}
              <p style={{
                fontSize: '0.85rem',
                marginTop: '0.75rem',
                opacity: 0.8
              }}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid #334155'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              marginBottom: '1.5rem',
            }}>
              <img src="/assets/logo_footer.png" alt="Ahununu Logistics Logo" style={{ height: '60px', objectFit: 'contain' }} />
            </div>
            <p style={{
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Ethiopia's trusted logistics partner, delivering excellence across 85+ cities with speed, security, and reliability.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'white'
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.services.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#7fba42'}
                    onMouseOut={(e) => e.target.style.color = '#94a3b8'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'white'
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.company.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#7fba42'}
                    onMouseOut={(e) => e.target.style.color = '#94a3b8'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'white'
            }}>
              Support
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.support.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#7fba42'}
                    onMouseOut={(e) => e.target.style.color = '#94a3b8'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '2rem 0',
          borderBottom: '1px solid #334155'
        }}>
          <div>
            <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#cbd5e1' }}>
              📞 Call Us
            </h5>
            <p style={{ color: '#94a3b8', marginBottom: '0.25rem' }}>
              <a href="tel:+251970025656" style={{ color: '#7fba42', textDecoration: 'none', display: 'block' }}>
                +251 970 025656
              </a>
              <a href="tel:+251953563356" style={{ color: '#7fba42', textDecoration: 'none', display: 'block' }}>
                +251 953 563356
              </a>
              <a href="tel:8414" style={{ color: '#7fba42', textDecoration: 'none', display: 'block', fontWeight: 'bold' }}>
                Short Code: 8414
              </a>
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Mon-Sat: 8AM-6PM, Sun: 9AM-2PM</p>
          </div>

          <div>
            <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#cbd5e1' }}>
              📧 Email Us
            </h5>
            <p style={{ color: '#94a3b8', marginBottom: '0.25rem' }}>
              <a href="mailto:info@ahununuexpress.com" style={{ color: '#7fba42', textDecoration: 'none' }}>
                info@ahununuexpress.com
              </a>
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>We reply within 24 hours</p>
          </div>

          <div>
            <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#cbd5e1' }}>
              📍 Visit Us
            </h5>
            <p style={{ color: '#94a3b8', marginBottom: '0.25rem' }}>
              <a href="https://maps.app.goo.gl/cFxkaWWpgfkZPTFv8" target="_blank" rel="noopener noreferrer" style={{ color: '#7fba42', textDecoration: 'none' }}>
                22 Golagol, Addis Ababa Ethiopia
              </a>
            </p>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 0',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#334155',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  border: '1px solid #475569',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = social.color;
                  e.currentTarget.style.borderColor = social.color;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#334155';
                  e.currentTarget.style.borderColor = '#475569';
                }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            fontSize: '0.9rem'
          }}>
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#7fba42'}
                onMouseOut={(e) => e.target.style.color = '#94a3b8'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          textAlign: 'center',
          color: '#94a3b8',
          fontSize: '0.9rem'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            © {new Date().getFullYear()} Ahununu Express. All rights reserved.
          </p>
          <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>
            Made with 💚 in Ethiopia | Proudly serving 85+ cities nationwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter; 

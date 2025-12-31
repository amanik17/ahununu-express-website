 import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RefinedHero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [activeTab, setActiveTab] = useState('speed');
  
  const features = [
    { icon: '⚡', text: 'Fast & Reliable Delivery', color: '#7fba42' },
    { icon: '📍', text: 'Real-time Tracking', color: '#4A90E2' },
    { icon: '💰', text: 'Affordable Pricing', color: '#F5A623' },
    { icon: '🏆', text: '24/7 Customer Support', color: '#E94F64' }
  ];

  const stats = [
    { number: '15,000+', label: 'Deliveries Monthly', icon: '📦', color: '#7fba42' },
    { number: '98%', label: 'On-Time Delivery', icon: '⏱️', color: '#4A90E2' },
    { number: '85+', label: 'Cities Covered', icon: '🌍', color: '#F5A623' },
    { number: '24/7', label: 'Customer Support', icon: '💬', color: '#E94F64' }
  ];

  const services = [
    {
      id: 'speed',
      icon: '🚀',
      title: 'Express Delivery',
      description: 'Same-day and next-day delivery options across Ethiopia',
      highlights: ['1-2 Day Delivery', 'Priority Handling', 'Real-time Updates']
    },
    {
      id: 'reliability',
      icon: '🛡️',
      title: 'Secure Transport',
      description: 'Advanced security measures to protect your shipments',
      highlights: ['GPS Tracking', 'Insurance Coverage', 'Trained Handlers']
    },
    {
      id: 'coverage',
      icon: '🗺️',
      title: 'Nationwide Network',
      description: 'Reaching every corner of Ethiopia with our extensive network',
      highlights: ['85+ Cities', 'Remote Areas', 'Door-to-Door']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partners = [
    { name: 'DHL', logo: 'https://logo.clearbit.com/dhl.com' },
    { name: 'FedEx', logo: 'https://logo.clearbit.com/fedex.com' },
    { name: 'UPS', logo: 'https://logo.clearbit.com/ups.com' },
    { name: 'Ethiopian Airlines', logo: 'https://logo.clearbit.com/ethiopianairlines.com' },
    { name: 'CBE', logo: 'https://logo.clearbit.com/combanketh.et' },
    // Duplicate for seamless loop
    { name: 'DHL', logo: 'https://logo.clearbit.com/dhl.com' },
    { name: 'FedEx', logo: 'https://logo.clearbit.com/fedex.com' },
    { name: 'UPS', logo: 'https://logo.clearbit.com/ups.com' },
    { name: 'Ethiopian Airlines', logo: 'https://logo.clearbit.com/ethiopianairlines.com' },
    { name: 'CBE', logo: 'https://logo.clearbit.com/combanketh.et' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        pointerEvents: 'none'
      }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * window.innerWidth, y: -50 }}
            animate={{
              y: window.innerHeight + 50,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              position: 'absolute',
              fontSize: '2rem',
              opacity: 0.3
            }}
          >
            📦
          </motion.div>
        ))}
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '6rem 2rem 4rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main Hero Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(127, 186, 66, 0.1)',
                color: '#7fba42',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                border: '1px solid rgba(127, 186, 66, 0.2)'
              }}
            >
              <span>✨</span>
              Ethiopia's #1 Express Service
            </motion.div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: '#334155'
            }}>
              Your <span style={{
                background: 'linear-gradient(135deg, #7fba42 0%, #6ba036 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Trusted Express</span>
              <br />Service Provider
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Fast, reliable, and affordable delivery services across Ethiopia. From Addis Ababa to every corner of the nation.
            </p>

            {/* Rotating Features */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  marginBottom: '2rem',
                  border: `2px solid ${features[currentFeature].color}20`
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{features[currentFeature].icon}</span>
                <span style={{
                  fontWeight: 600,
                  color: features[currentFeature].color,
                  fontSize: '1.05rem'
                }}>
                  {features[currentFeature].text}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(127, 186, 66, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('quote')}
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #7fba42 0%, #6ba036 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 12px rgba(127, 186, 66, 0.3)'
                }}
              >
                Get Instant Quote
                <span>→</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('tracking')}
                style={{
                  padding: '1rem 2rem',
                  background: 'white',
                  color: '#7fba42',
                  border: '2px solid #7fba42',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>📍</span>
                Track Shipment
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              paddingTop: '1rem',
              borderTop: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  display: 'flex',
                  marginRight: '0.5rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#F5A623', fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
                  4.9/5 from 2,000+ reviews
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>✅</span>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
                  ISO 9001 Certified
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              {/* Tab Navigation */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                borderBottom: '2px solid #f1f5f9',
                paddingBottom: '1rem'
              }}>
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      background: activeTab === service.id ? 'linear-gradient(135deg, #7fba42 0%, #6ba036 100%)' : 'transparent',
                      color: activeTab === service.id ? 'white' : '#64748b',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{service.icon}</span>
                    <span style={{ fontSize: '0.75rem' }}>
                      {service.title.split(' ')[0]}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {services.map((service) => (
                  activeTab === service.id && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={{
                        textAlign: 'center',
                        marginBottom: '1.5rem'
                      }}>
                        <span style={{ fontSize: '4rem', marginBottom: '1rem', display: 'block' }}>
                          {service.icon}
                        </span>
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: '#334155',
                          marginBottom: '0.5rem'
                        }}>
                          {service.title}
                        </h3>
                        <p style={{
                          color: '#64748b',
                          lineHeight: 1.6
                        }}>
                          {service.description}
                        </p>
                      </div>

                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}>
                        {service.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                              padding: '0.75rem',
                              background: '#f8fafc',
                              borderRadius: '8px',
                              border: '1px solid #e2e8f0'
                            }}
                          >
                            <div style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: '#7fba42',
                              flexShrink: 0
                            }} />
                            <span style={{
                              fontSize: '0.95rem',
                              color: '#334155',
                              fontWeight: 500
                            }}>
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            padding: '3rem 0'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                style={{
                  fontSize: '3rem',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}
              >
                {stat.icon}
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: stat.color,
                  marginBottom: '0.5rem'
                }}
              >
                {stat.number}
              </motion.div>
              <div style={{
                color: '#64748b',
                fontWeight: 500,
                fontSize: '0.95rem'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Slider Section */}
        <div style={{
          width: '100%',
          overflow: 'hidden',
          padding: '2rem 0',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '16px',
          marginTop: '2rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            color: '#64748b',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Trusted By Leading Companies
          </div>
          <div style={{
            display: 'flex',
            width: '200%',
            animation: 'scroll 20s linear infinite',
          }}>
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              alignItems: 'center'
            }}>
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    height: '40px',
                    filter: 'grayscale(100%)',
                    opacity: 0.6,
                    margin: '0 2rem'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '3rem',
            opacity: 0.6
          }}
        >
          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Scroll to explore</span>
          <div style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, #7fba42, transparent)',
            borderRadius: '2px'
          }} />
        </motion.div>
      </div>
    </div>
  );
};

export default RefinedHero;

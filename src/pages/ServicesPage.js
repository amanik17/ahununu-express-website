import React from 'react';
import { motion } from 'framer-motion';
import Enhanced3DScene from '../components/Enhanced3DScene';
import InteractiveServicesGrid from '../components/InteractiveServiceCard';

// Updated color scheme
const colors = {
  primary: '#2C3E50',      // Dark Blue
  secondary: '#E94F64',    // Coral Red
  accent1: '#4A90E2',      // Blue
  accent2: '#7FBA42',      // Green
  accent3: '#F5A623',      // Orange
  lightBg: '#F8F9FA',
  darkText: '#2C3E50',
  lightText: '#6C757D'
};

const ServicesPage = () => {
  return (
    <div className="services-page" style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2rem',
      paddingTop: '6rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '4rem',
          padding: '0 1rem'
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '3.2rem',
            fontWeight: 800,
            marginBottom: '1rem',
            background: `linear-gradient(45deg, ${colors.secondary}, ${colors.accent1})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            lineHeight: 1.2
          }}
        >
          Global Logistics
          <motion.span 
            style={{
              display: 'block',
              fontSize: '1.2rem',
              marginTop: '0.5rem',
              background: `linear-gradient(45deg, ${colors.accent3}, ${colors.accent2})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 500
            }}
          >
            Connecting the World's Supply Chains
          </motion.span>
        </motion.h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Discover our comprehensive range of logistics services designed to meet your business needs.
          Interactive 3D visualization and real-time tracking for complete transparency.
        </p>
      </motion.div>

      {/* 3D Scene Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        style={{
          marginBottom: '6rem',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: `0 20px 40px ${colors.accent1}20`,
          border: `1px solid ${colors.accent1}20`
        }}
      >
        <div style={{
          padding: '3rem 2rem',
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.darkText} 100%)`,
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            transform: 'rotate(15deg)'
          }} />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block'
            }}
          >
            Interactive 3D Logistics Network
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, ${colors.accent2}, ${colors.accent1})`,
                borderRadius: '2px'
              }}
            />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              maxWidth: '700px',
              margin: '0 auto 1.5rem',
              lineHeight: 1.7,
              fontSize: '1.1rem',
              opacity: 0.9
            }}
          >
            Explore our global logistics network in stunning 3D. Interact with our fleet of cargo planes and ships, 
            track shipments in real-time, and discover how we connect the world's supply chains.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: colors.accent1,
                marginRight: '8px',
                boxShadow: `0 0 10px ${colors.accent1}`
              }} />
              <span>Air Freight</span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: colors.accent2,
                marginRight: '8px',
                boxShadow: `0 0 10px ${colors.accent2}`
              }} />
              <span>Ocean Shipping</span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: colors.accent3,
                marginRight: '8px',
                boxShadow: `0 0 10px ${colors.accent3}`
              }} />
              <span>Ground Transport</span>
            </div>
          </motion.div>
        </div>
        
        <Enhanced3DScene />
      </motion.section>

      {/* Interactive Services */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{
          margin: '6rem 0',
          position: 'relative'
        }}
      >
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              color: colors.accent1,
              fontWeight: 600,
              letterSpacing: '2px',
              fontSize: '0.9rem',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: '2.8rem',
              fontWeight: 800,
              marginBottom: '1rem',
              background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              lineHeight: 1.2
            }}
          >
            Comprehensive Logistics Solutions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: colors.darkText
            }}
          >
            We provide end-to-end logistics solutions tailored to your business needs, 
            ensuring seamless transportation and delivery across the globe.
          </motion.p>
        </div>
        <InteractiveServicesGrid />
        </motion.section>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.darkText} 100%)`,
          borderRadius: '24px',
          padding: '5rem 2rem',
          margin: '8rem 0',
          color: 'white',
          textAlign: 'center',
          boxShadow: `0 20px 50px ${colors.primary}20`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <h2 style={{
            fontSize: '2.8rem',
            marginBottom: '1.5rem',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            Ready to Transform Your 
            <span style={{
              display: 'block',
              background: `linear-gradient(90deg, ${colors.accent2}, ${colors.accent1})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginTop: '0.5rem'
            }}>Logistics Operations?</span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
            opacity: 0.9,
            fontSize: '1.25rem'
          }}>
            Join hundreds of businesses that trust us with their supply chain needs.
            Get a free consultation and see how we can optimize your logistics operations
            with our cutting-edge technology and global network.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 10px 25px ${colors.accent1}40`,
                transform: 'translateY(-2px)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: `linear-gradient(45deg, ${colors.accent1}, ${colors.accent2})`,
                color: 'white',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: `0 5px 15px ${colors.accent1}40`,
                transition: 'all 0.3s ease',
                minWidth: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <span>Get Started Today</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateY(-2px)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 500,
                cursor: 'pointer',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease',
                minWidth: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9.00002C9.3251 8.33169 9.78915 7.76813 10.4 7.40915C11.0108 7.05018 11.7289 6.91894 12.4272 7.03873C13.1255 7.15851 13.7588 7.52154 14.2151 8.06355C14.6713 8.60555 14.9211 9.29155 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Learn More</span>
            </motion.button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              marginTop: '3rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              opacity: 0.8,
              fontSize: '0.9rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: colors.accent1,
                boxShadow: `0 0 10px ${colors.accent1}`
              }} />
              <span>24/7 Customer Support</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: colors.accent2,
                boxShadow: `0 0 10px ${colors.accent2}`
              }} />
              <span>Global Network</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: colors.accent3,
                boxShadow: `0 0 10px ${colors.accent3}`
              }} />
              <span>Real-time Tracking</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const serviceData = [
  {
    id: 1,
    title: 'Express Delivery',
    description: 'Fast and reliable delivery services to meet your urgent shipping needs.',
    icon: '🚚',
    color: '#7FBA42',
    features: ['24/7 Tracking', 'Same Day Delivery', 'Real-time Updates']
  },
  {
    id: 2,
    title: 'Global Shipping',
    description: 'Worldwide logistics solutions for your international shipping requirements.',
    icon: '🌍',
    color: '#4A90E2',
    features: ['Customs Clearance', 'Air & Sea Freight', 'Global Network']
  },
  {
    id: 3,
    title: 'Warehouse Solutions',
    description: 'Secure and efficient storage solutions for businesses of all sizes.',
    icon: '🏭',
    color: '#F5A623',
    features: ['Climate Control', 'Inventory Management', 'Pick & Pack']
  }
];

const InteractiveServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const controls = useAnimation();
  const cardRef = useRef(null);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      y: -10,
      scale: 1.03,
      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
      transition: { duration: 0.3 }
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    if (!isTapped) {
      controls.start({
        y: 0,
        scale: 1,
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
      });
    }
  };

  const handleTap = () => {
    setIsTapped(!isTapped);
    controls.start({
      y: isTapped ? 0 : -10,
      scale: isTapped ? 1 : 1.03,
      boxShadow: isTapped 
        ? '0 5px 15px rgba(0,0,0,0.1)' 
        : '0 15px 30px rgba(0,0,0,0.15)',
      transition: { duration: 0.3 }
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="service-card"
      initial={{ y: 0, scale: 1, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTap={handleTap}
      whileTap={{ scale: 0.98 }}
      style={{
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: '16px',
        padding: '2rem',
        cursor: 'pointer',
        overflow: 'hidden',
        height: isTapped ? 'auto' : '300px',
        transition: 'height 0.3s ease',
        border: `2px solid ${service.color}20`,
        zIndex: 1
      }}
    >
      {/* Animated Background */}
      <motion.div 
        className="card-bg"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered || isTapped ? 0.05 : 0,
          scale: isHovered || isTapped ? 1.2 : 1
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`,
          zIndex: -1,
          transition: 'opacity 0.3s ease, transform 0.5s ease'
        }}
      />

      {/* Icon */}
      <motion.div 
        className="card-icon"
        animate={{
          y: isHovered || isTapped ? -5 : 0,
          rotate: isHovered || isTapped ? [0, -5, 5, 0] : 0,
        }}
        transition={{
          y: { duration: 0.3 },
          rotate: { 
            duration: 0.5,
            repeat: isHovered || isTapped ? 1 : 0,
            repeatType: 'reverse'
          }
        }}
        style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          display: 'inline-block',
          transformOrigin: 'center bottom'
        }}
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <motion.h3 
        style={{
          color: service.color,
          marginBottom: '1rem',
          position: 'relative',
          display: 'inline-block'
        }}
      >
        {service.title}
        <motion.span 
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: isHovered || isTapped ? 1 : 0,
            opacity: isHovered || isTapped ? 1 : 0.5
          }}
          style={{
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: service.color,
            transformOrigin: 'left center',
            borderRadius: '2px'
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.h3>

      {/* Description */}
      <motion.p 
        style={{
          color: '#666',
          marginBottom: '1.5rem',
          lineHeight: 1.6,
          opacity: isTapped ? 1 : 0.9,
          transform: isTapped ? 'translateY(0)' : 'none',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        {service.description}
      </motion.p>

      {/* Features */}
      <AnimatePresence>
        {(isHovered || isTapped) && (
          <motion.ul 
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { 
                opacity: { delay: 0.1 },
                height: { duration: 0.3 }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                opacity: { duration: 0.1 },
                height: { delay: 0.1, duration: 0.3 }
              }
            }}
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '1rem 0 0',
              overflow: 'hidden'
            }}
          >
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.1 + (index * 0.1),
                    duration: 0.3
                  }
                }}
                exit={{ 
                  x: -20, 
                  opacity: 0,
                  transition: { 
                    delay: index * 0.05,
                    duration: 0.2
                  }
                }}
                style={{
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#444',
                  fontSize: '0.95rem'
                }}
              >
                <span style={{ 
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  backgroundColor: service.color,
                  borderRadius: '50%',
                  marginRight: '10px',
                  flexShrink: 0
                }} />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* CTA Button */}
      <motion.div 
        className="card-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isHovered || isTapped ? 1 : 0,
          y: isHovered || isTapped ? 0 : 20,
          pointerEvents: isHovered || isTapped ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3, delay: isHovered || isTapped ? 0.2 : 0 }}
        style={{
          marginTop: '1.5rem',
          textAlign: 'center'
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: service.color,
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            boxShadow: `0 4px 15px ${service.color}40`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>Learn More</span>
          <motion.span 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(45deg, ${service.color}, ${service.color}cc)`,
              opacity: 0,
              zIndex: 0
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const InteractiveServicesGrid = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {serviceData.map(service => (
        <InteractiveServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default InteractiveServicesGrid;

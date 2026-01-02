 import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveServicesShowcase = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'road-freight',
      title: 'Road Freight',
      icon: '🚛',
      color: '#127A6A',
      gradient: 'linear-gradient(135deg, #127A6A 0%, #0e6356 100%)',
      tagline: 'Ground Transportation Excellence',
      description: 'Comprehensive ground transportation solutions for all your cargo needs across Ethiopia.',
      features: [
        'Full Truckload (FTL) & Less Than Truckload (LTL)',
        'Temperature-controlled transportation',
        'Oversized & heavy cargo handling',
        'Cross-docking services',
        'Real-time GPS tracking',
        'Flexible scheduling'
      ],
      benefits: [
        { icon: '⚡', text: 'Fast delivery within 24-48 hours' },
        { icon: '💰', text: 'Cost-effective bulk shipping' },
        { icon: '🔒', text: 'Secure cargo handling' }
      ],
      stats: [
        { value: '500+', label: 'Trucks' },
        { value: '85+', label: 'Cities' },
        { value: '99%', label: 'On-Time' }
      ]
    },
    {
      id: 'air-freight',
      title: 'Air Freight',
      icon: '✈️',
      color: '#4A90E2',
      gradient: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
      tagline: 'Express Air Cargo Solutions',
      description: 'Fast and reliable air cargo services for time-sensitive shipments across the globe.',
      features: [
        'Express & standard air freight',
        'International & domestic cargo',
        'Dangerous goods handling',
        'Charter flight arrangements',
        'Airport-to-airport service',
        'Customs clearance support'
      ],
      benefits: [
        { icon: '🚀', text: 'Fastest delivery option available' },
        { icon: '🌍', text: 'Global network coverage' },
        { icon: '📋', text: 'Full documentation support' }
      ],
      stats: [
        { value: '24hr', label: 'Express' },
        { value: '50+', label: 'Destinations' },
        { value: '100%', label: 'Tracked' }
      ]
    },
    {
      id: 'warehousing',
      title: 'Warehousing & Distribution',
      icon: '🏭',
      color: '#F5A623',
      gradient: 'linear-gradient(135deg, #F5A623 0%, #E09200 100%)',
      tagline: 'Secure Storage Solutions',
      description: 'State-of-the-art warehouse facilities with efficient distribution systems.',
      features: [
        'Climate-controlled facilities',
        'Inventory management system',
        'Pick, pack & fulfillment',
        'Cross-docking operations',
        'Value-added services',
        'E-commerce integration'
      ],
      benefits: [
        { icon: '📦', text: '50,000+ sq ft storage space' },
        { icon: '🔐', text: '24/7 security monitoring' },
        { icon: '📊', text: 'Real-time inventory tracking' }
      ],
      stats: [
        { value: '50K+', label: 'sq ft' },
        { value: '24/7', label: 'Access' },
        { value: '95%', label: 'Accuracy' }
      ]
    },
    {
      id: 'last-mile',
      title: 'Last-Mile Delivery',
      icon: '📦',
      color: '#E94F64',
      gradient: 'linear-gradient(135deg, #E94F64 0%, #D63851 100%)',
      tagline: 'Final Mile Excellence',
      description: 'Efficient final delivery to your customers doorsteps with care and precision.',
      features: [
        'Same-day & next-day delivery',
        'Residential & commercial',
        'Signature confirmation',
        'Flexible delivery windows',
        'Returns & reverse logistics',
        'White-glove delivery service'
      ],
      benefits: [
        { icon: '🏠', text: 'Door-to-door service' },
        { icon: '📸', text: 'Proof of delivery photos' },
        { icon: '⭐', text: '98% customer satisfaction' }
      ],
      stats: [
        { value: '15K+', label: 'Daily' },
        { value: '2hrs', label: 'Average' },
        { value: '98%', label: 'Success' }
      ]
    },
    {
      id: 'medical',
      title: 'Medical Express',
      icon: '🏥',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      tagline: 'Healthcare Logistics',
      description: 'Specialized medical and pharmaceutical logistics with certified cold chain management.',
      features: [
        'Temperature-sensitive transport',
        'Medical equipment delivery',
        'HIPAA-compliant handling',
        'Emergency medical transport',
        'Laboratory specimen delivery',
        'Medical waste handling'
      ],
      benefits: [
        { icon: '❄️', text: 'Cold chain certified' },
        { icon: '🚨', text: 'Emergency 24/7 service' },
        { icon: '✅', text: 'WHO compliance' }
      ],
      stats: [
        { value: '100%', label: 'Certified' },
        { value: '24/7', label: 'Available' },
        { value: '99.9%', label: 'Integrity' }
      ]
    },
    {
      id: 'contractual',
      title: 'Bid & Contractual Logistics',
      icon: '📋',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      tagline: 'Enterprise Solutions',
      description: 'Customized logistics solutions for large-scale operations and government contracts.',
      features: [
        'Government contract logistics',
        'Project-based solutions',
        'Dedicated fleet services',
        'Supply chain consulting',
        'Long-term partnerships',
        'Performance reporting'
      ],
      benefits: [
        { icon: '🤝', text: 'Dedicated account manager' },
        { icon: '📊', text: 'Custom reporting dashboard' },
        { icon: '💼', text: 'Enterprise pricing' }
      ],
      stats: [
        { value: '200+', label: 'Contracts' },
        { value: '5yrs', label: 'Avg Term' },
        { value: '99%', label: 'Renewal' }
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '6rem 2rem 4rem'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #127A6A 0%, #0e6356 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
          }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive logistics solutions tailored to meet your unique needs
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setSelectedService(service)}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: hoveredService === service.id 
                  ? `0 20px 60px ${service.color}40` 
                  : '0 10px 30px rgba(0,0,0,0.08)',
                border: `2px solid ${hoveredService === service.id ? service.color : '#e2e8f0'}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: `radial-gradient(circle, ${service.color}10 0%, transparent 70%)`,
                opacity: hoveredService === service.id ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: hoveredService === service.id ? 1.1 : 1,
                    rotate: hoveredService === service.id ? [0, -5, 5, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    background: service.gradient,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    boxShadow: `0 8px 24px ${service.color}40`
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '0.5rem'
                }}>
                  {service.title}
                </h3>

                {/* Tagline */}
                <p style={{
                  fontSize: '0.95rem',
                  color: service.color,
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {service.tagline}
                </p>

                {/* Description */}
                <p style={{
                  color: '#64748b',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: '#f8fafc',
                  borderRadius: '12px'
                }}>
                  {service.stats.map((stat, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: service.color,
                        marginBottom: '0.25rem'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: '#64748b',
                        fontWeight: 500
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: hoveredService === service.id ? service.gradient : 'white',
                    color: hoveredService === service.id ? 'white' : service.color,
                    border: `2px solid ${service.color}`,
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Learn More
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '2rem'
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  maxWidth: '900px',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  position: 'relative'
                }}
              >
                {/* Header */}
                <div style={{
                  background: selectedService.gradient,
                  padding: '3rem 3rem 2rem',
                  borderRadius: '24px 24px 0 0',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                    borderRadius: '50%'
                  }} />
                  
                  <button
                    onClick={() => setSelectedService(null)}
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255,255,255,0.2)',
                      border: 'none',
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
                    onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                  >
                    ×
                  </button>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '4rem',
                      marginBottom: '1rem'
                    }}>
                      {selectedService.icon}
                    </div>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}>
                      {selectedService.title}
                    </h2>
                    <p style={{
                      fontSize: '1.2rem',
                      color: 'rgba(255,255,255,0.9)'
                    }}>
                      {selectedService.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '3rem' }}>
                  {/* Description */}
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    lineHeight: 1.8,
                    marginBottom: '2rem'
                  }}>
                    {selectedService.description}
                  </p>

                  {/* Benefits */}
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#334155',
                    marginBottom: '1rem'
                  }}>
                    Key Benefits
                  </h3>
                  <div style={{
                    display: 'grid',
                    gap: '1rem',
                    marginBottom: '2rem'
                  }}>
                    {selectedService.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: '#f8fafc',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        <div style={{
                          width: '48px',
                          height: '48px',
                          background: `${selectedService.color}15`,
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          flexShrink: 0
                        }}>
                          {benefit.icon}
                        </div>
                        <span style={{
                          fontWeight: 600,
                          color: '#334155',
                          fontSize: '1rem'
                        }}>
                          {benefit.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features */}
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#334155',
                    marginBottom: '1rem'
                  }}>
                    Service Features
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2rem'
                  }}>
                    {selectedService.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          padding: '1rem',
                          background: '#f8fafc',
                          borderRadius: '12px'
                        }}
                      >
                        <div style={{
                          width: '8px',
                          height: '8px',
                          background: selectedService.color,
                          borderRadius: '50%',
                          marginTop: '0.5rem',
                          flexShrink: 0
                        }} />
                        <span style={{
                          color: '#334155',
                          fontSize: '0.95rem',
                          lineHeight: 1.6
                        }}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        flex: 1,
                        minWidth: '200px',
                        padding: '1rem 2rem',
                        background: selectedService.gradient,
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: `0 4px 12px ${selectedService.color}40`
                      }}
                    >
                      Request Quote
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        flex: 1,
                        minWidth: '200px',
                        padding: '1rem 2rem',
                        background: 'white',
                        color: selectedService.color,
                        border: `2px solid ${selectedService.color}`,
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Contact Sales
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveServicesShowcase;

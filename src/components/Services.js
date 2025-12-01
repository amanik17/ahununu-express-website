import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const services = [
    {
      id: 'road-freight',
      title: 'Road Freight',
      icon: '🚛',
      description: 'Comprehensive ground transportation solutions for all your cargo needs.',
      details: [
        'Full Truckload (FTL) and Less Than Truckload (LTL) services',
        'Temperature-controlled transportation for sensitive goods',
        'Oversized and heavy cargo handling',
        'Cross-docking and consolidation services',
        'Real-time GPS tracking and monitoring',
        'Flexible scheduling and route optimization'
      ]
    },
    {
      id: 'air-freight',
      title: 'Air Freight',
      icon: '✈️',
      description: 'Fast and reliable air cargo services for time-sensitive shipments.',
      details: [
        'Express and standard air freight options',
        'International and domestic air cargo',
        'Dangerous goods handling and certification',
        'Charter flight arrangements for urgent cargo',
        'Airport-to-airport and door-to-door services',
        'Customs clearance and documentation support'
      ]
    },
    {
      id: 'warehousing',
      title: 'Warehousing & Distribution',
      icon: '🏭',
      description: 'Secure storage and efficient distribution solutions.',
      details: [
        'Climate-controlled warehouse facilities',
        'Inventory management and real-time tracking',
        'Pick, pack, and fulfillment services',
        'Cross-docking and transloading',
        'Value-added services (labeling, repackaging)',
        'Integration with e-commerce platforms'
      ]
    },
    {
      id: 'last-mile',
      title: 'Last-Mile Delivery',
      icon: '📦',
      description: 'Efficient final delivery to your customers\' doorsteps.',
      details: [
        'Same-day and next-day delivery options',
        'Residential and commercial delivery',
        'Signature confirmation and proof of delivery',
        'Flexible delivery windows and scheduling',
        'Returns and reverse logistics',
        'White-glove delivery for special items'
      ]
    },
    {
      id: 'medical-express',
      title: 'Medical Express',
      icon: '🏥',
      description: 'Specialized medical and pharmaceutical logistics services.',
      details: [
        'Temperature-sensitive pharmaceutical transport',
        'Medical equipment and supplies delivery',
        'HIPAA-compliant handling procedures',
        'Emergency medical transport services',
        'Laboratory specimen transportation',
        'Medical waste disposal and transport'
      ]
    },
    {
      id: 'bid-contractual',
      title: 'Bid & Contractual Logistics',
      icon: '📋',
      description: 'Customized logistics solutions for large-scale operations.',
      details: [
        'Government and military contract logistics',
        'Project-based transportation solutions',
        'Dedicated fleet and driver services',
        'Supply chain consulting and optimization',
        'Long-term partnership agreements',
        'Performance metrics and reporting'
      ]
    }
  ];

  const toggleAccordion = (serviceId) => {
    setOpenAccordion(openAccordion === serviceId ? null : serviceId);
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive logistics solutions tailored to meet your unique transportation and distribution needs.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>

              <button
                className="accordion-toggle"
                onClick={() => toggleAccordion(service.id)}
                aria-expanded={openAccordion === service.id}
              >
                <span>Learn More</span>
                <motion.span
                  className="accordion-arrow"
                  animate={{ rotate: openAccordion === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openAccordion === service.id && (
                  <motion.div
                    className="accordion-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="service-details">
                      <h4>Key Features:</h4>
                      <ul>
                        {service.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="service-actions">
                        <a href="#quote" className="btn btn-primary">
                          Get Quote
                        </a>
                        <a href="#contact" className="btn btn-outline">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: white;
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-light);
          transition: all 0.3s ease;
        }

        .service-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }

        .service-info {
          flex: 1;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }

        .service-description {
          color: var(--text-light);
          line-height: 1.6;
        }

        .accordion-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(127, 186, 66, 0.05);
          border: 1px solid rgba(127, 186, 66, 0.2);
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          color: var(--primary-green);
          transition: all 0.3s ease;
        }

        .accordion-toggle:hover {
          background: rgba(127, 186, 66, 0.1);
        }

        .accordion-arrow {
          display: inline-block;
          color: var(--primary-green);
        }

        .accordion-content {
          overflow: hidden;
        }

        .service-details {
          padding: 1.5rem 0;
        }

        .service-details h4 {
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .service-details ul {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .service-details li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-light);
        }

        .service-details li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: bold;
        }

        .service-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-header {
            flex-direction: column;
            text-align: center;
          }

          .service-actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;

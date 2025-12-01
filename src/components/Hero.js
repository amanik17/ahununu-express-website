import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ResponsiveImage from './ResponsiveImage';
import stockImages from './ImageAssets';

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    "Fast & Reliable Delivery",
    "Real-time Tracking",
    "Affordable Pricing",
    "24/7 Customer Support"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "15,000+", label: "Deliveries Monthly" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "85+", label: "Cities Covered" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Your <span className="text-primary">Trusted Express</span>
              <br />Service Provider
            </h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your trusted express service provider across Ethiopia
            </motion.p>

            <motion.div
              className="hero-feature"
              key={currentFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              ✓ {features[currentFeature]}
            </motion.div>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/quote" className="btn btn-primary">
                Get Instant Quote
              </Link>
              <Link to="/tracking" className="btn btn-secondary">
                Track Shipment
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ResponsiveImage
              sources={[
                { type: 'image/avif', srcSet: `${stockImages.logistics.truck}&fm=avif&w=640 640w, ${stockImages.logistics.truck}&fm=avif&w=1024 1024w`, sizes: '(max-width: 768px) 90vw, 480px' },
                { type: 'image/webp', srcSet: `${stockImages.logistics.truck}&fm=webp&w=640 640w, ${stockImages.logistics.truck}&fm=webp&w=1024 1024w`, sizes: '(max-width: 768px) 90vw, 480px' }
              ]}
              src={`${stockImages.logistics.truck}&w=1024`}
              alt="Delivery truck in Addis Ababa"
              width="480"
              height="320"
              className="card"
            />
          </motion.div>
        </div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          padding: 6rem 0 4rem;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .text-primary {
          color: var(--primary-green);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-feature {
          background: rgba(127, 186, 66, 0.1);
          color: var(--primary-green);
          padding: 0.75rem 1.5rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          margin-bottom: 2rem;
          display: inline-block;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .delivery-truck {
          font-size: 4rem;
          animation: bounce 2s infinite;
        }

        .delivery-path {
          position: absolute;
          width: 200px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-green), transparent);
          top: 50%;
          left: 50%;
          transform: translateY(-50%);
          animation: pathGlow 3s infinite;
        }

        .delivery-destination {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2rem;
          animation: pulse 2s infinite;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
          border-top: 1px solid var(--border-light);
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-green);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-light);
          font-weight: 500;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes pathGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.1); }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

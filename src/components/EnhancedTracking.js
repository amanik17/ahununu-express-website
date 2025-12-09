 import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const saved = window.localStorage.getItem('recentTracking');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recent searches');
      }
    }
  }, []);

  const mockTrackingData = {
    'AE123456789': {
      status: 'In Transit',
      estimatedDelivery: '2025-12-03',
      currentLocation: 'Addis Ababa Distribution Center',
      progress: 60,
      timeline: [
        {
          status: 'Order Placed',
          location: 'Addis Ababa',
          date: '2025-12-01 09:30',
          completed: true,
          icon: '📦'
        },
        {
          status: 'Package Picked Up',
          location: 'Addis Ababa Hub',
          date: '2025-12-01 14:20',
          completed: true,
          icon: '🚚'
        },
        {
          status: 'In Transit',
          location: 'Addis Ababa Distribution Center',
          date: '2025-12-02 08:15',
          completed: true,
          icon: '📍'
        },
        {
          status: 'Out for Delivery',
          location: 'Local Delivery Center',
          date: 'Expected: 2025-12-03 10:00',
          completed: false,
          icon: '🚛'
        },
        {
          status: 'Delivered',
          location: 'Destination',
          date: 'Expected: 2025-12-03 17:00',
          completed: false,
          icon: '✅'
        }
      ],
      packageDetails: {
        weight: '2.5 kg',
        dimensions: '30x20x15 cm',
        service: 'Express Delivery',
        sender: 'Addis Ababa',
        recipient: 'Bahir Dar'
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    setTimeout(() => {
      const data = mockTrackingData[trackingNumber.trim()];
      
      if (data) {
        setResult(data);
        
        const newSearch = {
          number: trackingNumber.trim(),
          date: new Date().toISOString()
        };
        
        const updated = [newSearch, ...recentSearches.filter(s => s.number !== trackingNumber.trim())].slice(0, 3);
        setRecentSearches(updated);
        window.localStorage.setItem('recentTracking', JSON.stringify(updated));
      } else {
        setError('Tracking number not found. Please check and try again.');
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleRecentSearch = (number) => {
    setTrackingNumber(number);
    setError(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '6rem 2rem 4rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #7fba42 0%, #6ba036 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
          }}>
            Track Your Shipment
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Enter your tracking number to see real-time updates on your package
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'white',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            marginBottom: '2rem'
          }}
        >
          <div>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap'
            }}>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g., AE123456789)"
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                style={{
                  flex: 1,
                  minWidth: '250px',
                  padding: '1rem 1.5rem',
                  fontSize: '1.05rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#7fba42'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              <motion.button
                onClick={handleSubmit}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1rem 2.5rem',
                  background: isLoading ? '#94a3b8' : 'linear-gradient(135deg, #7fba42 0%, #6ba036 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                    Tracking...
                  </>
                ) : (
                  <>
                    🔍 Track Package
                  </>
                )}
              </motion.button>
            </div>

            {recentSearches.length > 0 && !result && (
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
                  Recent searches:
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {recentSearches.map((search, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleRecentSearch(search.number)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '0.5rem 1rem',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        color: '#334155',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {search.number}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '12px',
                  color: '#dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '2rem',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
                      Status
                    </p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#7fba42' }}>
                      {result.status}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
                      Current Location
                    </p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#334155' }}>
                      {result.currentLocation}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
                      Estimated Delivery
                    </p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#334155' }}>
                      {new Date(result.estimatedDelivery).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
                      Delivery Progress
                    </span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#7fba42' }}>
                      {result.progress}%
                    </span>
                  </div>
                  <div style={{
                    height: '12px',
                    background: '#f1f5f9',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result.progress}%` }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #7fba42 0%, #6ba036 100%)',
                        borderRadius: '6px',
                        position: 'relative'
                      }}
                    >
                      <motion.div
                        animate={{
                          x: [0, 100, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'linear'
                        }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                marginBottom: '2rem'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '2rem'
                }}>
                  Tracking Timeline
                </h2>

                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: '30px',
                    bottom: '30px',
                    width: '2px',
                    background: '#e2e8f0'
                  }} />

                  {result.timeline.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      style={{
                        position: 'relative',
                        paddingLeft: '60px',
                        paddingBottom: index < result.timeline.length - 1 ? '2rem' : 0
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: event.completed ? 'linear-gradient(135deg, #7fba42 0%, #6ba036 100%)' : '#f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        boxShadow: event.completed ? '0 4px 12px rgba(127, 186, 66, 0.3)' : 'none',
                        zIndex: 1
                      }}>
                        {event.icon}
                      </div>

                      <div style={{
                        background: event.completed ? '#f8fafc' : 'transparent',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: event.completed ? '1px solid #e2e8f0' : 'none'
                      }}>
                        <h3 style={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: event.completed ? '#334155' : '#94a3b8',
                          marginBottom: '0.25rem'
                        }}>
                          {event.status}
                        </h3>
                        <p style={{
                          fontSize: '0.9rem',
                          color: '#64748b',
                          marginBottom: '0.25rem'
                        }}>
                          📍 {event.location}
                        </p>
                        <p style={{
                          fontSize: '0.85rem',
                          color: '#94a3b8'
                        }}>
                          🕒 {event.date}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '1.5rem'
                }}>
                  Package Details
                </h2>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {Object.entries(result.packageDetails).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#64748b',
                        marginBottom: '0.25rem',
                        textTransform: 'capitalize'
                      }}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#334155'
                      }}>
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '2rem',
                  flexWrap: 'wrap'
                }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: 'linear-gradient(135deg, #7fba42 0%, #6ba036 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    📧 Email Updates
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: 'white',
                      color: '#7fba42',
                      border: '2px solid #7fba42',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    💬 Contact Support
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default EnhancedTracking;

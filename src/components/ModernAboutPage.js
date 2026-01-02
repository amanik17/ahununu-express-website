 import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModernAboutPage = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timeline = [
    {
      year: 2014,
      title: 'Company Founded',
      description: 'Ahununu Logistics was established in Addis Ababa with a vision to revolutionize logistics in Ethiopia.',
      icon: '🚀',
      color: '#127A6A'
    },
    {
      year: 2016,
      title: 'Network Expansion',
      description: 'Expanded operations to 25 cities across Ethiopia, establishing our first regional hubs.',
      icon: '🌍',
      color: '#4A90E2'
    },
    {
      year: 2018,
      title: 'Technology Integration',
      description: 'Launched our digital platform with real-time tracking and automated systems.',
      icon: '💻',
      color: '#F5A623'
    },
    {
      year: 2020,
      title: 'Global Partnerships',
      description: 'Established strategic partnerships with international logistics leaders to enhance our cross-border capabilities.',
      icon: '🤝',
      color: '#E94F64'
    },
    {
      year: 2022,
      title: 'Medical Logistics',
      description: 'Launched specialized medical logistics division with cold chain capabilities.',
      icon: '🏥',
      color: '#10B981'
    },
    {
      year: 2024,
      title: 'Regional Leader',
      description: 'Became Ethiopia\'s #1 logistics service provider with 85+ cities coverage.',
      icon: '⭐',
      color: '#8B5CF6'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Reliability & Trust',
      description: 'We deliver on our promises, every time. Your shipment is our responsibility.',
      color: '#127A6A'
    },
    {
      icon: '💚',
      title: 'Customer First',
      description: 'Your success is our success. We go above and beyond for customer satisfaction.',
      color: '#4A90E2'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Constantly evolving with technology to provide cutting-edge solutions.',
      color: '#F5A623'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all our business dealings.',
      color: '#E94F64'
    },
    {
      icon: '🌍',
      title: 'Cultural Respect',
      description: 'Honoring Ethiopia\'s diversity while serving communities nationwide.',
      color: '#10B981'
    },
    {
      icon: '📈',
      title: 'Continuous Growth',
      description: 'Investing in people, technology, and infrastructure for the future.',
      color: '#8B5CF6'
    }
  ];

  const stats = [
    { number: '8+', label: 'Years Experience', icon: '📅', color: '#127A6A' },
    { number: '85+', label: 'Cities Covered', icon: '🏙️', color: '#aed580' },
    { number: '500+', label: 'Vehicles', icon: '🚛', color: '#aed580' },
    { number: '150+', label: 'Team Members', icon: '👥', color: '#E94F64' },
    { number: '1.5K+', label: 'Daily Deliveries', icon: '📦', color: '#10B981' },
    { number: '98%', label: 'Customer Satisfaction', icon: '⭐', color: '#8B5CF6' }
  ];

  const team = [
    {
      name: 'Abebe Bekele',
      role: 'Chief Executive Officer',
      image: '👨‍💼',
      bio: '20+ years in logistics and supply chain management',
      color: '#127A6A'
    },
    {
      name: 'Tigist Haile',
      role: 'Chief Operations Officer',
      image: '👩‍💼',
      bio: 'Expert in operations optimization and process improvement',
      color: '#4A90E2'
    },
    {
      name: 'Dawit Tesfaye',
      role: 'Chief Technology Officer',
      image: '👨‍💻',
      bio: 'Leading our digital transformation initiatives',
      color: '#F5A623'
    },
    {
      name: 'Meron Assefa',
      role: 'Head of Customer Success',
      image: '👩‍💼',
      bio: 'Ensuring exceptional customer experiences',
      color: '#E94F64'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #127A6A 0%, #0e6356 100%)',
        padding: '8rem 2rem 6rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', color: 'white' }}
          >
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 900,
              marginBottom: '1rem',
              textShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              About Ahununu Logistics
            </h1>
            <p style={{
              fontSize: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto',
              opacity: 0.95,
              lineHeight: 1.6
            }}>
              Ethiopia's trusted logistics partner for over a decade, connecting businesses and communities across the nation
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '-80px',
            marginBottom: '4rem'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#64748b'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '6rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #127A6A 0%, #0e6356 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              marginBottom: '1.5rem'
            }}>
              🎯
            </div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#334155',
              marginBottom: '1rem'
            }}>
              Our Mission
            </h2>
            <p style={{
              color: '#64748b',
              lineHeight: 1.8,
              fontSize: '1.1rem'
            }}>
              To be the leading express service provider in Ethiopia, delivering excellence through innovation, reliability, and customer satisfaction while supporting the country's economic growth and development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              marginBottom: '1.5rem'
            }}>
              🔭
            </div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#334155',
              marginBottom: '1rem'
            }}>
              Our Vision
            </h2>
            <p style={{
              color: '#64748b',
              lineHeight: 1.8,
              fontSize: '1.1rem'
            }}>
              To revolutionize logistics in Ethiopia by creating a seamless, technology-driven ecosystem that connects every corner of the nation, empowering businesses and individuals with world-class delivery services.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div style={{ marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#334155',
              marginBottom: '0.5rem'
            }}>
              Our Core Values
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: `2px solid ${value.color}20`,
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: `${value.color}15`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1rem'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '0.75rem'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: 1.6
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#334155',
              marginBottom: '0.5rem'
            }}>
              Our Journey
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
              A decade of growth, innovation, and excellence
            </p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #7fba42 0%, #6ba036 100%)',
              transform: 'translateX(-50%)'
            }} />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setActiveYear(item.year)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr 80px 1fr' : '1fr 80px 1fr',
                  gap: '2rem',
                  alignItems: 'center',
                  marginBottom: '3rem'
                }}
              >
                {/* Left Content */}
                <div style={{
                  textAlign: index % 2 === 0 ? 'right' : 'left',
                  order: index % 2 === 0 ? 1 : 3
                }}>
                  <div style={{
                    display: 'inline-block',
                    textAlign: 'left',
                    background: activeYear === item.year ? 'white' : '#f8fafc',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    boxShadow: activeYear === item.year ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
                    border: `2px solid ${activeYear === item.year ? item.color : '#e2e8f0'}`,
                    transition: 'all 0.3s ease',
                    maxWidth: '400px'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#334155',
                      marginBottom: '0.5rem'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: '#64748b',
                      lineHeight: 1.6
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div style={{ order: 2, display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      boxShadow: activeYear === item.year ? `0 8px 24px ${item.color}60` : `0 4px 12px ${item.color}40`,
                      border: '4px solid white',
                      zIndex: 1,
                      cursor: 'pointer'
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Right Year */}
                <div style={{
                  order: index % 2 === 0 ? 3 : 1,
                  textAlign: index % 2 === 0 ? 'left' : 'right'
                }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    background: item.color,
                    color: 'white',
                    borderRadius: '50px',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    boxShadow: `0 4px 12px ${item.color}40`
                  }}>
                    {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#334155',
              marginBottom: '0.5rem'
            }}>
              Our Leadership Team
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
              Meet the people driving our vision forward
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)`,
                  padding: '3rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem'
                }}>
                  {member.image}
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#334155',
                    marginBottom: '0.5rem'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    color: member.color,
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {member.role}
                  </p>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.95rem',
                    lineHeight: 1.6
                  }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernAboutPage;

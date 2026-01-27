import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BranchesPage = () => {
  const [hoveredBranch, setHoveredBranch] = useState(null);

  const branches = [
    { 
      name: 'Addis Ababa(HQ)', 
      details: {
        location: '22 beside Veronica Hotel',
        phone: '0970025656, 0953563356, 8414'
      }
    },
    { name: 'Adama', details: { phone: '0970045656' } },
    { name: 'Arba Minch', details: { phone: '0906560056' } },
    { name: 'Assosa', details: { phone: '0917675656' } },
    { name: 'Bahirdar', details: { phone: '0907563356' } },
    { name: 'Debre Berhan', details: { phone: '0904563356' } },
    { name: 'Debre Markos', details: { phone: '0916815656' } },
    { name: 'Dessie', details: { phone: '0970525656' } },
    { name: 'Dilla', details: { phone: '0927569956' } },
    { name: 'Dire Dawa', details: { phone: '0970075656' } },
    { name: 'Gambela Agent', details: { phone: '0903005656' } },
    { name: 'Gondar', details: { phone: '0582117525, 0970535656' } },
    { name: 'Harer', details: { phone: '0905563356' } },
    { name: 'Hawassa', details: { phone: '0462127394, 0970055656' } },
    { name: 'Hossana', details: { phone: '0902563356' } },
    { name: 'Jijiga Agent', details: { phone: '0902232020' } },
    { name: 'Jimma', details: { phone: '0970085656' } },
    { name: 'Kera', details: { phone: '0938565556' } },
    { name: 'Kombolcha', details: { phone: '0917875656' } },
    { name: 'Logia/Semera', details: { phone: '0903563356' } },
    { name: 'Mekelle', details: { phone: '0925563356' } },
    { name: 'Neketmte', details: { phone: '0927564456' } },
    { name: 'Merkato', details: { phone: '0903568856' } },
    { name: 'Shashemene', details: { phone: '0908568856' } },
    { name: 'Shire', details: { phone: '0905568856' } },
    { name: 'Wolayta sodo', details: { phone: '0906563356' } },
    { name: 'Wolkite', details: { phone: '0927567756' } },
    { name: 'Axum' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '8rem 2rem 4rem'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            color: '#334155',
            marginBottom: '1rem'
          }}>
            Our <span style={{
              background: 'linear-gradient(135deg, #127A6A 0%, #aed580 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Branches</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
            Serving you across Ethiopia with 28 strategic locations
          </p>
        </motion.div>

        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            {branches.map((branch, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredBranch(branch.name)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  onTouchStart={() => setHoveredBranch(branch.name === hoveredBranch ? null : branch.name)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: hoveredBranch === branch.name ? 'white' : '#f8fafc',
                    border: '1px solid',
                    borderColor: hoveredBranch === branch.name ? '#127A6A' : '#e2e8f0',
                    boxShadow: hoveredBranch === branch.name ? '0 10px 25px rgba(18, 122, 106, 0.1)' : 'none',
                    transition: 'all 0.3s ease',
                    cursor: branch.details ? 'pointer' : 'default',
                    zIndex: hoveredBranch === branch.name ? 10 : 1
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#127A6A'
                  }} />
                  <span style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#334155'
                  }}>
                    {branch.name}
                  </span>
                </motion.div>

                <AnimatePresence>
                  {hoveredBranch === branch.name && branch.details && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        right: '0',
                        marginTop: '0.5rem',
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                        border: '1px solid #127A6A',
                        zIndex: 100,
                        pointerEvents: 'none'
                      }}
                    >
                      <div style={{ marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#127A6A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Location</div>
                        <div style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 500 }}>{branch.details.location}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#127A6A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Contact Numbers</div>
                        <div style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 600 }}>{branch.details.phone}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;

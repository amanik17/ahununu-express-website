import React from 'react';
import { motion } from 'framer-motion';

const BranchesPage = () => {
  const branches = [
    'Addis Ababa(HQ)', 'Adama', 'Arbaminch', 'Assossa', 'Bahirdar',
    'Debre markos', 'Debrebrhan', 'Dessie', 'Dilla', 'Diredewa',
    'Gambella', 'Gonder', 'Harrar', 'Hawassa', 'Hossana', 'Jijiga',
    'Jimma', 'Kombolcha', 'Logia', 'Mekelle', 'Nekemte', 'Shashemene',
    'Shire', 'Sodo', 'Welkite', 'Kera', 'Merkato', 'Axum'
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
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ scale: 1.05, background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
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
                  {branch}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;

import React from 'react';

const Spinner = ({ size = 32 }) => {
  const style = {
    width: size,
    height: size,
    border: '3px solid rgba(174,213,128,0.25)',
    borderTopColor: '#127A6A',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
    margin: '0 auto'
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <div style={style} />
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Spinner; 
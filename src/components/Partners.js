import React from 'react';
import ResponsiveImage from './ResponsiveImage';
import stockImages from './ImageAssets';

const Partners = () => {
  const partners = [
    'Ethio Telecom', 'Commercial Bank of Ethiopia', 'Dashen Bank', 
    'Shoprite', 'Jumia', 'Konga', 'First Bank', 'Access Bank'
  ];

  const logo = stockImages.business.partnership;

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Our Trusted Partners</h1>
        <p className="section-subtitle">We're proud to serve leading companies across Ethiopia</p>
        <div className="grid grid-4">
          {partners.map((partner, index) => (
            <div key={index} className="card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <ResponsiveImage
                  sources={[
                    { type: 'image/avif', srcSet: `${logo}&fm=avif&w=200 200w, ${logo}&fm=avif&w=400 400w`, sizes: '200px' },
                    { type: 'image/webp', srcSet: `${logo}&fm=webp&w=200 200w, ${logo}&fm=webp&w=400 400w`, sizes: '200px' }
                  ]}
                  src={`${logo}&w=200`}
                  alt={`${partner} logo`}
                  width="120"
                  height="80"
                />
              </div>
              <h4>{partner}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

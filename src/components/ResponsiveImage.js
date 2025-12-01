import React from 'react';

const ResponsiveImage = ({ sources = [], src, alt, width, height, style, className, loading = 'lazy' }) => {
  return (
    <picture>
      {sources.map((s, idx) => (
        <source key={idx} srcSet={s.srcSet} type={s.type} sizes={s.sizes} />
      ))}
      <img src={src} alt={alt} width={width} height={height} style={style} className={className} loading={loading} />
    </picture>
  );
};

export default ResponsiveImage; 
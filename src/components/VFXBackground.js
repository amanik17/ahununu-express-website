import React, { useEffect, useRef, useCallback } from 'react';
import { stockImages, imagePreloader } from './ImageAssets';

const VFXBackground = () => {
  const canvasRef = useRef(null);

  const animationRef = useRef(null);
  const resizeCanvas = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId = null;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Load and draw stock images
    const drawStockImage = async (imageUrl, x, y, width, height, opacity = 0.1, rotation = 0) => {
      try {
        const img = await imagePreloader.loadImage(imageUrl);
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.translate(x + width/2, y + height/2);
        ctx.rotate(rotation);
        ctx.drawImage(img, -width/2, -height/2, width, height);
        ctx.restore();
      } catch (error) {
        // Fallback to drawing a placeholder
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = 'rgba(127, 186, 66, 0.2)';
        ctx.fillRect(x, y, width, height);
        ctx.restore();
      }
    };

    // Ethiopian pattern drawing functions
    const drawEthiopianPattern = (x, y, size, rotation, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      
      // Traditional Ethiopian cross pattern
      const crossSize = size * 0.6;
      ctx.strokeStyle = 'rgba(127, 186, 66, 0.3)';
      ctx.lineWidth = 2;
      
      // Main cross
      ctx.beginPath();
      ctx.moveTo(-crossSize/2, 0);
      ctx.lineTo(crossSize/2, 0);
      ctx.moveTo(0, -crossSize/2);
      ctx.lineTo(0, crossSize/2);
      ctx.stroke();
      
      // Decorative ends
      const endSize = crossSize * 0.2;
      [-crossSize/2, crossSize/2].forEach(x => {
        ctx.beginPath();
        ctx.moveTo(x - endSize/2, -endSize/2);
        ctx.lineTo(x + endSize/2, -endSize/2);
        ctx.lineTo(x + endSize/2, endSize/2);
        ctx.lineTo(x - endSize/2, endSize/2);
        ctx.closePath();
        ctx.stroke();
      });
      
      [0, 0].forEach((_, i) => {
        const y = i === 0 ? -crossSize/2 : crossSize/2;
        ctx.beginPath();
        ctx.moveTo(-endSize/2, y - endSize/2);
        ctx.lineTo(endSize/2, y - endSize/2);
        ctx.lineTo(endSize/2, y + endSize/2);
        ctx.lineTo(-endSize/2, y + endSize/2);
        ctx.closePath();
        ctx.stroke();
      });
      
      ctx.restore();
    };

    const drawTribalPattern = (x, y, size, rotation, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      
      // Tribal diamond pattern
      ctx.strokeStyle = 'rgba(127, 186, 66, 0.2)';
      ctx.lineWidth = 1.5;
      
      const diamondSize = size * 0.4;
      ctx.beginPath();
      ctx.moveTo(0, -diamondSize);
      ctx.lineTo(diamondSize, 0);
      ctx.lineTo(0, diamondSize);
      ctx.lineTo(-diamondSize, 0);
      ctx.closePath();
      ctx.stroke();
      
      // Inner pattern
      const innerSize = diamondSize * 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -innerSize);
      ctx.lineTo(innerSize, 0);
      ctx.lineTo(0, innerSize);
      ctx.lineTo(-innerSize, 0);
      ctx.closePath();
      ctx.stroke();
      
      ctx.restore();
    };

    const drawAhununuPackage = (x, y, size, rotation, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      
      // Package box
      const boxWidth = size;
      const boxHeight = size * 0.8;
      
      // Main package
      ctx.fillStyle = 'rgba(127, 186, 66, 0.4)';
      ctx.fillRect(-boxWidth/2, -boxHeight/2, boxWidth, boxHeight);
      
      // Package outline
      ctx.strokeStyle = 'rgba(127, 186, 66, 0.6)';
      ctx.lineWidth = 2;
      ctx.strokeRect(-boxWidth/2, -boxHeight/2, boxWidth, boxHeight);
      
      // Ahununu branding
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = `${size * 0.15}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('AHUNUNU', 0, -boxHeight * 0.1);
      ctx.fillText('EXPRESS', 0, boxHeight * 0.15);
      
      // Package tape/straps
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-boxWidth/2, 0);
      ctx.lineTo(boxWidth/2, 0);
      ctx.moveTo(0, -boxHeight/2);
      ctx.lineTo(0, boxHeight/2);
      ctx.stroke();
      
      ctx.restore();
    };

    // Particle system for logistics theme
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      reset() {
        this.x = -50;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 2 + 0.5;
        this.size = Math.random() * 4 + 2;
        this.type = Math.random() > 0.7 ? 'package' : 'dot';
        this.color = `rgba(127, 186, 66, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        this.x += this.speed;
        if (this.x > canvas.width + 50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        if (this.type === 'package') {
          // Draw package icon
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
          ctx.strokeStyle = `rgba(127, 186, 66, 0.5)`;
          ctx.lineWidth = 1;
          ctx.strokeRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        } else {
          // Draw connecting dot
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size/2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    // Connection lines between particles
    class ConnectionLine {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
      }

      update() {
        const distance = Math.sqrt(
          Math.pow(this.p2.x - this.p1.x, 2) + Math.pow(this.p2.y - this.p1.y, 2)
        );
        this.opacity = distance < 150 ? (150 - distance) / 150 * 0.2 : 0;
      }

      draw() {
        if (this.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.strokeStyle = 'rgba(127, 186, 66, 0.3)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Ethiopian Pattern Shapes
    class EthiopianPattern {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 20;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.floatSpeed = Math.random() * 0.3 + 0.1;
        this.floatOffset = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.patternType = Math.random() > 0.5 ? 'cross' : 'tribal';
      }

      update(time) {
        this.rotation += this.rotationSpeed;
        this.y += Math.sin(time * 0.0008 + this.floatOffset) * this.floatSpeed;
        
        // Keep patterns within bounds
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw() {
        if (this.patternType === 'cross') {
          drawEthiopianPattern(this.x, this.y, this.size, this.rotation, this.opacity);
        } else {
          drawTribalPattern(this.x, this.y, this.size, this.rotation, this.opacity);
        }
      }
    }

    // Ahununu Package Elements
    class AhununuPackage {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 15;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
        this.floatSpeed = Math.random() * 0.4 + 0.2;
        this.floatOffset = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.2 + 0.1;
      }

      update(time) {
        this.rotation += this.rotationSpeed;
        this.y += Math.sin(time * 0.0006 + this.floatOffset) * this.floatSpeed;
        
        // Keep packages within bounds
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw() {
        drawAhununuPackage(this.x, this.y, this.size, this.rotation, this.opacity);
      }
    }

    // Initialize all elements
    const particles = Array.from({ length: 20 }, () => new Particle());
    const ethiopianPatterns = Array.from({ length: 6 }, () => new EthiopianPattern());
    const ahununuPackages = Array.from({ length: 4 }, () => new AhununuPackage());

    // Define animation function
    function runAnimation(time) {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw Ethiopian patterns
      ethiopianPatterns.forEach(pattern => {
        pattern.update(time);
        pattern.draw();
      });

      // Update and draw Ahununu packages
      ahununuPackages.forEach(pkg => {
        pkg.update(time);
        pkg.draw();
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const line = new ConnectionLine(particles[i], particles[j]);
          line.update();
          line.draw();
        }
      }

      // Draw delivery route visualization
      drawDeliveryRoute(time);

      animationRef.current = requestAnimationFrame(runAnimation);
    }

    // Delivery route visualization
    const drawDeliveryRoute = (time) => {
      const routeProgress = (Math.sin(time * 0.001) + 1) / 2;
      const startX = canvas.width * 0.1;
      const endX = canvas.width * 0.9;
      const y = canvas.height * 0.85;
      
      // Route line with Ethiopian colors
      ctx.save();
      ctx.strokeStyle = 'rgba(127, 186, 66, 0.3)';
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
      ctx.stroke();
      
      // Moving delivery truck with Ahununu branding
      const truckX = startX + (endX - startX) * routeProgress;
      ctx.fillStyle = 'rgba(127, 186, 66, 0.7)';
      ctx.fillRect(truckX - 12, y - 6, 24, 12);
      
      // Truck branding
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = '8px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('AE', truckX, y + 2);
      
      // Delivery points with Ethiopian pattern
      [0.2, 0.5, 0.8].forEach((pos, index) => {
        const pointX = startX + (endX - startX) * pos;
        const isActive = routeProgress >= pos;
        
        ctx.fillStyle = isActive ? 'rgba(127, 186, 66, 0.8)' : 'rgba(127, 186, 66, 0.3)';
        ctx.beginPath();
        ctx.arc(pointX, y, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Small Ethiopian cross at each point
        if (isActive) {
          drawEthiopianPattern(pointX, y, 8, time * 0.001, 0.6);
        }
      });
      
      ctx.restore();
    };

    // Start animation
    animationRef.current = requestAnimationFrame(runAnimation);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Update connection lines on component mount and window resize
  useEffect(() => {
    const updateConnectionLines = () => {
      const markers = [
        { x: 20, y: 25 },  // marker-1
        { x: 70, y: 60 },  // marker-2
        { x: 30, y: 75 }   // marker-3
      ];

      // Update line coordinates
      const line1 = document.querySelector('.line-1');
      const line2 = document.querySelector('.line-2');
      const line3 = document.querySelector('.line-3');
      
      if (line1) line1.setAttribute('x1', markers[0].x + '%');
      if (line1) line1.setAttribute('y1', markers[0].y + '%');
      if (line1) line1.setAttribute('x2', markers[1].x + '%');
      if (line1) line1.setAttribute('y2', markers[1].y + '%');
      
      if (line2) line2.setAttribute('x1', markers[1].x + '%');
      if (line2) line2.setAttribute('y1', markers[1].y + '%');
      if (line2) line2.setAttribute('x2', markers[2].x + '%');
      if (line2) line2.setAttribute('y2', markers[2].y + '%');
      
      if (line3) line3.setAttribute('x1', markers[2].x + '%');
      if (line3) line3.setAttribute('y1', markers[2].y + '%');
      if (line3) line3.setAttribute('x2', markers[0].x + '%');
      if (line3) line3.setAttribute('y2', markers[0].y + '%');
    };

    // Initial setup
    updateConnectionLines();
    
    // Update on window resize
    window.addEventListener('resize', updateConnectionLines);
    
    return () => {
      window.removeEventListener('resize', updateConnectionLines);
    };
  }, []);

  return (
    <div className="vfx-container">
      <canvas
        ref={canvasRef}
        className="vfx-background"
      />
      <div className="vfx-overlay">
        {/* Pulse Circles */}
        <div className="pulse-circle pulse-1"></div>
        <div className="pulse-circle pulse-2"></div>
        <div className="pulse-circle pulse-3"></div>
        
        {/* Logistics Icons */}
        <div className="floating-icon icon-1">📦</div>
        <div className="floating-icon icon-2">🚛</div>
        <div className="floating-icon icon-3">✈️</div>
        <div className="floating-icon icon-4">🏭</div>
        
        {/* Additional Logistics Elements */}
        <div className="logistics-path path-1"></div>
        <div className="logistics-path path-2"></div>
        <div className="logistics-dot dot-1"></div>
        <div className="logistics-dot dot-2"></div>
        <div className="logistics-dot dot-3"></div>
        
        {/* Map Marker Elements */}
        <div className="map-marker marker-1">📍</div>
        <div className="map-marker marker-2">📍</div>
        <div className="map-marker marker-3">📍</div>
        
        {/* Connection Lines */}
        <svg className="connection-lines" width="100%" height="100%">
          <line className="connection-line line-1" />
          <line className="connection-line line-2" />
          <line className="connection-line line-3" />
        </svg>
      </div>

      <style>{`
        .vfx-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .pulse-circle {
          position: absolute;
          border: 2px solid rgba(127, 186, 66, 0.2);
          border-radius: 50%;
          animation: pulse 4s ease-in-out infinite;
        }

        .pulse-1 {
          width: 100px;
          height: 100px;
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .pulse-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: 1.5s;
        }

        .pulse-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 50%;
          animation-delay: 3s;
        }

        .floating-icon {
          position: absolute;
          font-size: 2rem;
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
        }

        .icon-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .icon-2 {
          top: 40%;
          right: 25%;
          animation-delay: 2s;
        }

        .icon-3 {
          bottom: 30%;
          left: 15%;
          animation-delay: 4s;
        }

        .icon-4 {
          bottom: 15%;
          right: 20%;
          animation-delay: 6s;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @media (max-width: 768px) {
          .floating-icon {
            font-size: 1.5rem;
          }
          
          .pulse-circle {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VFXBackground;

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text, Html, useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated, config } from '@react-spring/three';

// Airplane Model Component
function Airplane({ position, rotation, scale = 1, delay = 0, color = '#4A90E2' }) {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5 + delay) * 0.2;
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 2 + delay) * 0.1;
    }
  });

  // Hover animation
  const { scale: hoverScale } = useSpring({
    scale: hovered ? scale * 1.2 : scale,
    config: config.wobbly
  });

  return (
    <animated.group 
      ref={group} 
      position={position} 
      rotation={rotation}
      scale={hoverScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh castShadow>
        {/* Airplane Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.3, 3, 16]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
        </mesh>
        
        {/* Airplane Nose */}
        <mesh position={[0, 0, 1.7]}>
          <coneGeometry args={[0.3, 1, 16]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
        </mesh>
        
        {/* Wings */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.1, 4, 1.5]} />
          <meshStandardMaterial color="#3a7bc8" metalness={0.7} roughness={0.2} />
        </mesh>
        
        {/* Tail */}
        <mesh position={[0, 0, -1.2]}>
          <boxGeometry args={[0.1, 1.5, 0.5]} />
          <meshStandardMaterial color="#3a7bc8" metalness={0.7} roughness={0.2} />
        </mesh>
        
        {/* Windows */}
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[0.31, 0, -2 + i * 0.8]}>
            <circleGeometry args={[0.15, 16]} />
            <meshStandardMaterial color="#a0d8ff" emissive="#a0d8ff" emissiveIntensity={hovered ? 1 : 0.3} />
          </mesh>
        ))}
        
        {/* Engine */}
        <mesh position={[0, 0.2, 0.5]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
          <meshStandardMaterial color="#555" metalness={0.9} roughness={0.1} />
        </mesh>
      </mesh>
      
      {/* Hover effect */}
      {hovered && (
        <Html center>
          <div style={{
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
            transform: 'translateY(20px)'
          }}>
            Flight #{Math.floor(Math.random() * 1000) + 100}
          </div>
        </Html>
      )}
    </animated.group>
  );
}

// Cargo Ship Model
function CargoShip({ position, rotation, scale = 1 }) {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      {/* Ship Hull */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[4, 0.8, 1.5]} />
        <meshStandardMaterial color="#2c3e50" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Ship Deck */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[3.5, 0.2, 1.2]} />
        <meshStandardMaterial color="#34495e" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Cargo Containers */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[-1 + i * 1, 0.7, 0]}>
          <boxGeometry args={[0.8, 1, 0.8]} />
          <meshStandardMaterial 
            color={['#e74c3c', '#3498db', '#2ecc71'][i]} 
            metalness={0.2} 
            roughness={0.5} 
          />
        </mesh>
      ))}
      
      {/* Ship Bridge */}
      <mesh position={[1.2, 0.6, 0]}>
        <boxGeometry args={[1, 0.8, 0.8]} />
        <meshStandardMaterial color="#34495e" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Smoke */}
      <mesh position={[1.5, 0.8, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#bdc3c7" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

// Floating Logistics Icons
function FloatingIcon({ position, icon, color, delay = 0, size = 1 }) {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5 + delay) * 0.2;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group position={position} ref={ref}>
      <Html center>
        <div style={{
          fontSize: `${size * 32}px`,
          color: color,
          textShadow: `0 0 ${size * 10}px ${color}80`,
          transform: 'scale(1.5)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          {icon}
        </div>
      </Html>
    </group>
  );
}

// Connection Lines
function ConnectionLines() {
  const lines = [
    { start: [0, 0, 0], end: [3, 2, 1], color: '#7FBA42' },
    { start: [0, 0, 0], end: [-2, 1.5, -1], color: '#4A90E2' },
    { start: [3, 2, 1], end: [-2, 1.5, -1], color: '#F5A623' },
  ];

  return (
    <group>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line.start, ...line.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            attach="material" 
            color={line.color} 
            linewidth={1}
            transparent 
            opacity={0.6}
          />
        </line>
      ))}
    </group>
  );
}

// Main 3D Scene
function Scene() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4A90E2" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#7FBA42" />
      
      {/* Airplanes */}
      <Airplane 
        position={[-3, 2, 0]} 
        rotation={[0, Math.PI / 4, 0]}
        scale={0.5}
        color="#4A90E2"
        delay={0}
      />
      
      <Airplane 
        position={[3, 1, -2]} 
        rotation={[0, -Math.PI / 3, 0]}
        scale={0.4}
        color="#F5A623"
        delay={2}
      />
      
      <Airplane 
        position={[0, 3, 3]} 
        rotation={[0, Math.PI, 0]}
        scale={0.6}
        color="#E94F64"
        delay={4}
      />
      
      {/* Cargo Ship */}
      <CargoShip 
        position={[0, -1, 0]} 
        rotation={[0, Math.PI / 4, 0]}
        scale={0.7}
      />
      
      {/* Floating Icons */}
      <FloatingIcon position={[-2, 3, -2]} icon="📦" color="#7FBA42" size={1.2} delay={1} />
      <FloatingIcon position={[3, 4, 1]} icon="📦" color="#4A90E2" size={0.8} delay={2} />
      <FloatingIcon position={[-1, 5, 2]} icon="📦" color="#F5A623" size={1} delay={3} />
      
      {/* Connection Lines */}
      <ConnectionLines />
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          side={THREE.DoubleSide} 
          metalness={0.1}
          roughness={0.5}
        />
      </mesh>
    </>
  );
}

// Main Component
export default function Enhanced3DScene() {
  return (
    <div style={{
      width: '100%',
      height: '600px',
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      margin: '2rem 0',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '0',
        width: '100%',
        textAlign: 'center',
        color: '#2c3e50',
        fontSize: '14px',
        pointerEvents: 'none',
        textShadow: '0 0 5px rgba(255,255,255,0.8)',
        padding: '0.5rem',
        background: 'rgba(255,255,255,0.2)',
        backdropFilter: 'blur(5px)'
      }}>
        Drag to rotate • Scroll to zoom • Hover over planes for details
      </div>
    </div>
  );
}

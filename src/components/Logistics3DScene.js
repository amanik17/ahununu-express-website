import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Float, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

// 3D Model Loader
function TruckModel() {
  const group = useRef();
  
  // Animate the truck
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <group ref={group} scale={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]}>
      <mesh castShadow>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="#7FBA42" />
      </mesh>
      <mesh castShadow position={[0.7, 0.25, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.8]} />
        <meshStandardMaterial color="#5A8F29" />
      </mesh>
      <mesh castShadow position={[-0.6, -0.25, 0.5]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh castShadow position={[0.6, -0.25, 0.5]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh castShadow position={[-0.6, -0.25, -0.5]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh castShadow position={[0.6, -0.25, -0.5]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

// Interactive Floating Icons
function FloatingIcon({ position, icon, color, delay = 0 }) {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() + delay) * 0.2;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group position={position} ref={ref}>
      <Html center>
        <div style={{
          fontSize: '32px',
          color: color,
          textShadow: '0 0 10px rgba(255,255,255,0.5)',
          transform: 'scale(1.5)'
        }}>
          {icon}
        </div>
      </Html>
    </group>
  );
}

// Main 3D Scene
function Scene() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 1.5, 3);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <TruckModel />
      
      <FloatingIcon position={[-2, 1, 0]} icon="✈️" color="#4A90E2" delay={1} />
      <FloatingIcon position={[2, 1.5, 1]} icon="🚢" color="#50E3C2" delay={2} />
      <FloatingIcon position={[0, 2, -2]} icon="📦" color="#F5A623" delay={3} />
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

// Main Component
export default function Logistics3DScene() {
  return (
    <div style={{
      width: '100%',
      height: '500px',
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      margin: '2rem 0'
    }}>
      <Canvas shadows camera={{ position: [0, 1, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '0',
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        fontSize: '14px',
        pointerEvents: 'none',
        textShadow: '0 0 5px rgba(0,0,0,0.5)'
      }}>
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
}

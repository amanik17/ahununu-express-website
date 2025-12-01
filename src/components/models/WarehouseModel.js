import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function WarehouseModel({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const group = useRef();
  
  // Create textures
  const wallTexture = useTexture({
    map: 'textures/concrete_wall_diffuse.jpg',
    normalMap: 'textures/concrete_wall_normal.jpg',
    roughnessMap: 'textures/concrete_wall_roughness.jpg',
  });
  
  // Apply texture settings
  Object.values(wallTexture).forEach(texture => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 5);
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      {/* Main Building */}
      <mesh castShadow receiveShadow position={[0, 2.5, 0]}>
        <boxGeometry args={[10, 5, 20]} />
        <meshStandardMaterial 
          {...wallTexture}
          metalness={0.1}
          roughness={0.8}
          color="#d1d5db"
        />
      </mesh>
      
      {/* Roof */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[0, 5.5, 0]} 
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.2, 0.2, 10.2, 4, 1, true]} />
        <meshStandardMaterial 
          color="#9ca3af" 
          metalness={0.2}
          roughness={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Loading Docks */}
      {[-6, -2, 2, 6].map((x, i) => (
        <group key={i} position={[x, 1, -9.9]} rotation={[0, Math.PI, 0]}>
          <mesh castShadow>
            <boxGeometry args={[1.8, 2, 0.2]} />
            <meshStandardMaterial 
              color="#4b5563" 
              metalness={0.5}
              roughness={0.7}
            />
          </mesh>
          <mesh position={[0, 1.2, -0.5]}>
            <boxGeometry args={[2, 0.4, 1]} />
            <meshStandardMaterial 
              color="#6b7280" 
              metalness={0.3}
              roughness={0.8}
            />
          </mesh>
        </group>
      ))}
      
      {/* Windows */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[-4 + (i % 4) * 2.5, 3.5, 10.1]} 
          rotation={[0, 0, 0]}
        >
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? '#93c5fd' : '#bfdbfe'}
            transparent
            opacity={0.8}
            metalness={0.2}
            roughness={0.1}
            emissive="#3b82f6"
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
      
      {/* Warehouse Doors */}
      <group position={[0, 2.5, 10.1]}>
        <mesh>
          <boxGeometry args={[8, 4, 0.2]} />
          <meshStandardMaterial 
            color="#4b5563" 
            metalness={0.5}
            roughness={0.7}
          />
        </mesh>
        <mesh position={[0, 0, 0.11]}>
          <boxGeometry args={[7.8, 3.8, 0.02]} />
          <meshStandardMaterial 
            color="#6b7280" 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
      
      {/* Ground */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.1, 0]} 
        receiveShadow
      >
        <planeGeometry args={[30, 40]} />
        <meshStandardMaterial 
          color="#6b7280" 
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      
      {/* Trucks */}
      <TruckModel position={[-7, 0, -5]} rotation={[0, Math.PI / 2, 0]} />
      <TruckModel position={[7, 0, 5]} rotation={[0, -Math.PI / 2, 0]} />
      
      {/* Storage Racks */}
      <StorageRacks />
      
      {/* Forklifts */}
      <ForkliftModel position={[3, 0, -3]} rotation={[0, Math.PI / 4, 0]} />
      <ForkliftModel position={[-3, 0, 3]} rotation={[0, -Math.PI / 4, 0]} />
    </group>
  );
}

function TruckModel({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Truck Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[3, 1, 6]} />
        <meshStandardMaterial color="#1e40af" metalness={0.5} roughness={0.7} />
      </mesh>
      
      {/* Truck Cabin */}
      <mesh position={[0, 1.5, 1.5]} castShadow>
        <boxGeometry args={[2.5, 1.5, 3]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.6} roughness={0.6} />
      </mesh>
      
      {/* Wheels */}
      {[-1, 1].map((side) => (
        [2, -1.5].map((pos, i) => (
          <mesh 
            key={`${side}-${i}`} 
            position={[side, 0.5, pos]} 
            rotation={[0, 0, Math.PI / 2]}
            castShadow
          >
            <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
            <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.3} />
          </mesh>
        ))
      ))}
    </group>
  );
}

function ForkliftModel({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Forklift Base */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.5, 0.6, 2.5]} />
        <meshStandardMaterial color="#dc2626" metalness={0.5} roughness={0.7} />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[0, 0.9, 0.3]} castShadow>
        <boxGeometry args={[1.2, 0.8, 1]} />
        <meshStandardMaterial color="#b91c1c" metalness={0.6} roughness={0.6} />
      </mesh>
      
      {/* Forks */}
      <group position={[0, 0.2, -1.5]}>
        <mesh position={[0, 0, -0.5]} castShadow>
          <boxGeometry args={[0.1, 0.1, 2]} />
          <meshStandardMaterial color="#4b5563" metalness={0.8} roughness={0.3} />
        </mesh>
        {[-0.4, 0.4].map((x) => (
          <mesh key={x} position={[x, 0, 0.5]} castShadow>
            <boxGeometry args={[0.1, 0.1, 1]} />
            <meshStandardMaterial color="#4b5563" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </group>
      
      {/* Wheels */}
      {[-0.6, 0.6].map((x) => (
        <mesh 
          key={x} 
          position={[x, 0, 0.6]} 
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <cylinderGeometry args={[0.3, 0.3, 0.3, 16]} />
          <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function StorageRacks() {
  return (
    <group>
      {/* Back Wall Racks */}
      <RackSection position={[0, 2.5, -8]} rotation={[0, 0, 0]} />
      
      {/* Side Wall Racks */}
      <RackSection position={[4.5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} />
      <RackSection position={[-4.5, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  );
}

function RackSection({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Vertical Beams */}
      {[-3, 3].map((x) => (
        <mesh key={`beam-${x}`} position={[x, 0, 0]} castShadow>
          <boxGeometry args={[0.2, 5, 0.2]} />
          <meshStandardMaterial color="#4b5563" metalness={0.7} roughness={0.5} />
        </mesh>
      ))}
      
      {/* Horizontal Shelves */}
      {[0.5, 1.5, 2.5, 3.5, 4.5].map((y) => (
        <mesh key={`shelf-${y}`} position={[0, y - 0.5, 0]} castShadow>
          <boxGeometry args={[6, 0.1, 0.5]} />
          <meshStandardMaterial color="#6b7280" metalness={0.5} roughness={0.6} />
        </mesh>
      ))}
      
      {/* Storage Boxes */}
      {[0, 1, 2].map((i) => (
        <mesh 
          key={`box-${i}`} 
          position={[Math.random() * 4 - 2, 0.3 + i * 1.1, 0.1]} 
          castShadow
        >
          <boxGeometry args={[1, 0.8, 0.8]} />
          <meshStandardMaterial 
            color={['#f59e0b', '#10b981', '#3b82f6'][i]}
            metalness={0.3}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

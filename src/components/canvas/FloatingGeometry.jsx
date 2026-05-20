'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingGeometry() {
  const groupRef = useRef();

  const geometries = useMemo(() => [
    { position: [-4, 2, -3], rotation: [0.5, 0.3, 0], scale: 0.4, type: 'icosahedron' },
    { position: [4, -1, -4], rotation: [0.2, 0.7, 0.1], scale: 0.3, type: 'octahedron' },
    { position: [-3, -3, -2], rotation: [0.8, 0.1, 0.3], scale: 0.25, type: 'tetrahedron' },
    { position: [3, 3, -5], rotation: [0.1, 0.5, 0.8], scale: 0.35, type: 'dodecahedron' },
    { position: [0, -4, -3], rotation: [0.6, 0.2, 0.4], scale: 0.2, type: 'icosahedron' },
  ], []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = geometries[i].rotation[0] + time * (0.1 + i * 0.02);
      child.rotation.y = geometries[i].rotation[1] + time * (0.15 + i * 0.01);
      child.position.y = geometries[i].position[1] + Math.sin(time * 0.5 + i) * 0.3;
    });
  });

  const GeometryMesh = ({ geo }) => {
    const Geometry = {
      icosahedron: <icosahedronGeometry args={[1, 0]} />,
      octahedron: <octahedronGeometry args={[1, 0]} />,
      tetrahedron: <tetrahedronGeometry args={[1, 0]} />,
      dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
    };

    return (
      <mesh
        position={geo.position}
        scale={geo.scale}
      >
        {Geometry[geo.type]}
        <meshStandardMaterial
          color="#38BDF8"
          wireframe
          transparent
          opacity={0.15}
          emissive="#38BDF8"
          emissiveIntensity={0.1}
        />
      </mesh>
    );
  };

  return (
    <group ref={groupRef}>
      {geometries.map((geo, i) => (
        <GeometryMesh key={i} geo={geo} />
      ))}
    </group>
  );
}

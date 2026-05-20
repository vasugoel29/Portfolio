'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 1500, mouse }) {
  const meshRef = useRef();
  const lightRef = useRef();

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const accentColor = new THREE.Color('#38BDF8');
    const secondaryColor = new THREE.Color('#818CF8');
    const dimColor = new THREE.Color('#1f2937');

    for (let i = 0; i < count; i++) {
      // Distribute in a sphere-like volume
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 3 + Math.random() * 4;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 2;

      // Color gradient
      const t = Math.random();
      const color = t < 0.3
        ? accentColor.clone()
        : t < 0.6
          ? secondaryColor.clone()
          : dimColor.clone();
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    const posArray = meshRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Wave motion
      posArray[i3 + 1] += Math.sin(time * 0.3 + posArray[i3] * 0.5) * 0.002;
      posArray[i3] += Math.cos(time * 0.2 + posArray[i3 + 2] * 0.3) * 0.001;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;

    // Mouse-reactive light
    if (lightRef.current && mouse) {
      lightRef.current.position.x = mouse.normalizedX * 3;
      lightRef.current.position.y = mouse.normalizedY * 3;
    }
  });

  return (
    <group>
      <pointLight
        ref={lightRef}
        color="#38BDF8"
        intensity={2}
        distance={8}
      />
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

"use client";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Sparkles, ContactShadows } from "@react-three/drei";
import { useTransform } from "framer-motion";

function ScrollCamera({ scrollYProgress }) {
  const cameraZ = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [10, 8, 12, 9, 14]);
  const cameraY = useTransform(scrollYProgress, [0, 0.5, 1], [2, 3, 1]);
  const cameraX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -2, 2]);

  useFrame(({ camera }) => {
    camera.position.z = cameraZ.get();
    camera.position.y = cameraY.get();
    camera.position.x = cameraX.get();
    camera.lookAt(0, 0, 0);
  });
  return null;
}

const Scene3D = ({ scrollYProgress, children }) => {
  return (
    <Canvas
      camera={{ position: [0, 2, 10], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        intensity={0.8}
        penumbra={1}
        color="#ff6b00"
      />
      <spotLight
        position={[-10, 5, -5]}
        angle={0.3}
        intensity={0.4}
        penumbra={1}
        color="#0066ff"
      />

      <Suspense fallback={null}>
        {children}
        <Environment preset="night" />
      </Suspense>

      <Sparkles count={150} scale={20} size={3} speed={0.3} color="#e8092e" />
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={30}
        blur={2}
        far={6}
        color="#000000"
      />

      <ScrollCamera scrollYProgress={scrollYProgress} />
    </Canvas>
  );
};

export default Scene3D;

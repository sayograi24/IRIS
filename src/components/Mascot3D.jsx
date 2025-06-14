import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function MascotModel({ isEyesCovered }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/mascot.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    if (isEyesCovered && actions["CoverEyes"]) {
      actions["CoverEyes"].reset().fadeIn(0.2).play();
    } else if (actions["Idle"]) {
      actions["Idle"].reset().fadeIn(0.2).play();
    }
  }, [isEyesCovered, actions]);

  return <primitive ref={group} object={scene} />;
}

export default function Mascot3D({ isEyesCovered }) {
  return (
    <Canvas style={{ width: 200, height: 200 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 5, 5]} />
      <MascotModel isEyesCovered={isEyesCovered} />
    </Canvas>
  );
}

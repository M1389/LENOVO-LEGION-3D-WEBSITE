import { Box, OrbitControls, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Legion } from "../../../Components/Models/Lenovo/LEGION";
import StudioLights from "../../../Components/StudioLights";


export default function ModelViewer() {


  
  return (
    <section className="bg-black py-12 ">
      <div className="py-11 flex flex-col items-center">
        <h2 className="text-4xl Orbitron text-white text-center tracking-wider">Take a colser look</h2>
        <img className="w-[55%] mx-auto" src="/ModelPreview/RGB-closerlook-2.png" alt="RGB-light" />
      </div>
      <Canvas
        id="canvas"
        camera={{
          position: [0, 35, 30], // Camera above and behind
          fov: 70,
          near: 0.1,
          far: 1000,
        }}
      >
        <StudioLights />
        <PresentationControls 
          snap={true} 
          speed={1} 
          zoom={1} 
          polar={[-Math.PI , Math.PI]}
          global={true}
          config={{ mass: 2, tension: 400 }} 
          >
          <group position={[-25.15, -9.99, 10.151]} scale={120}>
            <Legion />
          </group>
        </PresentationControls>
        
      </Canvas>
    </section>
  );
}

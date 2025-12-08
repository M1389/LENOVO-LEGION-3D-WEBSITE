import { Box, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Lenovo } from '../../../Components/Models/Lenovo/Lenovo'

export default function ModelViewer() {
  return (
    <section className='bg-white py-12 min-h-[1000px]'>
        <Canvas className='h-full' camera={{position: [0,2,5] ,fov: 100 , near: 0.1 , far:50 }}>
            <Lenovo scale={0.2} position={[0,-1,0]}/>
            <OrbitControls enableZoom={false}/>
            
        </Canvas>
    </section>
  )
}

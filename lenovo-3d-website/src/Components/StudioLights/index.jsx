import { Environment, Lightformer, SpotLight } from '@react-three/drei'
import React from 'react'

export default function StudioLights() {
  return (
    <group>
       <Environment>
        <group>
            <Lightformer 
            form='rect'
            intensity={10}
            position={[10,5,-5]}
            scale={10}
            />
        </group>
        <group>
            <Lightformer 
            form='rect'
            intensity={10}
            position={[-10,5,-5]}
            scale={10}
            />
        </group>
        <group>
            <Lightformer 
            form='rect'
            intensity={10}
            position={[10,-5,-5]}
            scale={10}
            />
        </group>
        <group>
            <Lightformer 
            form='rect'
            intensity={10}
            position={[6,5,-5]}
            scale={10}
            />
        </group>
        </Environment> 
        
    </group>
  )
}

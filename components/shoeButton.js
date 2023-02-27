import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, ContactShadows, Environment, OrbitControls } from "@react-three/drei"

  

        const Models = [
            { title: 'Lady', url: './models/shoes.glb' },
            { title: 'Man', url: './models/leather-shoes.glb' },
            { title: 'Tape Measure', url: './models/tapeMeasure.glb' },
          ]
          
          function Model({ url }) {
            const { scene } = useGLTF(url)
            return <primitive object={scene} />
          }
      
      export default function ButtonShoe() {
    return (
        <div className="w-48">
          <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Model url={'./models/shoes.glb'}/>
            <Environment background />
            <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
            <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      )
}; 
/* eslint-disable react/no-unknown-property */

import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'

/**
 * A rotating cube with sparkles. This component is a mesh that rotates and
 * includes sparkles.
 *
 * The mesh is a cylinder with a standard material and color #9cdba6. The
 * sparkles are configured to have a count of 1000, size of 6, scale of 5, and
 * speed of 0.5. The color of the sparkles is #22dba6 and the noise is set to
 * 0.2.
 *
 * This component uses the useFrame hook to rotate the mesh every frame.
 *
 * @returns A rotating cube with sparkles.
 */
const RotatingCube = () => {
  const meshRef = useRef()
  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="0x9cdba6" />
    <Stars count={200000} speed={0.5} noise={0.2} scale={5} color="#3333a6" size={5} />
    </mesh>
  )
}

/**
 * The main app component that renders a rotating cube with sparkles.
 *
 * The canvas is set to take up the full width and height of the viewport and
 * the display is set to flex. The OrbitControls component is used to allow the
 * user to zoom, pan, and rotate the cube. The cube is rendered with a
 * directional light and a background color of #f0f0f0. The cube itself is
 * rendered with the RotatingCube component.
 */
function App() {

  return (
    <Canvas style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1, 1, 1]} intensity={10} color="#9cdba6" />
      <color attach="background" args={["#f0f0f0"]} />

      <RotatingCube />

    </Canvas>
  )
}

export default App
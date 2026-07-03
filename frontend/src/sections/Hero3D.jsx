import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const COLS = 180
const ROWS = 90

function WaveParticles() {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(COLS * ROWS * 3)
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c
        arr[i * 3 + 0] = (c - COLS / 2) * 0.22   // X
        arr[i * 3 + 1] = 0                          // Y (animated)
        arr[i * 3 + 2] = (r - ROWS / 2) * 0.22    // Z
      }
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.45
    const arr = ref.current.geometry.attributes.position.array
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c
        const x = arr[i * 3 + 0]
        const z = arr[i * 3 + 2]
        arr[i * 3 + 1] =
          Math.sin(x * 0.55 + t)          * 1.4 +
          Math.sin(z * 0.45 + t * 0.8)    * 0.9 +
          Math.sin((x - z) * 0.3 + t * 0.6) * 0.7
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COLS * ROWS}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#cbd5e1"
        transparent
        opacity={0.82}
        sizeAttenuation
      />
    </points>
  )
}

export default function Hero3D() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 7, 11], fov: 58 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#030a12']} />
        <WaveParticles />
      </Canvas>
    </div>
  )
}

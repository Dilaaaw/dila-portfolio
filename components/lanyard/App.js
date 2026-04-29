'use client'
import './index.css'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber'
import { Text, Environment, Sparkles, useTexture } from '@react-three/drei'
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint
} from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })

export default function App() {
  return (
    <div className="responsive-wrapper">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 28 }}>
        <color attach="background" args={['#0f0f22']} />

        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={2} castShadow />

        <Physics gravity={[0, -25, 0]}>
          <Band />
        </Physics>

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

function Band() {
  const band = useRef()
  const fixed = useRef()
  const j1 = useRef()
  const j2 = useRef()
  const j3 = useRef()
  const card = useRef()

  const texture = useTexture('/profilee.png')
  const { width, height } = useThree((state) => state.size)

  const vec = new THREE.Vector3()
  const dir = new THREE.Vector3()

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3()
      ])
  )

  const [dragged, drag] = useState(false)

  const segmentProps = {
    type: 'dynamic',
    canSleep: false,
    colliders: false,
    angularDamping: 6,
    linearDamping: 6
  }

  /* =============================
     ROPE PANJANG PROPORSIONAL
  ============================== */

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.45])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.45])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.45])

  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.0, 0]
  ])

  useFrame((state) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))

      card.current.setNextKinematicTranslation({
        x: vec.x,
        y: vec.y,
        z: vec.z
      })
    }

    if (fixed.current && j1.current && j2.current && j3.current && band.current) {
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.translation())
      curve.points[2].copy(j1.current.translation())
      curve.points[3].copy(fixed.current.translation())

      band.current.geometry.setPoints(curve.getPoints(32))
    }
  })

  return (
    <>
      {/* Anchor lebih tinggi biar tali pas */}
      <group position={[0, 2.8, 0]}>
        <RigidBody ref={fixed} type="fixed" />

        <RigidBody ref={j1} {...segmentProps}>
          <BallCollider args={[0.04]} />
        </RigidBody>

        <RigidBody ref={j2} {...segmentProps}>
          <BallCollider args={[0.04]} />
        </RigidBody>

        <RigidBody ref={j3} {...segmentProps}>
          <BallCollider args={[0.04]} />
        </RigidBody>

        {/* CARD */}
        <RigidBody
          ref={card}
          position={[0, -1.2, 0]}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.75, 1.0, 0.1]} />

          <group
            onPointerDown={() => drag(true)}
            onPointerUp={() => drag(false)}
          >
            {/* Glass Card */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.4, 1.9, 0.16]} />
              <meshPhysicalMaterial
                color="#ffffff"
                transparent
                opacity={0.08}
                transmission={1}
                roughness={0}
                thickness={0.5}
                clearcoat={1}
              />
            </mesh>

            {/* Photo BG */}
            <mesh position={[0, 0.25, 0.1]}>
              <planeGeometry args={[1.0, 1.0]} />
              <meshBasicMaterial color="#1b1b2d" />
            </mesh>

            {/* Photo */}
            <mesh position={[0, 0.25, 0.11]}>
              <planeGeometry args={[0.95, 0.95]} />
              <meshBasicMaterial map={texture} transparent />
            </mesh>

            <Text
              position={[0, -0.55, 0.11]}
              fontSize={0.15}
              color="#ffffff"
              anchorX="center"
            >
              Dila Dahlia
            </Text>

            <Text
              position={[0, -0.75, 0.11]}
              fontSize={0.11}
              color="#ff2fd0"
              anchorX="center"
            >
              Frontend Developer
            </Text>
          </group>
        </RigidBody>
      </group>

      {/* TALI */}
      <mesh ref={band} position={[0, 0, 0.05]}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#ff2fd0"
          depthTest={false}
          resolution={[width, height]}
          lineWidth={0.6}
        />
      </mesh>

      {/* Particle Glow */}
      <Sparkles
        count={30}
        scale={[3, 3, 3]}
        size={1.8}
        speed={0.4}
        color="#ff2fd0"
      />

      {/* Shadow Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.2, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.25} />
      </mesh>
    </>
  )
}
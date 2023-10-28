import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import NavBar from "../Navbar/NavBar";
import SideBar from "../SideBar/SideBar";
import Intro from "../Intro/Intro";

const Models = () => {
  const gltf = useLoader(GLTFLoader, "./public/Models/satellite.gltf");
  return (
    <>
      <Canvas
        gl={{ antialias: false, preserveDrawingBuffer: true }}
        shadows
        camera={{ position: [4, 0, 6], fov: 35 }}
      >
        <ScrollControls pages={4} damping={0.1}>
          <group position={[0, -0.75, 0]}>
            <Center top>
              <primitive
                object={gltf.scene}
                scale={[0.3, 0.3, 0.3]}
                position={[-0.2, 0, 0]}
              />
            </Center>
            <AccumulativeShadows>
              <RandomizedLight position={[2, 5, 5]} />
            </AccumulativeShadows>
          </group>
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
          />
          <Environment preset="city" background blur={0} />
          <Scroll html>
            <NavBar />
            <SideBar />
            <Intro />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default Models;

import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function Car(props) {
  const gltf = useLoader(
    GLTFLoader,

    process.env.PUBLIC_URL + "models/volvo/scene.gltf"
  );

  useEffect(() => {
    gltf.scene.scale.set(0.9, 0.9, 0.9);

    gltf.scene.position.set(0, -0.0035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime() * 2;

    let group = gltf.scene.children[0].children[0].children[0];

    group.children[16].rotation.x = t;
    group.children[17].rotation.x = t;
    group.children[18].rotation.x = t;
    group.children[19].rotation.x = t;
  });

  return <primitive object={gltf.scene} />;
}

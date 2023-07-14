import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function Car(props) {
  const sportsCar = "models/car/scene.gltf";
  const volvo = "models/volvo/scene.gltf";

  // const test = useEffect(() => {
  //   if (props === "1") {
  //     return volvo;
  //   } else {
  //     return sportsCar;
  //   }
  // }, []);

  const gltf = useLoader(
    GLTFLoader,

    process.env.PUBLIC_URL + `${props.car === "1" ? volvo : sportsCar}`
  );

  useEffect(() => {
    if (props.car === "1") {
      gltf.scene.scale.set(0.9, 0.9, 0.9);
    } else {
      gltf.scene.scale.set(0.005, 0.005, 0.005);
    }

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
    //group.children[0 , 2 , 4 , 6]
    //group.children[16 , 17 , 18 , 19]
    let group = gltf.scene.children[0].children[0].children[0];
    if (props.car === "1") {
      group.children[16].rotation.x = t;
      group.children[17].rotation.x = t;
      group.children[18].rotation.x = t;
      group.children[19].rotation.x = t;
    } else {
      group.children[0].rotation.x = t;
      group.children[2].rotation.x = t;
      group.children[4].rotation.x = t;
      group.children[6].rotation.x = t;
    }
  });

  return <primitive object={gltf.scene} />;
}

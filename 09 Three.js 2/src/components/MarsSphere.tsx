import React from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useFrame, useLoader} from "@react-three/fiber";
import * as Three from "three";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh;
  };
  materials: {
    ["Default OBJ.005"]: THREE.MeshStandardMaterial;
  };
};

const MarsSphere = (): JSX.Element => {
  const planet = React.useRef<Three.Mesh>(null!);

  const {nodes, materials} = useGLTF("models/Mars_3D.glb") as GLTFResult;

  const MarsNode = useLoader(GLTFLoader, "models/Mars_3D.glb");

  console.log("MarsNode:", MarsNode);

  useFrame(() => (planet.current.rotation.y += 0.0002));

  return (
    <React.Fragment>
      <mesh
        ref={planet}
        visible={true}
        position={[0, 0, 0]}
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
      />
    </React.Fragment>
  );
};

export default MarsSphere;

useGLTF.preload("models/Mars_3D.glb");

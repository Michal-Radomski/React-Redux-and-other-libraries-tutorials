import React from "react";
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useFrame, useLoader} from "@react-three/fiber";
import * as Three from "three";
import {useGLTF, Html, useProgress} from "@react-three/drei";
import {GLTF} from "three-stdlib";

//* Loader
export function Loader(): JSX.Element {
  const {progress} = useProgress();
  return (
    <Html center>
      <h1 style={{width: "300px", color: "blue", fontWeight: "bold", fontStyle: "italic"}}>
        {progress.toFixed(2)} % loaded...
      </h1>
    </Html>
  );
}

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh;
  };
  materials: {
    ["Default OBJ.005"]: THREE.MeshStandardMaterial;
  };
};

//* Mars_3D
const MarsSphere = (): JSX.Element => {
  const planet = React.useRef<Three.Mesh>(null!);

  const {nodes, materials} = useGLTF("models/Mars_3D.glb") as GLTFResult;
  // console.log("nodes, materials:", nodes, materials);

  //* Unnecessary
  // const MarsNode = useLoader(GLTFLoader, "models/Mars_3D.glb");
  // console.log("MarsNode:", MarsNode);

  useFrame(() => (planet.current.rotation.y += 0.0002));

  return (
    <React.Fragment>
      <mesh
        ref={planet}
        visible={true}
        position={[0, 0, 0]}
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
        onClick={() => console.log("Click nr...")}
      />
    </React.Fragment>
  );
};

export default MarsSphere;

useGLTF.preload("models/Mars_3D.glb");

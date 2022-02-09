import React from "react";
import {MeshPhongMaterial, SphereGeometry} from "three";

const Earth = () => {
  return (
    <React.Fragment>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
      </mesh>
    </React.Fragment>
  );
};

export default Earth;

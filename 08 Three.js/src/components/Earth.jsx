import React from "react";

const Earth = () => {
  return (
    <React.Fragment>
      <ambientLight intensity={0.9} color={0xffffff} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
      </mesh>
    </React.Fragment>
  );
};

export default Earth;

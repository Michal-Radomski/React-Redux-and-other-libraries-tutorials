import React from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import * as THREE from "three";

//- Textures
import EarthDayMap from "../textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../textures/8k_earth_clouds.jpg";

const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
  ]);

  return (
    <React.Fragment>
      <ambientLight intensity={0.9} color={0xffffff} />

      {/* <mesh position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
      </mesh> */}

      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          target
        />
      </mesh>
    </React.Fragment>
  );
};

export default Earth;

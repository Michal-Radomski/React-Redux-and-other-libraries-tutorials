import React from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import * as THREE from "three";

//- Textures
import EarthDayMap from "../textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../textures/8k_earth_clouds.jpg";

const Earth: React.FC<{}> = (): JSX.Element => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
  ]);

  return (
    <React.Fragment>
      <ambientLight intensity={0.9} color={0xffffff} />
      <Stars
        radius={200} // Radius of the inner sphere (default=100)
        depth={60} // Depth of area where stars should fit (default=50)
        count={10000} // Amount of stars (default=5000)
        factor={7} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade={true} // Faded dots (default=false)
      />
      <mesh position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, 3]}>
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
        />
      </mesh>
    </React.Fragment>
  );
};

export default Earth;

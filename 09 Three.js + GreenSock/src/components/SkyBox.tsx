//* Skybox generated by: https://tools.wwwtyro.net/space-3d/index.html

import {useThree} from "@react-three/fiber";
import {CubeTextureLoader} from "three";

const SkyBox: React.FC<{}> = () => {
  const {scene} = useThree();
  // console.log("scene:", scene);

  scene.background = new CubeTextureLoader()
    .setPath("/skybox_images/")
    //* Order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z:
    .load(["right.png", "left.png", "back.png", "front.png", "top.png", "bottom.png"]);

  return null;
};

export default SkyBox;

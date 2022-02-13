import React from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";

import "./App.scss";

import MarsSphere from "./components/MarsSphere";
import {Loader} from "./components/MarsSphere";
import SkyBox from "./components/SkyBox";
import CameraControls from "./components/CameraControls";

import StarWarsCrawl from "./components/StarWarsCrawl/StarWarsCrawl";

const CanvasContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

function App(): JSX.Element {
  return (
    <>
      <CanvasContainer>
        <Canvas>
          <CameraControls />
          {/* //- Sunlight Color: #F4E99B */}
          <directionalLight intensity={0.7} color={0xf4e99b} />
          <ambientLight intensity={0.6} color={0xf4e99b} />
          <React.Suspense fallback={<Loader />}>
            <MarsSphere />
          </React.Suspense>
          <SkyBox />
        </Canvas>
      </CanvasContainer>
      <StarWarsCrawl />
    </>
  );
}

export default App;

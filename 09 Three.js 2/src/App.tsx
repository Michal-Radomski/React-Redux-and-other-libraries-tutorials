import React from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";

import "./App.scss";

import MarsSphere from "./components/MarsSphere";
import {Loader} from "./components/MarsSphere";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <CanvasContainer>
        <Canvas>
          <directionalLight intensity={0.9} color={0x404040} />
          <ambientLight intensity={0.6} color={0x404040} />
          <React.Suspense fallback={<Loader />}>
            <MarsSphere />
          </React.Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;

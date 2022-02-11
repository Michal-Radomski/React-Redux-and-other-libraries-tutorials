import React from "react";

import styled from "styled-components";
import {Canvas} from "@react-three/fiber";

import "./App.scss";

import MarsSphere from "./components/MarsSphere";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <CanvasContainer>
        <Canvas>
          <React.Suspense fallback={null}>
            <MarsSphere />
          </React.Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;

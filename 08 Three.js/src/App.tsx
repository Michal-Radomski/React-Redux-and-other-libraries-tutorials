import React from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";

import "./App.scss";
import Earth from "./components/Earth";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <React.Fragment>
      <CanvasContainer>
        <Canvas>
          {/* {console.log("Canvas:", Canvas)} */}
          {/* <React.Suspense fallback={null}></React.Suspense> */}
          <React.Suspense fallback={<h1>Loading...</h1>}></React.Suspense>
          <Earth />
          {/* {console.log("Earth:", Earth)} */}
        </Canvas>
      </CanvasContainer>
    </React.Fragment>
  );
}

export default App;

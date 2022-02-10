import React from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";

import "./App.scss";
import Earth from "./components/Earth";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

//* WebGL compatibility check
if (typeof WebGLRenderingContext === "undefined") {
  // This browser doesn't even know what WebGL is
  console.log("This browser doesn't even know what WebGL is");
} else {
  let WebGL = document.createElement("canvas").getContext("webgl");
  console.log("WebGL:", WebGL);
  if (!WebGL) {
    // webgl failed to initialize for any number of reasons
    // including it's turned off, the browser blacklisted the drivers,
    // it's out of memory, other.
    console.log("WebGL failed to initialize");
  }
}

function App(): JSX.Element {
  return (
    <>
      <CanvasContainer>
        <Canvas>
          {/* {console.log("Canvas:", Canvas)} */}
          <React.Suspense fallback={null}>
            <Earth />
            {/* {console.log("Earth:", Earth)} */}
          </React.Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;

import React from "react";

import "./App.scss";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Box1 />
      <Box2 />
      <Box3 />
    </React.Fragment>
  );
}

export default App;

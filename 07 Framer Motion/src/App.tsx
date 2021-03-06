import React from "react";

import "./App.scss";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
import Box5 from "./components/Box5";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
    </React.Fragment>
  );
}

export default App;

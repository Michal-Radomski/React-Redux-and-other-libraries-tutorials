import React from "react";

import "./App.scss";
import Box1 from "./components/Box1/Box1";
import Box2 from "./components/Box2/Box2";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Box1 />
      <Box2 />
    </React.Fragment>
  );
}

export default App;

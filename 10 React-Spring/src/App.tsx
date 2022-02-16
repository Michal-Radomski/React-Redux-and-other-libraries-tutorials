import React from "react";
import "./App.scss";

import UseSpring from "./components/useSpring/UseSpring";
import UseSprings from "./components/useSprings/UseSprings";
import UseTrail from "./components/useTrail/UseTrail";
import SpringClass from "./components/classComponents/SpringClass";
import Toggle from "./components/Toggle";

const globalStyle = {
  border: "2px solid green",
  height: "280px",
  backgroundColor: "inherit",
  color: "inherit",
};

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div style={globalStyle}>
        <UseSpring />
      </div>
      <div style={globalStyle}>
        <UseSprings />
      </div>
      <div style={globalStyle}>
        <UseTrail />
      </div>
      <SpringClass />
      <Toggle />
    </React.Fragment>
  );
}

export default App;

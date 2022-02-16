import React from "react";
import "./App.scss";

import UseSpring from "./components/useSpring/UseSpring";
import UseSprings from "./components/useSprings/UseSprings";
import UseTrail from "./components/useTrail/UseTrail";
import SpringClass from "./components/classComponents/SpringClass";
import Toggle from "./components/Toggle";
import Picture from "./components/Picture";
import UseSpring2 from "./components/UseSpring2";

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
      <hr />
      <Toggle />
      <hr />
      <Picture />
      <div style={globalStyle}>
        <UseSpring2 />
      </div>
    </React.Fragment>
  );
}

export default App;

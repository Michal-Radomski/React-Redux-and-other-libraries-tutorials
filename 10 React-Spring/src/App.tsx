import React from "react";
import "./App.scss";

import UseSpring from "./components/useSpring/UseSpring";

const globalStyle = {
  border: "2px solid green",
  height: "300px",
  backgroundColor: "inherit",
  color: "inherit",
};

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div style={globalStyle}>
        <UseSpring />
      </div>
    </React.Fragment>
  );
}

export default App;

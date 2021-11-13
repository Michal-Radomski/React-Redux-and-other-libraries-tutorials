import React from "react";

import "./App.scss";

import Button from "./CSSinJS";
import {Button2} from "./CSSinJS2";
import {Component3} from "./CSSinJS3";
import ArticleText from "./Emotion2";
import Emotion3 from "./Emotion3";

import Button4 from "./Emotion1";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div>
        <h2>CSSinJS Elements</h2>
        <Button />
        <br />
        <Button2 />
        <br />
        <Component3 />
        <br />
        <hr />
      </div>
      <div>
        <h2>Emotion Elements</h2>
        <Button4>Button 4</Button4>
        <ArticleText />
        <Emotion3 />
      </div>
    </React.Fragment>
  );
}

export default App;

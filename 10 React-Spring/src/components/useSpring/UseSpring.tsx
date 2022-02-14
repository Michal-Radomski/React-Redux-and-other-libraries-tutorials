import React from "react";
import {useSpring, animated as a} from "react-spring";

import "./styles.scss";

const UseSpring = (): JSX.Element => {
  const [greetingStatus, displayGreeting] = React.useState<boolean>(false);
  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -500,
  });

  // console.log("greetingStatus:", greetingStatus);
  // console.log("contentProps:", contentProps);

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => displayGreeting((a: boolean) => !a)} className="button">
          Click Here
        </button>
      </div>
      {!greetingStatus ? (
        <div className="Intro">Click button below</div>
      ) : (
        <a.div className="box" style={contentProps}>
          <h1>Hey there ! React Spring is awesome.</h1>
        </a.div>
      )}
    </div>
  );
};

export default UseSpring;

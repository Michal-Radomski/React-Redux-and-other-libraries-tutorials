import React from "react";
import {animated, useSpring} from "react-spring";

function Toggle(): JSX.Element {
  const [isToggled, setIsToggled] = React.useState<boolean>(false);

  const fade = useSpring({
    color: isToggled ? "#000" : "green",
    transform: isToggled ? "translate3d(0, 15px, 0)" : "translate3d(0, 15px, 0)",
    fontSize: isToggled ? "2rem" : "3rem",
  });

  return (
    <React.Fragment>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      <animated.h1 style={fade}>Hello</animated.h1>
    </React.Fragment>
  );
}

export default Toggle;

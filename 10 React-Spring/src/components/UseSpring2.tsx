import React from "react";
import {useSpring, animated} from "react-spring";

const UseSpring2 = (): JSX.Element => {
  const animation = useSpring({
    config: {duration: 1500},
    from: {opacity: 0},
    to: {opacity: 1},
  });

  const colorAnimation = useSpring({
    config: {duration: 1500},
    from: {color: "blue"},
    to: {color: `rgb(255,0,0)`},
  });

  const multiAnimation = useSpring({
    config: {duration: 1500},
    from: {opacity: 0, color: "red"},
    to: [
      {opacity: 1, color: "#ffaaee"},
      {opacity: 1, color: "red"},
      {opacity: 0.5, color: "#008000"},
      {opacity: 0.8, color: "black"},
    ],
  });

  return (
    <React.Fragment>
      <animated.h1 style={animation}>Hello World</animated.h1>
      <animated.h1 style={colorAnimation}>Hello World</animated.h1>
      <animated.h1 style={multiAnimation}>Hello World</animated.h1>
    </React.Fragment>
  );
};

export default UseSpring2;

import React from "react";
import {useSpring, animated} from "react-spring";

const UseSpring3 = (): JSX.Element => {
  const [on, toggle] = React.useState<boolean>(false);

  const {xy, c} = useSpring({
    config: {duration: 1500},
    from: {xy: [0, 0], c: "green"},
    xy: on ? [800, 200] : [0, 0],
    c: on ? "red" : "green",
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: xy.interpolate((x: number, y: number) => `translate(${x}px, ${y}px)`),
          color: c.interpolate((c: string) => c),
        }}
      >
        {!on ? "I'm here" : "Now I'm over here"}
      </animated.h1>
      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
};

export default UseSpring3;

import React from "react";
import {animated, config, useSpring} from "react-spring";

const UseSpring4 = (): JSX.Element => {
  const [on, toggle] = React.useState<boolean>(false);

  // @ts-ignore
  const {xy, c} = useSpring({
    // config: {duration: 1500},    //* Variant 1
    // config: {                    //* Variant 2
    //   mass: 5,
    //   tension: 50,
    //   friction: 25,
    //   clamp: true,
    // },
    config: config.molasses, //* Variant 3
    from: {x: [0, 0], c: 0},
    xy: on ? 1 : 0,
    c: on ? 1 : 0,
  });

  // console.log("x, c:", x, c);

  return (
    <div>
      <animated.h1
        style={{
          transform: xy
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, 500, 200, 800, 500],
            })
            .interpolate((x: number, _y: number) => `translateX(${x}px)`),

          color: c
            .interpolate({
              range: [0, 0.5, 1],
              output: ["red", "blue", "green"],
            })
            .interpolate((c: string) => c),
        }}
      >
        {!on ? "I'm here" : "Now don't know where I'm going"}
      </animated.h1>
      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
};

export default UseSpring4;

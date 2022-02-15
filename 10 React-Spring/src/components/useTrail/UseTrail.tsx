import React from "react";
import {useTrail, animated} from "react-spring";
import "./styles.scss";

const items = ["Item1", "Item2", "Item3", "Item4"];
const config = {mass: 5, tension: 2000, friction: 200, duration: 1000};

function UseTrail(): JSX.Element {
  const [toggle, set] = React.useState<boolean>(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: {opacity: 0, x: 20, height: 0},
  });

  return (
    <div className="trails-main" onClick={() => set((state: boolean) => !state)}>
      <div>
        {trail.map(({x, height, ...rest}, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            {/* {console.log("x:", x)} */}
            <animated.div style={{height}}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default UseTrail;

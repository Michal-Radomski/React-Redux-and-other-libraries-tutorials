import React from "react";
import {animated, useSprings} from "react-spring";

const items = [
  {text: "foo", opacity: 0.3, id: 1, color: "red"},
  {text: "bar", opacity: 0.6, id: 2, color: "green"},
  {text: "baz", opacity: 0.9, id: 3, color: "blue"},
  {text: "test", opacity: 0.1, id: 4, color: "black"},
];

function UseSprings(): JSX.Element {
  const [springs, api] = useSprings(items.length, (index) => ({
    opacity: items[index].opacity,
    color: items[index].color,
    from: {opacity: 0, color: "black"},
  }));

  return (
    <React.Fragment>
      <button onClick={() => api.start((_index) => ({opacity: 1}))}>start</button>
      <button onClick={() => api.stop()}>stop</button>
      {springs.map((props, index) => (
        <animated.div style={props} key={index}>
          {items[index].text}
        </animated.div>
      ))}
    </React.Fragment>
  );
}
export default UseSprings;

import React from "react";
import {Spring, animated} from "react-spring";

class SpringClass extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Spring
        loop={true}
        delay={100}
        config={{duration: 500}}
        from={{opacity: 0, color: "red"}}
        to={[
          {opacity: 1, color: "#ffaaee"},
          {opacity: 0, color: "rgb(14,26,19)"},
        ]}
      >
        {(styles) => (
          <animated.div style={styles}>
            <h1 style={{textAlign: "center"}}>I will fade in and out</h1>
          </animated.div>
        )}
      </Spring>
    );
  }
}

export default SpringClass;

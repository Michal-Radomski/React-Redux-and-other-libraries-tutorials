import React from "react";
import {motion} from "framer-motion";

function Box1(): JSX.Element {
  const [isAnimated, setIsAnimated] = React.useState<boolean>(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        initial={{opacity: 0.2}}
        animate={{
          x: isAnimated ? "1000px" : 0,
          opacity: isAnimated ? 1 : 0.2,
          // backgroundColor: "blue",
          // scale: 1.5,
          rotate: isAnimated ? 360 : 0,
        }}
        transition={{
          stiffness: 400,
          type: "spring",
          damping: 10,
        }}
        onClick={() => {
          setIsAnimated(!isAnimated);
        }}
      >
        Box1
      </motion.div>
    </div>
  );
}

export default Box1;

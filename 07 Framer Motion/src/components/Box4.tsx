import {motion} from "framer-motion";

function Box4(): JSX.Element {
  const boxVariant = {
    name1: {
      x: 100,
      scale: 1.5,
      backgroundColor: "yellow,",
    },
    name2: {
      x: 800,
      scale: 0.3,
      backgroundColor: "orchid",
    },
  };

  return (
    <div className="box-container">
      <motion.div className="box" variants={boxVariant} initial="name1" animate="name2">
        Box4
      </motion.div>
    </div>
  );
}

export default Box4;

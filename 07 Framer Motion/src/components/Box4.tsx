import {motion} from "framer-motion";

function Box4(): JSX.Element {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
      >
        Box4
      </motion.div>
    </div>
  );
}

export default Box4;

import {motion} from "framer-motion";

function Box2(): JSX.Element {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.8}}
        drag={true}
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
        //  drag="y"
      >
        Box2
      </motion.div>
    </div>
  );
}

export default Box2;

import {motion} from "framer-motion";

function Box3(): JSX.Element {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      // transition: {
      //   delay: 1,
      // },
    },
  };

  return (
    <div className="box-container">
      <motion.div className="box" variants={boxVariant} initial="hidden" animate="visible">
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              className="boxItem"
              variants={listVariant}
              // initial="hidden" animate="visible"
              key={box}
            >
              {box}
            </motion.li>
          );
        })}
        Box3
      </motion.div>
    </div>
  );
}

export default Box3;

// function Box3(): JSX.Element {
//   const boxVariant = {
//     name1: {
//       x: 100,
//       scale: 1.5,
//       backgroundColor: "yellow,",
//     },
//     name2: {
//       x: 800,
//       scale: 0.3,
//       backgroundColor: "orchid",
//     },
//   };

//   return (
//     <div className="box-container">
//       <motion.div className="box" variants={boxVariant} initial="name1" animate="name2">
//         Box3
//       </motion.div>
//     </div>
//   );
// }

// export default Box3;

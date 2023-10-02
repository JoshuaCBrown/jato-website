import { React, useState } from "react";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";

function AnimatedNavImg({ imgs, clickHandler, userChoice }) {
  const selectedAnim = {
    exit: { opacity: 0.3 },
    transition: { duration: 1 },
  };

  const unselectedAnim = {
    exit: { opacity: 0 },
  };

  const selectedVariant = {
    exit: {
      opacity: 1,
      // scale: 1.5, // You can adjust the scale as needed
      // x: '50%',  // Move the image horizontally to the center of the screen
      // y: '50%',  // Move the image vertically to the center of the screen
      // position: "absolute",
      transition: {
        type: "spring",
        // damping: 15,
        stiffness: 100,
        duration: 1,
      },
    },
  };

  const unselectedVariant = {
    exit: {
      opacity: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 1,
      },
    },
  };

  return (
    <ul>
      {imgs.map((item) => (
        <motion.li
          key={item.imgId}
          className={userChoice === item.imgId ? "selectednavdiv" : "navdiv"}
          layout
          animate="animate"
          variants={
            item.imgId === userChoice ? selectedVariant : unselectedVariant
          }
          exit="exit"
          transition="transition"
        >
          <div
            // className="navdiv"
            onClick={() => clickHandler(item.imgId)}
            hovertitle={item.hoverTitle}
            key={item.imgId}
          >
            <Link to={item.imgLink}>
              <motion.img
                src={item.imgSrc}
                className="navimg"
                alt={item.imgAlt}
                enter={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                variants={
                  userChoice === item.imgId ? selectedAnim : unselectedAnim
                }
                exit="exit"
                transition={{ duration: 1 }}
              />
            </Link>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
export default AnimatedNavImg;

// function AnimatedNavImg({ imgSrc, imgAlt, imgId, userChoice }) {
//   const selectedAnim = {
//     exit: { opacity: 1, scale: 2, x: '50%', y: '50%' },
//   };

//   const unselectedAnim = {
//     exit: { opacity: 0 },
//   };

//   return (
//     <>
//       <motion.img
//         src={imgSrc}
//         className="navimg"
//         alt={imgAlt}
//         enter={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         variants={userChoice === imgId ? selectedAnim : unselectedAnim}
//         exit="exit"
//         transition={{ duration: 2 }}
//       />
//     </>
//   );
// }
// export default AnimatedNavImg;

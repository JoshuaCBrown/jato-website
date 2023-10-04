import { React, useState } from "react";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";

function AnimatedNavImg({ imgs, clickHandler, userChoice, choiceMade }) {
  const selectedAnim = {
    exit: { opacity: 0.3 },
    layout: true,
    transition: { duration: 4 },
  };

  const unselectedAnim = {
    exit: { opacity: 0 },
    transition: { duration: 5 },
  };

  const exitVariant = {
    opacity: <div className="5"></div>
  }

  const selectedVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
      duration: 3,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 3,
      },
    },
    transition: { duration: 4 }
  };

  const unselectedVariant = {
    exit: {
      opacity: 0,
    },
    transition: {
      type: "spring",
      duration: 4,
    },
  };

  const itemVisibility = (itemId) => {
    if (choiceMade === true && userChoice === itemId) {
      return "selected-li";
    } else if (choiceMade === true && userChoice !== itemId) {
      return "hidden-li";
    } else {
      return "nav-li";
    }
  };

  return (
    <ul>
      {imgs.map((item) => (
        <motion.li
          key={item.imgId}
          className={itemVisibility(item.imgId)}
          // animate="animate"

          // variants={
          //   item.imgId === userChoice ? selectedVariant : unselectedVariant
          // }
          layout
          transition={{
            layout: {
              duration: .25,
              ease: 'easeOut',
            }
          }}
          exit={{ opacity: 1 }}
          // exit={exitLayout(item.imgId)}
          // transition={{ duration: 3 }}
        >
          <div
            className="navdiv"
            onClick={() => clickHandler(item.imgId)}
            hovertitle={item.hoverTitle}
            key={item.liKey}
          >
            <Link to={item.imgLink}>
            <img src={item.imgSrc} className="navimg" alt={item.imgAlt} />
            {/* <motion.img
                src={item.imgSrc}
                className="navimg"
                alt={item.imgAlt}
                enter={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                variants={
                  userChoice === item.imgId ? selectedAnim : unselectedAnim
                }
                exit="exit"
                transition="transition"
              /> */}
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

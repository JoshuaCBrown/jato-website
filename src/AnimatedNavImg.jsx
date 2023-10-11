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
    opacity: <div className="5"></div>,
  };

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
    transition: { duration: 4 },
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

  const opacityVariants = {
    hover: {
      opacity: 0,
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

  const imgVisibility = (itemId) => {
    if (choiceMade === true && userChoice === itemId) {
      return "selected-img";
    } else if (choiceMade === true && userChoice !== itemId) {
      return "hidden-img";
    } else {
      return "navimg";
    }
  };

  return (
    <ul>
      {imgs.map((item, i) => (
        <motion.li
          key={item.imgId}
          className={itemVisibility(item.imgId)}
          // animate="animate"

          // variants={
          //   item.imgId === userChoice ? selectedVariant : unselectedVariant
          // }
          layout
          transition={{
            duration: 0.5,
            layout: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          exit={{ opacity: 1 }}
          // exit={exitLayout(item.imgId)}
          // transition={{ duration: 3 }}
        >
          <Link to={item.imgLink}>
            <motion.div
              className="navdiv"
              onClick={() => clickHandler(item.imgId)}
              // hovertitle={item.hoverTitle}
              key={item.liKey}
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 - i * 0.1 }}
              whileHover="hover"
            >
              {/* <img src={item.imgSrc} className="navimg" alt={item.imgAlt} /> */}
              <motion.img
                src={item.imgSrc}
                className={imgVisibility(item.imgId)}
                alt={item.imgAlt}
                layout
                transition={{
                  duration: 0.5,
                  layout: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
              />

              {/* <motion.div
                className="hoverino"
                whileHover={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              > */}
                <h2 className="cat-title">{choiceMade === true ? '' : item.hoverTitle}</h2>
              {/* </motion.div> */}
            </motion.div>
          </Link>
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

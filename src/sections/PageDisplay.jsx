import { React, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backImg from "../imgs/nav/back0.png"
// import "./style/About.css";

function PageDisplay({ jatoTitle, jatoPage, jatoBg }) {
  // const [rotate, setRotate] = useState(false);

  return (
    <>
      <div className="container">
        <div className="inner">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
            className="content-container"
          >
            <div className="jato-content">
              <div className="content-title-header">
                <Link to="/">
                  <button className="back-btn">
                    <img src={backImg} alt="Go back/Exit" />
                  </button>
                </Link>
                <h1>{jatoTitle}</h1>
                <div></div>
              </div>

              <div className="jato-content-child">{jatoPage}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0.1 }}
            layout
            exit={{ opacity: 0 }}
            transition={{
              duration: .5,
              layout: {
                duration: .5,
              },
            }}
            className="content-div"
          >
            <img src={jatoBg} className="bg-img" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default PageDisplay;

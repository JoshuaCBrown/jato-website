import { React, useState } from "react";
import { motion } from "framer-motion";
import "../style/About.css";
import aboutUsImg from "../imgs/new/boutitboutit.png";

// import "./style/About.css";

function AboutJato() {
  // const [rotate, setRotate] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="inner">
          <div className="content-div">
            <img src={aboutUsImg} className="bg-img" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutJato;

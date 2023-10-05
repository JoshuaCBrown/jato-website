import { React, useState } from "react";
import { motion } from "framer-motion";
import aboutUsImg from "../imgs/new/boutitboutit.png";

// import "./style/About.css";

function AboutJato() {
  // const [rotate, setRotate] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: .3 }}
        layout
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 1,
          layout: {
            duration: 1
          }
        }}
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

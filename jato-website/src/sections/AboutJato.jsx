import { React, useState } from "react";
import { motion } from "framer-motion";
import "../style/About.css";
import aboutUsImg from "../imgs/new/boutitboutit.png";

function AboutJato() {
  // const [rotate, setRotate] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <div>
          <h1>About Us</h1>
        </div>
        <motion.div
          animate={{ rotate: [0, 200, 150, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="motion"
        ></motion.div>
      </motion.div>
    </>
  );
}

export default AboutJato;

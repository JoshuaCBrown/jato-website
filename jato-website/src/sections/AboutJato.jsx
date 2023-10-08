import { React, useState } from "react";
import { motion } from "framer-motion";
import aboutUsImg from "../imgs/new/boutitboutit.png";
// import "./style/About.css";
import PageDisplay from "./PageDisplay";
import AboutContent from "../sections/content/AboutContent";

function AboutJato() {
  const aboutContent = <AboutContent />;
  return (
    <>
      <PageDisplay
        jatoTitle="ABOUT"
        jatoPage={aboutContent}
        jatoBg={aboutUsImg}
      />
    </>
  );
}

export default AboutJato;
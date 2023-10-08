import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Home";

import AboutJato from "./sections/AboutJato";
import ContactJato from "./sections/ContactJato";
import Listen from "./sections/ListenToJato";
import Watch from "./sections/WatchJato";
import Press from "./sections/JatoPress";
import Merch from "./sections/JatoMerch";
import SocialLinks from "./SocialLinks";
import headerImg from "./imgs/titleheadertwo.png";
import AnimatedRoutes from "./AnimatedRoutes";
import "./style/TestApp.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={headerImg} id="header-img" />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 4 }}
        className="router"
      >
        <AnimatedRoutes />
      </motion.div>
      <div className="footer">
        <div className="bottom-border">
          <div className="social-links-div">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

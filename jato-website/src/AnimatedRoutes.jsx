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
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
// import "./style/App.css"
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="aboutjato" element={<AboutJato />} />
            <Route path="contactjato" element={<ContactJato />} />
            <Route path="listentojato" element={<Listen />} />
            <Route path="watchjato" element={<Watch />} />
            <Route path="jatomerch" element={<Merch />} />
            <Route path="jatopress" element={<Press />} />
          </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;

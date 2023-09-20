import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";

import AboutJato from "./sections/AboutJato";
import ContactJato from "./sections/ContactJato";
import Listen from "./sections/ListenToJato";
import Watch from "./sections/WatchJato";
import Press from "./sections/JatoPress";
import Merch from "./sections/JatoMerch";

import headerImg from "./imgs/titleheadertwo.png"

import "./App.css";

function App() {
  return (
    <>
    <div className="header">
      <Link to="/">
      <img src={headerImg} id="header-img" />
      </Link>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutjato" element={<AboutJato />} />
        <Route path="contactjato" element={<ContactJato />} />
        <Route path="listentojato" element={<Listen />} />
        <Route path="watchjato" element={<Watch />} />
        <Route path="jatomerch" element={<Merch />} />
        <Route path="jatopress" element={<Press />} />
      </Routes>
    </>
  );
}

export default App;

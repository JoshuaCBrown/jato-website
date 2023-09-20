import { React, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import aboutUsImg from "./imgs/aboutus.png";
import contactImg from "./imgs/contactjato.png";
import listenImg from "./imgs/listentojato.png";
import watchImg from "./imgs/watchjato.png";
import merchImg from "./imgs/jatomerch.png";
import pressImg from "./imgs/jatopress.png";

function Home() {
  const navImgs = [
    {
      imgLink: "aboutjato",
      imgSrc: aboutUsImg,
      imgAlt: "About Jack and the Other",
      imgId: "aboutjato",
    },
    {
      imgLink: "contactjato",
      imgSrc: contactImg,
      imgAlt: "Contact Jack and the Other",
      imgId: "contactjato",
    },
    {
      imgLink: "listentojato",
      imgSrc: listenImg,
      imgAlt: "Listen to Jack and the Other",
      imgId: "listentojato",
    },
    {
      imgLink: "watchjato",
      imgSrc: watchImg,
      imgAlt: "Watch Jack and the Other",
      imgId: "watchjato",
    },
    {
      imgLink: "jatomerch",
      imgSrc: merchImg,
      imgAlt: "Jack and the Other Merchandise",
      imgId: "jatomerch",
    },
    {
      imgLink: "jatopress",
      imgSrc: pressImg,
      imgAlt: "Jack and the Other Press",
      imgId: "jatopress",
    },
  ];

  return (
    <>
      <div className="homemenu">
        <ul>
          {navImgs.map((item) => (
            <li key={item.imgId}>
              <div className="navdiv">
                <Link to={item.imgLink}>
                  <img src={item.imgSrc} className="navimg" alt={item.imgAlt} />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;

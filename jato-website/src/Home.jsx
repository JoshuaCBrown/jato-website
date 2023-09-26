import { React, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
// import aboutUsImg from "./imgs/new/about-scl.png";
// import contactImg from "./imgs/new/contact-scl.png";
// import listenImg from "./imgs/new/listen-scl.png";
// import watchImg from "./imgs/new/watch-scl.png";
// import merchImg from "./imgs/new/merch-scl.png";
// import pressImg from "./imgs/new/press-scl.png";
import aboutUsImg from "./imgs/new/boutitboutit.png";
import contactImg from "./imgs/new/contactscl.png";
import listenImg from "./imgs/new/listenscl.png";
import watchImg from "./imgs/watchjato.png";
import merchImg from "./imgs/new/merchscl.png";
import pressImg from "./imgs/new/pressscl.png";




function Home() {
  const navImgs = [
    {
      imgLink: "aboutjato",
      imgSrc: aboutUsImg,
      imgAlt: "About Jack and the Other",
      imgId: "aboutjato",
      hoverTitle: "About",
    },
    {
      imgLink: "contactjato",
      imgSrc: contactImg,
      imgAlt: "Contact Jack and the Other",
      imgId: "contactjato",
      hoverTitle: "Contact",
    },
    {
      imgLink: "listentojato",
      imgSrc: listenImg,
      imgAlt: "Listen to Jack and the Other",
      imgId: "listentojato",
      hoverTitle: "Listen",
    },
    {
      imgLink: "watchjato",
      imgSrc: watchImg,
      imgAlt: "Watch Jack and the Other",
      imgId: "watchjato",
      hoverTitle: "Look",
    },
    {
      imgLink: "jatomerch",
      imgSrc: merchImg,
      imgAlt: "Jack and the Other Merchandise",
      imgId: "jatomerch",
      hoverTitle: "Merch",
    },
    {
      imgLink: "jatopress",
      imgSrc: pressImg,
      imgAlt: "Jack and the Other Press",
      imgId: "jatopress",
      hoverTitle: "Press",
    },
  ];

  return (
    <div className="homemenu">
      <ul>
        {navImgs.map((item) => (
          <li key={item.imgId}>
            <div className="navdiv" hovertitle={item.hoverTitle}>
              <Link to={item.imgLink}>
                <img src={item.imgSrc} className="navimg" alt={item.imgAlt} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

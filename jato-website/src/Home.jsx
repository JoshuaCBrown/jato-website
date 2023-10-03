import { React, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import watchImg from "./imgs/new/watchscl.png";
import aboutUsImg from "./imgs/new/boutitboutit.png";
import contactImg from "./imgs/new/contactscl.png";
import listenImg from "./imgs/new/listenscl.png";
import merchImg from "./imgs/new/merchscl.png";
import pressImg from "./imgs/new/press2scl.png";
import { motion } from "framer-motion";
import AnimatedNavImg from "./AnimatedNavImg";

function Home() {
  const [navImgs, setNavImgs] = useState([
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
  ]);

  const [userChoice, setUserChoice] = useState("");
  const [choiceMade, setChoiceMade] = useState(false);

  function clickHandler(itemId) {
    const newArr = [];
    const selectedImg = navImgs.find((item) => itemId === item.imgId);
    newArr.push(selectedImg);
    console.log(newArr);
    setNavImgs(newArr);
    console.log(itemId);
    setUserChoice(itemId);
    setChoiceMade(true);

  }

  return (
    <div className="homemenu" key="homemenu">
      <AnimatedNavImg
        imgs={navImgs}
        clickHandler={clickHandler}
        userChoice={userChoice}
        choiceMade={choiceMade}
      />
    </div>
  );
}
export default Home;

// return (
//   <div className="homemenu" key="homemenu">
//     <ul>
//       {navImgs.map((item) => (
//         <li key={item.imgId}>
//           <motion.div
//             className="navdiv"
//             onClick={() => clickHandler(item.imgId)}
//             hovertitle={item.hoverTitle}
//             key={item.imgId}
//             layout
//             transition={{ duration: 1 }}
//           >
//             <Link to={item.imgLink}>
//               <AnimatedNavImg imgSrc={item.imgSrc} imgAlt={item.imgAlt} imgId={item.imgId} userChoice={userChoice} />
//             </Link>
//           </motion.div>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// }

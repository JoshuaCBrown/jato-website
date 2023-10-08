import { React, useState } from "react";
import { motion } from "framer-motion";
import aboutUsImg from "../imgs/new/boutitboutit.png";
// import "./style/About.css";
import PageDisplay from "./PageDisplay";
import AboutContent from "./AboutContent";

function AboutJato() {
  // const [rotate, setRotate] = useState(false);
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

{
  /* <div className="container">
<div className="inner">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="content-container"
    >
    <div className="jato-content">
      <div className="jato-content-child">
    <h1>ABOUT</h1>
    <h2>
      JACK AND THE OTHER IS AN ATLANTA-BASED INDIE ELECTRONIC DUO
      COMPRISED OF BROTHERS JACK AND CAL BROWN.
    </h2>
    <p>
      JATO&apos;s music is a balanced fusion of experimental pop, lo-fi
      jazz, alternative R&B, psychedelic rock, and downtempo electronica
      featuring charismatic production, soul-laden vocals, and a broad
      range of artistic influence both classic and modern. Utilizing
      live instrumentation and electronic sound design, JATO&apos;s
      music is an organic marriage of styles intersecting creative
      experimentation with approachable familiarity. With comparisons to
      acts such as Glass Animals, alt-J, Royal Canoe, Stoplight
      Observations and Chet Faker, the end product of their
      collaboration is a nuanced exploration of the space between
      genres.
    </p>
    <blockquote>
      The interesting sound of Altanta’s Jack and the Other had us
      hooked immediately with their killer groove and headbobbing
      goodness. Mixing genres breathlessly, the duo craft killer hooks
      and alluring vocals that give listeners endless reasons to enjoy.
      <br></br>
      <br></br>
      <span>
        <a href="https://www.eartothegroundmusic.co/2019/01/15/2-acts-we-cannot-get-enough-of/">
          - Ear to the Ground Music
        </a>
      </span>
    </blockquote>
    <p>
      {" "}
      The DIY musicians have also released two self-made music videos
      for songs on their first EP, both of which employ a unique array
      of practical visual effects to complement their experimental
      music. 
      </p><p>

      Jack and the Other's debut EP Circles was released in
      January of 2019 and has received over 1.5 million cross-platform
      streams to date. On September 20, 2019, the duo released their
      first followup single to the Circles EP, called "Lost in Space,” a
      downtempo track featuring “enigmatic vocals that swoon through the
      mix filled up with some ultra smooth instrumentation.” ( <a href="https://acidstag.com/2019/09/jack-and-the-other-lost-in-space/">Acid Stag</a>)</p>
      <p>
      In the latter half of 2020, JATO released Aspera, a 3-song EP
      featuring the tracks “Adam & Eve,” “Better,” and “777.” 
      </p>
      <p>
      Jack and the Other announced in late 2020 that they were selected as a
      recipient of the 2021 Artist Project Grant from the City of
      Atlanta Office of Cultural affairs, which was used to partially
      fund their latest project Sunglass, a 7-song album whose singles
      “I Need It," "Flare," "Push Push," and "Tell Me Straight" dropped
      one a time every month beginning in June of 2022. The final three
      tracks from Sunglass were released October 7th, 2022. 
      </p><p>
      JATO is
      currently working on crafting a live show, shooting music videos
      for their latest albums, and writing new music.
    </p>
    </div>
    </div>
  </motion.div>
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0.3 }}
    layout
    exit={{ opacity: 0 }}
    transition={{
      duration: 1,
      layout: {
        duration: 1,
      },
    }}
    className="content-div"
  >
    <img src={aboutUsImg} className="bg-img" />
  </motion.div>
</div>
</div> */
}

import { React, useState } from "react";
import { motion } from "framer-motion";
import backImg from "../../imgs/nav/backlogo.png";
import "./style/ListenStyle.css";

export default function ListenContent() {
  const [showSoundcloud, setShowSoundcloud] = useState(false);
  const [showAppleMusic, setShowAppleMusic] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);

  return (
    <div className="music-players">
      <div key="soundcloud" className="soundcloud-container">
        <div
          className="player-control"
          onClick={() => {
            setShowSoundcloud(!showSoundcloud);
          }}
        >
          <div></div>
          <h2>SoundCloud Player</h2>
          <motion.img
            src={backImg}
            key="soundcloudarrow"
            className="arrow-img"
            alt="Show soundcloud player"
            animate={showSoundcloud ? { rotate: -90 } : { rotate: 0 }}
            transition={{ type: "spring", damping: 20 }}
          />
        </div>
        {showSoundcloud && (
          <div className="cover-div">
            <motion.div
              className="player-itself"
              key="soundcloudanim"
              layout
              initial={{ y: -450 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
            >
              <iframe
                width="100%"
                height="150"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/556999383&color=%23272727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <iframe
                width="100%"
                height="150"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1284757918&color=%23272727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <iframe
                width="100%"
                height="150"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/916409279&color=%23272727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </motion.div>
          </div>
        )}
      </div>
      <div key="spotify" className="spotify-container">
        <div
          className="player-control"
          onClick={() => {
            setShowSpotify(!showSpotify);
          }}
        >
          <div></div>
          <h2>Spotify Player</h2>
          <motion.img
            className="arrow-img"
            key="spotifyarrow"
            src={backImg}
            alt="Show spotify player"
            animate={showSpotify ? { rotate: -90 } : { rotate: 0 }}
            transition={{ type: "spring", damping: 20 }}
          />
        </div>
        {showSpotify && (
          <div className="cover-div">
            <motion.div
              key="spotifyanim"
              className="player-itself"
              layout
              initial={{ y: -352 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <iframe
                className="spotify-player"
                src="https://open.spotify.com/embed/artist/53wrHX7FVfvPldDQXlNTts?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        )}
      </div>
      <div key="apple" className="apple-container">
        <div
          className="player-control"
          onClick={() => {
            setShowAppleMusic(!showAppleMusic);
          }}
        >
          <div></div>
          <h2>Apple Music Player</h2>
          <motion.img
            className="arrow-img"
            key="applearrow"
            src={backImg}
            alt="Show Apple Music player"
            animate={showAppleMusic ? { rotate: -90 } : { rotate: 0 }}
            transition={{ type: "spring", damping: 20 }}
          />
        </div>
        {showAppleMusic && (
          <div className="cover-div">
            <motion.div
              key="appleanim"
              className="player-itself"
              layout
              initial={{ y: -352 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="450"
                width="100%"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/sunglass/1625187262"
              ></iframe>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

// apple music style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;"

// soundcloud 1 div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"

// soundcloud a href style="color: #cccccc; text-decoration: none;"

// soundcloud 2 div  style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"

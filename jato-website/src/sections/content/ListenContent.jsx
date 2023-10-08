import { React, useState } from "react";
import backImg from "../../imgs/nav/backlogo.png";

export default function ListenContent() {
  const [showSoundcloud, setShowSoundcloud] = useState(false);
  const [showAppleMusic, setShowAppleMusic] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);

  return (
    <>
      <div className="soundcloud-container">
        <div
          className="player-control"
          onClick={() => {
            setShowSoundcloud(!showSoundcloud);
          }}
        >
          <h2>SoundCloud Player</h2>
          <img src={backImg} alt="Show soundcloud player" />
        </div>
        {showSoundcloud && (
          <div className="soundcloud-container">
            <iframe
              width="100%"
              height="150"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/556999383&color=%23272727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div>
              <a
                href="https://soundcloud.com/jackandtheother"
                title="Jack And The Other"
                target="_blank"
              >
                Jack And The Other
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/jackandtheother/passin-through-1"
                title="Passin Through"
                target="_blank"
              >
                Passin Through
              </a>
            </div>
            <iframe
              width="100%"
              height="150"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1284757918&color=%23272727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div>
              <a
                href="https://soundcloud.com/jackandtheother"
                title="Jack And The Other"
                target="_blank"
              >
                Jack And The Other
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/jackandtheother/i-need-it"
                title="I Need It"
                target="_blank"
              >
                I Need It
              </a>
            </div>
            <iframe
              width="100%"
              height="150"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/916409279&color=%23272727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div>
              <a
                href="https://soundcloud.com/jackandtheother"
                title="Jack And The Other"
                target="_blank"
              >
                Jack And The Other
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/jackandtheother/777a"
                title="777"
                target="_blank"
              >
                777
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="spotify-container">
        <div
          className="player-control"
          onClick={() => {
            setShowSpotify(!showSpotify);
          }}
        >
          <h2>Spotify Player</h2>
          <img src={backImg} alt="Show spotify player" />
        </div>
        {showSpotify && (
          <iframe
            className="spotify-player"
            src="https://open.spotify.com/embed/artist/53wrHX7FVfvPldDQXlNTts?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        )}
      </div>
      <div className="apple-container">
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          width="100%"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/sunglass/1625187262"
        ></iframe>
      </div>
    </>
  );
}

// apple music style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;"

// soundcloud 1 div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"

// soundcloud a href style="color: #cccccc; text-decoration: none;"

// soundcloud 2 div  style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"

import apple from "./imgs/svgs/icon_apple.svg";
import ig from "./imgs/svgs/icon_insta.svg";
import sc from "./imgs/svgs/icon_sc.svg";
import spotify from "./imgs/svgs/icon_spotify.svg";
import yt from "./imgs/svgs/icon_yt.svg";

function SocialLinks() {
  return (
    <>
      <ul>
        <li>
          <a
            href="https://open.spotify.com/artist/53wrHX7FVfvPldDQXlNTts?si=eBvTiKQhQXOy_J3GIhWDdA"
            target="_blank"
          >
            <img src={spotify} alt="Spotify" />
          </a>
        </li>
        <li>
          <a
            href="https://music.apple.com/us/artist/jack-and-the-other/1441629104"
            target="_blank"
          >
            <img src={apple} alt="Apple Music" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/jackandtheother/" target="_blank">
            <img src={ig} alt="Instagram" />
          </a>
        </li>
        <li>
        <a href="https://soundcloud.com/jackandtheother" target="_blank">
            <img src={sc} alt="Soundcloud" />
            </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC7xZN8jHYMpI-s5FBeglUEw" target="_blank">
            <img src={yt} alt="YouTube" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialLinks;

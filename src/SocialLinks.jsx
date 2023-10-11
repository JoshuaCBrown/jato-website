import apple from "./imgs/new/apple2.png";
import ig from "./imgs/new/insta.png";
import sc from "./imgs/new/soundcloud.png";
import spotify from "./imgs/new/spotify.png";
import yt from "./imgs/new/youtube.png";

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
          <a
            href="https://www.youtube.com/channel/UC7xZN8jHYMpI-s5FBeglUEw"
            target="_blank"
          >
            <img src={yt} alt="YouTube" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialLinks;

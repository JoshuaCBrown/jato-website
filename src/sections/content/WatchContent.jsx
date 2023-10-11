import jatoPressOne from "../../imgs/jato-press-pic.jpg";
import jatoPressTwo from "../../imgs/jato-press-pic-two.jpg";
import "./style/WatchStyle.css";
export default function WatchContent() {
  return (
    <div className="videos">
      <div className="vid-wrapper">
        <iframe
          max-width="560"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/BwxnX8Lc5sY?si=KBCQ45Wz6D8jR-4Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
      <img src={jatoPressOne} alt="Jack and the Other Press Photo" />
      <div className="vid-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VBbFVihi_iE?si=C6knhERWeWaiE12a"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
      <img src={jatoPressTwo} alt="Jack and the Other Press Photo" />
    </div>
  );
}

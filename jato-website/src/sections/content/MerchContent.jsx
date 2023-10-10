import "./style/MerchStyle.css";
import jatoSweater from "../../imgs/merch/jatosweater.png";
import jatoSocks from "../../imgs/merch/socks.png";
import asperaShirt from "../../imgs/merch/asperashirt.png";
import circlesShirt from "../../imgs/merch/circletee.png";
import { motion } from "framer-motion";

export default function MerchContent() {
  return (
    <div className="redbubble">
      <div className="coupler">
        <div className="hover-div">
        <a
          href="https://www.redbubble.com/i/sweatshirt/Jack-and-the-Other-w-profile-by-JackandtheOther/54861992.73735"
          target="_blank"
        >
          <img
            src={jatoSweater}
            alt="Jack and the other pullover sweatshirt"
            className="merch-img"
          />
        </a>
        </div>
        <div className="hover-div">
        <a
          href="https://www.redbubble.com/i/socks/Jack-and-the-Other-Circles-Style-Band-Name-by-JackandtheOther/55590996.9HZ1B"
          target="_blank"
        >
          <img
            src={jatoSocks}
            alt="Jack and the other branded socks"
            className="merch-img"
          />
        </a>
      </div>
      </div>
      <div className="coupler">
        <div className="hover-div">
        <a
          href="https://www.redbubble.com/i/t-shirt/Jack-and-the-Other-Circles-EP-Cover-by-JackandtheOther/54862708.DYMRA"
          target="_blank"
        >
          <img
            src={circlesShirt}
            alt="Jack and the other Circles album t-shirt"
            className="merch-img"
          />
        </a>
        </div>
        <div className="hover-div">
        <a
          href="https://www.redbubble.com/i/t-shirt/Aspera-Water-Wash-EP-Cover-Art-by-JackandtheOther/54861067.D00NU"
          target="_blank"
        >
          <img
            src={asperaShirt}
            alt="Jack and the other Aspera album t-shirt"
            className="merch-img"
          />
        </a>
        </div>
        
      </div>
    </div>
  );
}

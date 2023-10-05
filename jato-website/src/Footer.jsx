import React from "react";
import "./style/Footer.css";
import { Link } from "react-router-dom";
import SubscribeBtn from "./SubscribeBtn";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-spacer"></div>
        <div className="footer-nav">
          <ul>
            <li key="about">
              <div className="foot-item">
                <Link to="aboutjato">ABOUT</Link>
              </div>
            </li>
            <li key="contact">
              <div className="foot-item">
                <Link to="contactjato">CONTACT</Link>
              </div>
            </li>
            <li key="listen">
              <div className="foot-item">
                <Link to="listentojato">LISTEN</Link>
              </div>
            </li>
            <li key="look">
              <div className="foot-item">
                <Link to="watchjato">LOOK</Link>
              </div>
            </li>
            <li key="merch">
              <div className="foot-item">
                <Link to="jatomerch">MERCH</Link>
              </div>
            </li>
            <li key="press">
              <div className="foot-item">
                <Link to="jatopress">PRESS</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-spacer"></div>
      </div>
    </>
  );
}

export default Footer;

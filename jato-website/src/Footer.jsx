import React from "react";
import "./style/Footer.css";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import SubscribeBtn from "./SubscribeBtn";

function Footer() {
  return (
    <>
      <div className="footer">
        <ul>
          <li key="home">
            <Link to="/">HOME</Link>
          </li>
          <li key="about">
            <Link to="aboutjato">ABOUT</Link>
          </li>
          <li key="contact">
            <Link to="contactjato">CONTACT</Link>
          </li>
          <li key="listen">
            <Link to="listentojato">LISTEN</Link>
          </li>
          <li key="look">
            <Link to="watchjato">LOOK</Link>
          </li>
          <li key="merch">
            <Link to="jatomerch">MERCH</Link>
          </li>
          <li key="press">
            <Link to="jatopress">PRESS</Link>
          </li>
        </ul>
      </div>
      <div className="subscribe-div">
        <SubscribeBtn />
      </div>
      <div className="social-links-div">
        <SocialLinks />
      </div>
    </>
  );
}

export default Footer;

import { React, useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../imgs/new/contactscl.png";
// import "./style/About.css";
import PageDisplay from "./PageDisplay";
import ContactUsContent from "../sections/content/ContactUsContent";

function ContactJato() {
  // const [rotate, setRotate] = useState(false);
  const contactUsContent = <ContactUsContent />;
  return (
    <>
      <PageDisplay
        jatoTitle="Contact Us"
        jatoPage={contactUsContent}
        jatoBg={contactImg}
      />
    </>
  );
}

export default ContactJato;
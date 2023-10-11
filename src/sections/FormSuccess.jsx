import { React, useState } from "react";
import contactImg from "../imgs/new/contactscl.png";
// import "./style/About.css";
import PageDisplay from "./PageDisplay";


export default function FormSuccess() {
  // const [rotate, setRotate] = useState(false);
  return (
    <>
      <PageDisplay
        jatoTitle="Contact Us"
        jatoPage={"Message Sent!"}
        jatoBg={contactImg}
      />
    </>
  );
};
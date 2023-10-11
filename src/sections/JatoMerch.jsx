import { React, useState } from "react";
import { motion } from "framer-motion";
import merchImg from "../imgs/new/merchscl.png";
import PageDisplay from "./PageDisplay";
import MerchContent from "../sections/content/MerchContent";

function Merch() {
  const merchContent = <MerchContent />;
  return (
    <>
      <PageDisplay
        jatoTitle="Merch"
        jatoPage={merchContent}
        jatoBg={merchImg}
      />
    </>
  );
}

export default Merch;

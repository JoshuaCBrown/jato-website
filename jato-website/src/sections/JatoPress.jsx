import { React, useState } from "react";
import pressImg from "../imgs/new/press2scl.png";
import PageDisplay from "./PageDisplay";
import PressContent from "../sections/content/PressContent";

function Press() {
  const pressContent = <PressContent />;
  return (
    <>
      <PageDisplay
        jatoTitle="Press"
        jatoPage={pressContent}
        jatoBg={pressImg}
      />
    </>
  );
}

export default Press;

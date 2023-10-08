import { React, useState } from "react";
import listenImg from "../imgs/new/listenscl.png";
import PageDisplay from "./PageDisplay";
import ListenContent from "../sections/content/ListenContent";

function Listen() {
  const listenContent = <ListenContent />;
  return (
    <>
      <PageDisplay
        jatoTitle="Listen"
        jatoPage={listenContent}
        jatoBg={listenImg}
      />
    </>
  );
}

export default Listen;

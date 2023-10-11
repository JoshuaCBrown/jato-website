import { React, useState } from "react";
import lookImg from "../imgs/new/watchscl.png";
import PageDisplay from "./PageDisplay";
import WatchContent from "../sections/content/WatchContent";

function Watch() {
  const watchContent = <WatchContent />;
  return (
    <>
      <PageDisplay
        jatoTitle="Look"
        jatoPage={watchContent}
        jatoBg={lookImg}
      />
    </>
  );
}

export default Watch;
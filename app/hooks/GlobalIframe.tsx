"use client";
import { useEffect, useRef } from "react";

const GlobalIframe = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!iframeRef.current) {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://embeds.beehiiv.com/ed0d8974-c9e8-45ae-b68b-69718811ee56?slim=true";
      iframe.height = "52";
      iframe.frameBorder = "0";
      iframe.scrolling = "no";
      iframe.style.width = "100%";
      iframe.style.maxWidth = "768px";
      iframe.style.borderRadius = "0px";
      iframe.style.backgroundColor = "transparent";
      iframeRef.current = iframe;

      // Append the iframe to the global container
      const container = document.getElementById("global-iframe-container");
      if (container) {
        container.appendChild(iframeRef.current);
      }
    }
  }, []);

  return <div id="global-iframe-container" style={{ display: "none" }} />;
};

export default GlobalIframe;

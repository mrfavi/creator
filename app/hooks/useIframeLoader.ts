import { useState, useEffect } from "react";

let iframeElement: HTMLIFrameElement | null = null;

export const useIframeLoader = () => {
    const [iframe, setIframe] = useState<HTMLIFrameElement | null>(null);

    useEffect(() => {
        if (!iframeElement) {
            const iframe = document.createElement("iframe");
            iframe.src = "https://embeds.beehiiv.com/ed0d8974-c9e8-45ae-b68b-69718811ee56?slim=true";
            iframe.height = "52";
            iframe.frameBorder = "0";
            iframe.scrolling = "no";
            iframe.style.width = "100%";
            iframe.style.maxWidth = "768px";
            iframe.style.borderRadius = "0px";
            iframe.style.backgroundColor = "transparent";
            iframeElement = iframe;
        }
        setIframe(iframeElement);
    }, []);

    return iframe;
};

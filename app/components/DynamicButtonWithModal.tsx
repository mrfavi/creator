"use client";
import { useState, useEffect, MouseEvent } from "react";
import { useIframeLoader } from "../hooks/useIframeLoader";

interface DynamicButtonWithModalProps {
  buttonText?: string;
  buttonStyle?: React.CSSProperties;
  buttonIcon?: boolean;
  buttonClassName?: string;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const DynamicButtonWithModal: React.FC<DynamicButtonWithModalProps> = ({
  buttonText,
  buttonStyle,
  buttonIcon,
  buttonClassName,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const iframe = useIframeLoader();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={buttonStyle}
        className={`flex items-center gap-2 ${buttonClassName || ""}`.trim()}
        onMouseEnter={onMouseEnter} // Only applied if provided
        onMouseLeave={onMouseLeave} // Only applied if provided
      >
        {buttonText}

        {buttonIcon && (
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M9.61914 4.45312L13.6658 8.49979L9.61914 12.5465"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2.33398 8.5H13.554"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#6981fd] cursor-default p-10 rounded-lg shadow-lg text-center lg:min-w-96 lg:mx-0 mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="font-light absolute right-0 top-0 w-7 h-7 -mt-2 -mr-2 flex justify-center items-center rounded-full bg-rose-200 hover:bg-rose-500 text-white"
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
            <h2 className="lg:text-3xl text-2xl font-bold ">
              Clone Yourself With AI
            </h2>
            <p className="mb-5 text-md">Create AI Twin Videos In Minutes</p>
            <iframe
              src="https://embeds.beehiiv.com/ed0d8974-c9e8-45ae-b68b-69718811ee56?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              frameBorder="0"
              scrolling="no"
              className="w-full max-w-3xl "
              style={{
                margin: "0",
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicButtonWithModal;

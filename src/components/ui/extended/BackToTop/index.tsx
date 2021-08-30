import React, { useEffect, useRef, useState } from "react";
import { StyledBackToTop } from "./index.style";

const BackToTop = () => {
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        if (window.pageYOffset > 200 && !showScroll) {
          setShowScroll(true);
        } else if (window.pageYOffset <= 200 && showScroll) {
          setShowScroll(false);
        }
      };
    }
  });

  const scrollToTop = () => {
    if (typeof window !== `undefined`) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <StyledBackToTop
      show={showScroll}
      onClick={scrollToTop}
      ref={backToTopRef}
    />
  );
};

export default BackToTop;

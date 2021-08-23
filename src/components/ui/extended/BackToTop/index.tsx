import React, { useEffect, useRef, useState } from "react";
import { StyledBackToTop } from "./index.style";

const BackToTop = () => {
  const backToTopRef = useRef<HTMLAnchorElement>(null);
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

  return (
    <StyledBackToTop
      show={showScroll}
      href={"#main-header"}
      ref={backToTopRef}
    />
  );
};

export default BackToTop;

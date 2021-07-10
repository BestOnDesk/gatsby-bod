import React, { ReactChild } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

interface LayoutProps {
  children: ReactChild | ReactChild[];
  headerWithShadow?: boolean;
  headerSticky?: boolean;
}

const Layout = ({ children, headerWithShadow, headerSticky }: LayoutProps) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', { speed: 200, offset: 200 });
  }

  return (
    <>
      <Header withShadow={headerWithShadow} sticky={headerSticky} />
      <MobileMenu show={false} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

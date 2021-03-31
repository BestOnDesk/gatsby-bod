import React, { ReactChild } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <MobileMenu show={true} />
      {children}
      <Footer />
    </>
  );
};

export { Layout };

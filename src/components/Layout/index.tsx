import React, { ReactChild } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { Layout };

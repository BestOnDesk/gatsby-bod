import React, { ReactChild } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { Layout };

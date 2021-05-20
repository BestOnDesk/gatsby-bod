import React, { ReactChild } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import { IState } from "../../../../state/reducers";
import { connect } from "react-redux";

interface LayoutProps {
  children: ReactChild | ReactChild[];
  showMobileMenu: boolean;
  headerWithShadow?: boolean;
  headerSticky?: boolean;
}

const Layout = ({
  children,
  showMobileMenu,
  headerWithShadow,
  headerSticky,
}: LayoutProps) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', { speed: 200, offset: 200 });
  }

  return (
    <>
      <Header withShadow={headerWithShadow} sticky={headerSticky} />
      <MobileMenu show={showMobileMenu} />
      {children}
      <Footer />
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  showMobileMenu: state.mobileReducer.showMenu,
});

export default connect(mapStateToProps)(Layout);

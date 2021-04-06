import React, { ReactChild } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import { IState } from "../../state/reducers";
import { connect } from "react-redux";

interface LayoutProps {
  children: ReactChild | ReactChild[];
  showMobileMenu: boolean;
}

const Layout = ({ children, showMobileMenu }: LayoutProps) => {
  return (
    <>
      <Header />
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

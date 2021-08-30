import React, { ReactChild, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import BackToTop from "../../extended/BackToTop";

interface LayoutProps {
  children: ReactChild | ReactChild[];
  headerWithShadow?: boolean;
  headerSticky?: boolean;
  withoutFooter?: boolean;
}

const Layout = ({
  children,
  headerWithShadow,
  headerSticky,
  withoutFooter,
}: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', { speed: 200, offset: 200 });
  }

  return (
    <>
      <Header
        withShadow={headerWithShadow}
        sticky={headerSticky}
        openMobileMenu={() => setMobileMenuOpen(true)}
      />
      <MobileMenu
        show={mobileMenuOpen}
        close={() => setMobileMenuOpen(false)}
      />
      {children}
      {!withoutFooter && <Footer />}
      <BackToTop />
    </>
  );
};

export default Layout;

import * as React from "react";
import { LogoLink, StyledLogo } from "./index.style";
import StaticImg from "components/StaticImg";

const Logo = () => {
  return (
    <StyledLogo>
      <LogoLink>
        <StaticImg
          imgStyle={{ maxHeight: "37px" }}
          alt="BestOnDesk"
          src={"logo/logo-light.png"}
          srcDark={"logo/logo-dark.png"}
        />
      </LogoLink>
    </StyledLogo>
  );
};

export default Logo;

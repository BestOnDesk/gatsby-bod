import * as React from "react";
import { Logo as LogoDiv, LogoLink } from "./index.style";
import StaticImg from "components/StaticImg";

const Logo = () => {
  return (
    <LogoDiv>
      <LogoLink>
        <StaticImg
          imgStyle={{ maxHeight: "37px" }}
          alt="BestOnDesk"
          src={"logo/logo-light.png"}
          srcDark={"logo/logo-dark.png"}
        />
      </LogoLink>
    </LogoDiv>
  );
};

export default Logo;

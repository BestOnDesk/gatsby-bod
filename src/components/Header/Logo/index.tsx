import * as React from "react";
import { Logo as LogoDiv, LogoLink } from "./index.style";
import Img from "../../Img";

const Logo = () => {
  return (
    <LogoDiv>
      <LogoLink>
        <Img
          alt="BestOnDesk"
          src={"../../images/logo-light.png"}
          srcDark={"../../images/logo-light.png"}
        />
      </LogoLink>
    </LogoDiv>
  );
};

export default Logo;

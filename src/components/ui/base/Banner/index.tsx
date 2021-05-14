import React, { ReactChild } from "react";
import { StyledBanner } from "./index.style";

export interface BannerProps {
  children: ReactChild | ReactChild[];
}

const Banner = ({ children }: BannerProps) => {
  return <StyledBanner>{children}</StyledBanner>;
};

export default Banner;

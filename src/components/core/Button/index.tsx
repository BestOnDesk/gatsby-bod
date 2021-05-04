import React, { ReactChild } from "react";
import { StyledButton } from "./index.style";

export interface ButtonProps {
  children: ReactChild | ReactChild[];
  rounded?: boolean;
  colorSecondaryAlt?: boolean;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

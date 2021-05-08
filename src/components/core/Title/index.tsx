import React, { ReactChild } from "react";
import { StyledTitle } from "./index.style";

export interface TitleProps {
  children?: ReactChild | ReactChild[];
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = (props: TitleProps) => {
  // @ts-ignore
  return <StyledTitle as={`h${props.level}`}>{props.children}</StyledTitle>;
};

export default Title;

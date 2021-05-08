import React from "react";
import Title, { TitleProps } from "../../../core/Title";
import { StyledSectionTitle } from "./index.style";

const SectionTitle = (props: TitleProps) => {
  return (
    <StyledSectionTitle>
      <Title level={props.level}>{props.children}</Title>
    </StyledSectionTitle>
  );
};

export default SectionTitle;

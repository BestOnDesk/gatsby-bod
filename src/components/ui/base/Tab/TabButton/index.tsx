import React from "react";
import { NavItem, NavLink, StyledTabButton } from "./index.style";

export interface TabButtonProps {
  elements?: string[];
  onChange?: Function;
  selectedIndex: number;
}

const TabButton = (props: TabButtonProps) => {
  const handleChange = (index: number) => {
    props.onChange && props.onChange(index);
  };

  return (
    <StyledTabButton role="tablist">
      {props.elements?.map((element, i) => (
        <NavItem role="presentation" key={i}>
          <NavLink
            active={i === props.selectedIndex}
            aria-selected={i === props.selectedIndex}
            onClick={() => handleChange(i)}
            role="tab"
          >
            {element}
          </NavLink>
        </NavItem>
      ))}
    </StyledTabButton>
  );
};

export default TabButton;

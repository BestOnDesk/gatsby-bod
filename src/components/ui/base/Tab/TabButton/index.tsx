import React, { useState } from "react";
import { NavItem, NavLink, StyledTabButton } from "./index.style";

export interface TabButtonProps {
  elements?: string[];
  onChange?: Function;
}

const TabButton = (props: TabButtonProps) => {
  const [selected, setSelected] = useState<number>(0);

  const handleChange = (index: number) => {
    setSelected(index);
    props.onChange && props.onChange(index);
  };

  return (
    <StyledTabButton role="tablist">
      {props.elements?.map((element, i) => (
        <NavItem role="presentation">
          <NavLink
            active={i === selected}
            aria-selected={i === selected}
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

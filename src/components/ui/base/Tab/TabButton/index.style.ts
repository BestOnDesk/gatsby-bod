import styled, { css } from "styled-components";

export interface NavLinkProps {
  active: boolean;
}

const StyledTabButton = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  margin-top: 20px !important;
  border: 0 none;
  padding: 0;
  @media ${(props) => props.theme.layouts.sm} {
    margin: -5px;
  }
`;

const NavItem = styled.li`
  margin: 10px;
  @media ${(props) => props.theme.layouts.sm} {
    margin: 5px;
  }
`;

const NavLink = styled.button<NavLinkProps>`
  border: 1px solid ${(props) => props.theme.colors.lighter};
  border-radius: ${(props) => props.theme.borders.radiusSmall};
  padding: 0 18px;
  height: 46px;
  display: inline-block;
  line-height: 46px;
  font-weight: ${(props) => props.theme.fonts.weight.pBold};
  font-size: ${(props) => props.theme.fonts.size.b1};
  color: ${(props) => props.theme.colors.midgray};
  background: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  @media ${(props) => props.theme.layouts.sm} {
    padding: 0 13px;
    font-size: ${(props) => props.theme.fonts.size.b3};
  }

  &:focus {
    color: ${(props) => props.theme.colors.midgray};
    border-color: ${(props) => props.theme.colors.white};
  }

  ${(props) =>
    props.active &&
    css`
      ${(props) => props.theme.extends.boxShadow}
      border: 1px solid transparent;
      color: ${(props) => props.theme.colors.gray};
    `}
`;

export { StyledTabButton, NavItem, NavLink };

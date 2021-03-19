import styled from "styled-components";
import { Link } from "gatsby";

const MenuWrapper = styled.div``;

const MenuNav = styled.nav``;

const MainMenu = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const ItemLink = styled(Link)`
  font-size: ${(props) => props.theme.fonts.size.b2};
  line-height: ${(props) => props.theme.fonts.height.b2};
  color: ${(props) => props.theme.colors.midgray};
  font-weight: ${(props) => props.theme.fonts.weight.pMedium};
  ${(props) => props.theme.extends.transition};
  height: 80px;
  display: block;
  line-height: 80px;
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 4px;
    background: var(--color-primary);
    content: "";
    ${(props) => props.theme.extends.transition};
    left: 0;
    border-radius: 10px 10px 0 0;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const MenuItem = styled.li`
  margin: 0 18px;
  position: relative;
  @media ${(props) => props.theme.layout.laptopDevice} {
    margin: 0 12px;
  }
  @media ${(props) => props.theme.layout.lgLayout} {
    margin: 0 12px;
  }
  &:hover {
    > ${ItemLink} {
      &::after {
        width: 100%;
      }
    }
  }
`;

export { MenuWrapper, MenuNav, MainMenu, MenuItem, ItemLink };

import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledButton } from "../../../core/Button/index.style";

const StyledPrevNextPagesArea = styled.div`
  padding: 80px 0;
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }
`;

const ButtonCol = styled(Col)`
  display: flex;
  justify-content: center;

  ${media.sm`
    &:first-child {
      ${StyledButton} {
        i {
          margin-right: 8px;
        }
      }
    }

    &:last-child {
      ${StyledButton} {
        i {
          margin-left: 8px;
        }
      }
    }
  `}
`;

const DesktopText = styled.span`
  display: none;

  ${media.sm`
    display: inline-block;
  `}
`;

export { StyledPrevNextPagesArea, ButtonCol, DesktopText };

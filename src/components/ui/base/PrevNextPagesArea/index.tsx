import React from "react";
import { ButtonCol, DesktopText, StyledPrevNextPagesArea } from "./index.style";
import { Container, Row } from "styled-bootstrap-grid";
import { Link } from "gatsby";
import Button from "../../../core/Button";

export interface PrevNextPagesAreaProps {
  newerLink?: string;
  olderLink?: string;
  mobileMode?: boolean;
}

const PrevNextPagesArea = ({
  newerLink,
  olderLink,
  mobileMode,
}: PrevNextPagesAreaProps) => {
  return (
    <StyledPrevNextPagesArea>
      <Container>
        <Row>
          <ButtonCol col={6}>
            {newerLink && (
              <Link to={newerLink}>
                <Button rounded>
                  <i className="fa fa-chevron-left" />
                  <DesktopText>Post più recenti</DesktopText>
                </Button>
              </Link>
            )}
          </ButtonCol>
          <ButtonCol col={6}>
            {olderLink && (
              <Link to={olderLink}>
                <Button rounded>
                  <DesktopText>Post meno recenti</DesktopText>
                  <i className="fa fa-chevron-right" />
                </Button>
              </Link>
            )}
          </ButtonCol>
        </Row>
      </Container>
    </StyledPrevNextPagesArea>
  );
};

export default PrevNextPagesArea;

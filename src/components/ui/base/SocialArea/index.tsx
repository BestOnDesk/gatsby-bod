import React from "react";
import {
  Inner,
  SocialElement,
  SocialWithText,
  StyledSocialArea,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";

export type Social =
  | "instagram"
  | "facebook"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "pinterest"
  | "discord"
  | "telegram";

export interface SocialAreaProps {
  socials: {
    link: string;
    type: Social;
  }[];
  noPaddingBottom?: boolean;
}

const SocialArea = (props: SocialAreaProps) => {
  return (
    <StyledSocialArea noPaddingBottom={props.noPaddingBottom}>
      <Container>
        <Row>
          <Col>
            <Inner>
              <SocialWithText>
                {props.socials.map((social) => (
                  <SocialElement type={social.type} key={social.type}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fab fa-${social.type}`} />
                      <span>
                        {social.type.charAt(0).toUpperCase() +
                          social.type.slice(1)}
                      </span>
                    </a>
                  </SocialElement>
                ))}
              </SocialWithText>
            </Inner>
          </Col>
        </Row>
      </Container>
    </StyledSocialArea>
  );
};

export default SocialArea;

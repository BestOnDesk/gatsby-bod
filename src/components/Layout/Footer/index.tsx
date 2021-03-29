import React from "react";
import {
  CopyrightArea,
  CopyrightLeft,
  CopyrightRight,
  CopyrightText,
  FollowTitle,
  FooterArea,
  Inner,
  Logo,
  MainMenu,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SocialIcons from "components/SocialIcons";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
} from "../../../constants/socials";
import { Link } from "gatsby";
import StaticImg from "../../StaticImg";
import HoverFlip from "../../HoverFlip";

const Footer = () => {
  return (
    <FooterArea>
      <Container>
        <Row>
          <Col lg={12}>
            <Inner>
              <FollowTitle>Seguici sui nostri social</FollowTitle>
              <SocialIcons colorTertiary mdSize justifyContent={"start"}>
                <li>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram-plane" />
                  </a>
                </li>
              </SocialIcons>
            </Inner>
          </Col>
        </Row>
      </Container>
      <CopyrightArea>
        <Container>
          <Row alignItems={"center"}>
            <Col lg={9} md={12}>
              <CopyrightLeft>
                <Logo>
                  <Link to={"/"}>
                    <StaticImg
                      imgStyle={{ maxHeight: "37px" }}
                      alt="BestOnDesk"
                      src={"logo/logo-light.png"}
                      srcDark={"logo/logo-dark.png"}
                    />
                  </Link>
                </Logo>
                <MainMenu>
                  <li>
                    <HoverFlip to={"/chi-siamo"}>Chi siamo</HoverFlip>
                  </li>
                  <li>
                    <HoverFlip to={"/"}>AGGIUNGERE ROBA</HoverFlip>
                  </li>
                </MainMenu>
              </CopyrightLeft>
            </Col>
            <Col lg={3} md={12}>
              <CopyrightRight>
                <CopyrightText>
                  Tutti i diritti riservati © {new Date().getFullYear()}
                </CopyrightText>
              </CopyrightRight>
            </Col>
          </Row>
        </Container>
      </CopyrightArea>
    </FooterArea>
  );
};

export default Footer;

import React from "react";
import {
  CopyrightArea,
  CopyrightLeft,
  CopyrightRight,
  FooterMainMenu,
  FooterTop,
  FooterWidget,
  FtMenuList,
  Inner,
  LogoCol,
  SocialCol,
  SocialContainer,
  StyledFooter,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Title from "../../../../core/Title";
import { graphql, Link, useStaticQuery } from "gatsby";
import { MenuCategory } from "../../../../../app-types/category";
import Logo from "../../Logo";
import SocialIcons from "../../SocialIcons";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
} from "../../../../../constants/socials";
import SocialIcon from "../../SocialIcons/SocialIcon";
import { COOKIE_POLICY_URL } from "../../../../../constants/paths";

export interface FooterQuery {
  categories: {
    nodes: MenuCategory[];
  };
}

const Footer = () => {
  const { categories }: FooterQuery = useStaticQuery(graphql`
    query {
      categories: allWpCategory(
        sort: { fields: name, order: DESC }
        filter: {
          slug: { ne: "uncategorized-en" }
          wpChildren: { nodes: { elemMatch: { count: { gt: 0 } } } }
        }
      ) {
        nodes {
          ...MenuCategoryFragment
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <FooterMainMenu>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={6} xs={12}>
              <FooterWidget>
                <Title level={2}>BestOnDesk</Title>
                <Inner>
                  <FtMenuList>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/chi-siamo/"}>Chi siamo</Link>
                    </li>
                    <li>
                      <a
                        href={COOKIE_POLICY_URL}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Cookie policy
                      </a>
                    </li>
                  </FtMenuList>
                </Inner>
              </FooterWidget>
            </Col>
            {categories.nodes.map((category) => {
              return (
                <Col lg={3} md={6} sm={6} xs={12} key={category.slug}>
                  <FooterWidget>
                    <Title level={2}>{category.name}</Title>
                    <Inner>
                      <FtMenuList>
                        {category.wpChildren.nodes.map((subCategory) => {
                          return (
                            <li key={subCategory.uri}>
                              <Link to={subCategory.uri}>
                                {subCategory.name}
                              </Link>
                            </li>
                          );
                        })}
                      </FtMenuList>
                    </Inner>
                  </FooterWidget>
                </Col>
              );
            })}
          </Row>
        </Container>
      </FooterMainMenu>
      <FooterTop>
        <Container>
          <Row>
            <LogoCol lg={4} md={4}>
              <Logo />
            </LogoCol>
            <SocialCol lg={8} md={8}>
              <SocialContainer>
                <Title level={5}>Seguici sui nostri social</Title>
                <SocialIcons mdSize justifyContent={"start"}>
                  <SocialIcon link={FACEBOOK_URL} type={"facebook-f"} />
                  <SocialIcon link={INSTAGRAM_URL} type={"instagram"} />
                  <SocialIcon link={LINKEDIN_URL} type={"linkedin-in"} />
                  <SocialIcon link={TELEGRAM_URL} type={"telegram-plane"} />
                </SocialIcons>
              </SocialContainer>
            </SocialCol>
          </Row>
        </Container>
      </FooterTop>
      <CopyrightArea>
        <Container>
          <Row alignItems={"center"}>
            <Col lg={9} md={8}>
              <CopyrightLeft>
                <p>
                  In qualità di Affiliati Amazon riceviamo un guadagno dagli
                  acquisti idonei.
                </p>
              </CopyrightLeft>
            </Col>
            <Col lg={3} md={4}>
              <CopyrightRight>
                <p>
                  Tutti i diritti riservati © {new Date().getFullYear()} <br />
                  P.IVA: IT05104380265
                </p>
              </CopyrightRight>
            </Col>
          </Row>
        </Container>
      </CopyrightArea>
    </StyledFooter>
  );
};

export default Footer;

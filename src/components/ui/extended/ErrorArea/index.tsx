import React from "react";
import { Inner, StyledErrorArea } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Title from "../../../core/Title";
import HoverFlipLinkButton from "../../../core/HoverFlipLinkButton";
import StaticImg from "../../../core/StaticImg";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

interface ErrorAreaQueryResult {
  backgroundImg: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const ErrorArea = () => {
  const { backgroundImg }: ErrorAreaQueryResult = useStaticQuery(graphql`
    query {
      backgroundImg: file(
        relativePath: { eq: "404/404-background.jpg" }
        sourceInstanceName: { eq: "images" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <StyledErrorArea
      backgroundUrl={
        backgroundImg.childImageSharp.gatsbyImageData.images.fallback!.src
      }
    >
      <Container>
        <Row>
          <Col>
            <Inner>
              <StaticImg src={"404/404.png"} alt={"Error 404"} />
              <Title level={1}>Pagina non trovata!</Title>
              <p>
                La pagina che stai cercando non esiste. Utilizza la ricerca o
                torna alla home.
              </p>
              <HoverFlipLinkButton to={"/"} buttonRounded>
                Torna alla home
              </HoverFlipLinkButton>
            </Inner>
          </Col>
        </Row>
      </Container>
    </StyledErrorArea>
  );
};

export default ErrorArea;

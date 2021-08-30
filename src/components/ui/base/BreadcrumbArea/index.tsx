import React from "react";
import {
  BreadcrumbsLi,
  BreadcrumbsUl,
  Inner,
  StyledBreadcrumbArea,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Title from "../../../core/Title";
import { graphql, Link, useStaticQuery } from "gatsby";
import { AuthorPreview } from "../../../../app-types/author";
import AboutAuthor from "../AboutAuthor";
import { Helmet } from "react-helmet";

export interface BreadcrumbAreaProps {
  title?: string;
  breadcrumbs?: {
    name: string;
    link: string;
  }[];
  author?: AuthorPreview;
}

interface BreadCrumbsQueryResult {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

const BreadcrumbArea = (props: BreadcrumbAreaProps) => {
  const { site }: BreadCrumbsQueryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <StyledBreadcrumbArea>
      <Container>
        <Row>
          {props.breadcrumbs && (
            <Col lg={12}>
              <BreadcrumbsUl>
                {props.breadcrumbs.map((breadcrumb, i) => {
                  return (
                    <BreadcrumbsLi key={i}>
                      {i > 0 && <i className="fas fa-chevron-right" />}
                      <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
                    </BreadcrumbsLi>
                  );
                })}
              </BreadcrumbsUl>
            </Col>
          )}
          {props.title && (
            <Col lg={12}>
              <Inner>
                <Title level={1}>{props.title}</Title>
              </Inner>
            </Col>
          )}
          {props.author && <AboutAuthor mainTitle author={props.author} />}
        </Row>
      </Container>
      {props.breadcrumbs && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: props.breadcrumbs.map((element, i) => {
                return {
                  "@type": "ListItem",
                  position: i + 1,
                  name: element.name,
                  item: site.siteMetadata.siteUrl + element.link,
                };
              }),
            })}
          </script>
        </Helmet>
      )}
    </StyledBreadcrumbArea>
  );
};

export default BreadcrumbArea;

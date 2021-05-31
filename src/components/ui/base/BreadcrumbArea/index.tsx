import React from "react";
import {
  BreadcrumbsLi,
  BreadcrumbsUl,
  Inner,
  StyledBreadcrumbArea,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Title from "../../../core/Title";
import { Link } from "gatsby";
import { AuthorPreview } from "../../../../app-types/author";
import AboutAuthor from "../AboutAuthor";

export interface BreadcrumbAreaProps {
  title?: string;
  breadcrumbs?: {
    name: string;
    link: string;
  }[];
  author?: AuthorPreview;
}

const BreadcrumbArea = (props: BreadcrumbAreaProps) => {
  return (
    <StyledBreadcrumbArea>
      <Container>
        <Row>
          {props.breadcrumbs && (
            <Col lg={12}>
              <BreadcrumbsUl
                itemScope
                itemType={"https://schema.org/BreadcrumbList"}
              >
                {props.breadcrumbs.map((breadcrumb, i) => {
                  return (
                    <BreadcrumbsLi
                      key={i}
                      itemProp={"itemListElement"}
                      itemScope
                      itemType={"https://schema.org/ListItem"}
                    >
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
    </StyledBreadcrumbArea>
  );
};

export default BreadcrumbArea;

import React from "react";
import { AuthorPreview } from "../../../../app-types/author";
import { CategoryPreview } from "../../../../app-types/category";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StyledAltPostArea } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SectionTitle from "../../base/SectionTitle";
import ContentBlock from "../../base/ContentBlock";
import PostThumbnail from "../../base/ContentBlock/PostThumbnail";
import { getPostLink } from "../../../../utils/links";
import PostContent from "../../base/ContentBlock/PostContent";
import PostCat from "../../base/ContentBlock/PostContent/PostCat";
import Title from "../../../core/Title";
import PostMeta from "../../base/PostMeta";
import { getReadingTimeString } from "../../../../utils/reading-time";

export interface AltPostAreaQueryResult {
  posts: {
    nodes: {
      title: string;
      content: string;
      date: string;
      slug: string;
      bigImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
      smallImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
      author: {
        node: AuthorPreview;
      };
      categories: {
        nodes: CategoryPreview[];
      };
    }[];
  };
}

const AltPostArea = () => {
  const { posts }: AltPostAreaQueryResult = useStaticQuery(graphql`
    {
      posts: allWpPost(
        filter: {
          categories: {
            nodes: {
              elemMatch: {
                wpParent: { node: { slug: { eq: "per-le-aziende" } } }
              }
            }
          }
        }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          title
          content
          slug
          date(formatString: "DD MMM YYYY", locale: "it")
          bigImage: featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 600, height: 500)
                }
              }
            }
          }
          smallImage: featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 285, height: 190)
                }
              }
            }
          }
          author {
            node {
              ...AuthorPreviewFragment
            }
          }
          categories {
            nodes {
              ...CategoryPreviewFragment
            }
          }
        }
      }
    }
  `);

  const getContentBlock = (index: number, big: boolean) => {
    return (
      <ContentBlock postDefault imageRounded marginTop={30}>
        <PostThumbnail
          image={
            big
              ? posts.nodes[index].bigImage.node.localFile.childImageSharp
                  .gatsbyImageData
              : posts.nodes[index].smallImage.node.localFile.childImageSharp
                  .gatsbyImageData
          }
          alt={posts.nodes[index].title}
          link={getPostLink(posts.nodes[index].slug)}
        />
        <PostContent>
          <PostCat categories={[posts.nodes[index].categories.nodes[0]]} />
          <Title level={big ? 3 : 5}>
            <Link to={getPostLink(posts.nodes[index].slug)}>
              {posts.nodes[index].title}
            </Link>
          </Title>
          {big ? (
            <PostMeta
              date={posts.nodes[index].date}
              author={posts.nodes[index].author.node}
              readingTime={getReadingTimeString(posts.nodes[index].content)}
              postSlug={posts.nodes[index].slug}
              withShareButtons
            />
          ) : (
            <></>
          )}
        </PostContent>
      </ContentBlock>
    );
  };

  return (
    <StyledAltPostArea>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle level={2}>Per le aziende</SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6} md={12} xs={12}>
            {getContentBlock(0, true)}
          </Col>
          <Col xl={6} lg={6} md={12} xs={12}>
            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                {getContentBlock(1, false)}
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                {getContentBlock(2, false)}
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                {getContentBlock(3, false)}
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                {getContentBlock(4, false)}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </StyledAltPostArea>
  );
};

export default AltPostArea;

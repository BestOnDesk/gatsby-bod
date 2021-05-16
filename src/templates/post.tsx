import PostSingleWrapper from "components/ui/base/PostSingleWrapper";
import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Banner from "../components/ui/base/Banner";
import ContentBlock from "../components/ui/base/ContentBlock";
import PostContent from "../components/ui/base/ContentBlock/PostContent";
import PostCat from "../components/ui/base/ContentBlock/PostContent/PostCat";
import Title from "../components/core/Title";
import { CategoryPreview } from "../app-types/category";
import PostMeta from "../components/ui/base/PostMeta";
import { AuthorPreview } from "../app-types/author";
import { getReadingTimeString } from "../utils/reading-time";
import PostDetails from "../components/ui/base/PostDetails";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import PostImage from "../components/ui/base/PostImage";

export interface PostTemplateProps {
  location: Location;
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      content: string;
      categories: {
        nodes: CategoryPreview[];
      };
      author: {
        node: AuthorPreview;
      };
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
    };
    rehype: {
      html: string;
      htmlAst: any;
    };
  };
  pageContext: {
    slug: string;
  };
}

const PostTemplate = ({ data, pageContext }: PostTemplateProps) => {
  const post = data.post;
  return (
    <GlobalWrapper withLayout={true} headerWithShadow headerSticky>
      <PostSingleWrapper>
        <Container>
          <Row>
            <Col lg={8}>
              <Banner>
                <Container>
                  <Row>
                    <Col lg={12}>
                      <ContentBlock>
                        <PostContent noPaddingTop>
                          <PostCat categories={post.categories.nodes} />
                          <Title level={1}>{post.title}</Title>
                          <PostMeta
                            date={post.date}
                            author={post.author.node}
                            readingTime={getReadingTimeString(post.content)}
                            postSlug={post.slug}
                            withShareButtons
                          />
                        </PostContent>
                      </ContentBlock>
                    </Col>
                  </Row>
                </Container>
              </Banner>

              <PostImage
                alt={post.title}
                image={
                  post.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
              />
              <PostDetails content={post.content} ast={data.rehype.htmlAst} />
            </Col>
          </Row>
        </Container>
      </PostSingleWrapper>
    </GlobalWrapper>
  );
};

export const query = graphql`
  query($slug: String) {
    post: wpPost(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "DD MMM YYYY", locale: "it")
      content
      categories {
        nodes {
          ...CategoryPreviewFragment
        }
      }
      author {
        node {
          ...AuthorPreviewFragment
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 810, height: 550)
            }
          }
        }
      }
    }
    rehype: htmlRehype(context: { slug: { eq: $slug } }) {
      html
      htmlAst
    }
  }
`;

export default PostTemplate;

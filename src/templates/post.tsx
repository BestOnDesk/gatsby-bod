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
import { humanizeTime } from "../utils/reading-time";
import PostDetails from "../components/ui/base/PostDetails";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import PostImage from "../components/ui/base/PostImage";
import SEO from "../components/core/SEO";
import { TagPreview } from "../app-types/tag";
import TagsArea from "components/ui/base/TagsArea";
import AboutAuthor from "../components/ui/base/AboutAuthor";
import { SidebarInner } from "components/ui/base/WidgetCategories/index.style";
import WidgetCategories from "../components/ui/base/WidgetCategories";
import WidgetPostList from "../components/ui/base/WidgetPostList";
import WidgetSocial from "../components/ui/base/WidgetSocial";
import MorePosts from "../components/ui/base/MorePosts";
import { getAuthorLink } from "../utils/links";

export interface PostTemplateProps {
  location: Location;
  data: {
    site: {
      siteMetadata: {
        siteUrl: string;
      };
    };
    post: {
      slug: string;
      title: string;
      date: string;
      rawDate: string;
      modified: string;
      seo: {
        title: string;
        metaDesc: string;
        readingTime: number;
      };
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
      tags: {
        nodes: TagPreview[];
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

const PostTemplate = ({ data, location }: PostTemplateProps) => {
  const { post, site } = data;

  return (
    <GlobalWrapper withLayout headerWithShadow headerSticky>
      <SEO
        title={post.title}
        description={post.seo.metaDesc}
        location={location}
        image={{
          imageData:
            post.featuredImage.node.localFile.childImageSharp.gatsbyImageData,
          alt: post.seo.title,
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: post.title,
            image: [
              site.siteMetadata.siteUrl +
                post.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData.images.fallback!.src,
            ],
            datePublished: post.rawDate,
            dateModified: post.modified,
            author: [
              {
                "@type": "Person",
                name: post.author.node.name,
                url:
                  site.siteMetadata.siteUrl +
                  getAuthorLink(post.author.node.slug),
              },
            ],
          },
        ]}
      />
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
                            readingTime={humanizeTime(post.seo.readingTime)}
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
              <PostDetails ast={data.rehype.htmlAst} />
              <TagsArea tags={post.tags.nodes} />
              <AboutAuthor author={post.author.node} />
            </Col>
            <Col lg={4}>
              <SidebarInner>
                <WidgetCategories
                  categorySlugs={post.categories.nodes.map(
                    (category) => category.slug
                  )}
                  marginBottom={30}
                />
                <WidgetPostList
                  title={"Ultimi post su BestOnDesk"}
                  marginBottom={30}
                  limit={3}
                  excludeSlug={post.slug}
                  type={"last"}
                />
                <WidgetSocial marginBottom={30} />
                <WidgetPostList
                  title={"Popolari su BestOnDesk"}
                  marginBottom={30}
                  type={"fixed"}
                  fixedSlugs={[
                    "le-migliori-sedie-da-ufficio",
                    "i-migliori-notebook",
                  ]}
                />
              </SidebarInner>
            </Col>
          </Row>
        </Container>
      </PostSingleWrapper>
      <MorePosts
        categorySlugs={post.categories.nodes.map((category) => category.slug)}
        excludeSlug={post.slug}
        limit={4}
      />
    </GlobalWrapper>
  );
};

export const query = graphql`
  query ($slug: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    post: wpPost(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "DD MMM YYYY", locale: "it")
      rawDate: date
      modified
      seo {
        title
        metaDesc
        readingTime
      }
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
              gatsbyImageData(
                width: 810
                height: 550
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
      tags {
        nodes {
          ...TagPreviewFragment
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

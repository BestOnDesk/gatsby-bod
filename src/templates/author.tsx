import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import { CategoryPreview } from "../app-types/category";
import { IGatsbyImageData } from "gatsby-plugin-image";
import BreadcrumbArea from "../components/ui/base/BreadcrumbArea";
import PostListArea from "../components/ui/base/PostListArea";
import { Col, Container, Row } from "styled-bootstrap-grid";
import ContentBlock from "../components/ui/base/ContentBlock";
import PostThumbnail from "../components/ui/base/ContentBlock/PostThumbnail";
import { getPostLink } from "../utils/links";
import PostContent from "../components/ui/base/ContentBlock/PostContent";
import PostCat from "../components/ui/base/ContentBlock/PostContent/PostCat";
import Title from "../components/core/Title";
import { Link } from "gatsby";
import PostMeta from "../components/ui/base/PostMeta";
import { humanizeTime } from "../utils/reading-time";
import PrevNextPagesArea from "../components/ui/base/PrevNextPagesArea";
import { SidebarInner } from "../components/ui/base/WidgetCategories/index.style";
import WidgetPostList from "../components/ui/base/WidgetPostList";
import WidgetSocial from "../components/ui/base/WidgetSocial";
import WidgetCategories from "../components/ui/base/WidgetCategories";

export interface AuthorTemplateProps {
  pageContext: {
    pagination: {
      limit: number;
      skip: number;
      numberOfPages: number;
      currentPage: number;
      newerPath?: string;
      olderPath?: string;
    };
    author: {
      name: string;
      slug: string;
      description: string;
    };
    authorCategoriesSlugs: string[];
    posts: {
      slug: string;
      title: string;
      date: string;
      categories: {
        nodes: CategoryPreview[];
      };
      author: {
        node: {
          name: string;
          slug: string;
        };
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
      seo: {
        readingTime: number;
      };
    }[];
  };
  location: Location;
}

const AuthorTemplate = ({ pageContext, location }: AuthorTemplateProps) => {
  return (
    <GlobalWrapper withLayout headerWithShadow>
      <SEO
        title={pageContext.author.name}
        description={pageContext.author.description}
        location={location}
      />

      <BreadcrumbArea author={pageContext.author} />

      <PostListArea>
        <Container>
          <Row>
            <Col lg={8}>
              <Title level={2}>Articoli di {pageContext.author.name}</Title>
              {pageContext.posts.map((post) => (
                <ContentBlock postListView marginTop={30}>
                  <PostThumbnail
                    image={
                      post.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={post.title}
                    link={getPostLink(post.slug)}
                  />
                  <PostContent>
                    <PostCat categories={post.categories.nodes} />
                    <Title level={4}>
                      <Link to={getPostLink(post.slug)}>{post.title}</Link>
                    </Title>
                    <PostMeta
                      date={post.date}
                      readingTime={humanizeTime(post.seo.readingTime)}
                      postSlug={post.slug}
                      author={post.author.node}
                      noAuthorImage
                      withShareButtons
                    />
                  </PostContent>
                </ContentBlock>
              ))}
              <PrevNextPagesArea
                mobileMode
                newerLink={pageContext.pagination.newerPath}
                olderLink={pageContext.pagination.olderPath}
              />
            </Col>
            <Col lg={4}>
              <SidebarInner>
                <WidgetCategories
                  categorySlugs={pageContext.authorCategoriesSlugs}
                  marginBottom={30}
                />
                <WidgetPostList
                  title={"Ultimi post su BestOnDesk"}
                  marginBottom={30}
                  limit={3}
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
      </PostListArea>
    </GlobalWrapper>
  );
};

export default AuthorTemplate;

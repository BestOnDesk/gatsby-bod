import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import { IGatsbyImageData } from "gatsby-plugin-image";
import BreadcrumbArea from "../components/ui/base/BreadcrumbArea";
import PostListArea from "../components/ui/base/PostListArea";
import { CategoryPreview } from "../app-types/category";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { SidebarInner } from "../components/ui/base/WidgetCategories/index.style";
import WidgetCategories from "../components/ui/base/WidgetCategories";
import WidgetPostList from "../components/ui/base/WidgetPostList";
import WidgetSocial from "../components/ui/base/WidgetSocial";
import ContentBlock from "../components/ui/base/ContentBlock";
import PostThumbnail from "../components/ui/base/ContentBlock/PostThumbnail";
import { getPostLink } from "../utils/links";
import PostContent from "../components/ui/base/ContentBlock/PostContent";
import PostCat from "../components/ui/base/ContentBlock/PostContent/PostCat";
import Title from "../components/core/Title";
import PostMeta from "../components/ui/base/PostMeta";
import { humanizeTime } from "../utils/reading-time";
import { Link } from "gatsby";
import PrevNextPagesArea from "components/ui/base/PrevNextPagesArea";

export interface CategoryTemplateProps {
  pageContext: {
    pagination: {
      limit: number;
      skip: number;
      numberOfPages: number;
      currentPage: number;
      newerPath?: string;
      olderPath?: string;
    };
    parentCategory?: {
      name: string;
      slug: string;
      uri: string;
    };
    category: {
      uri: string;
      name: string;
      slug: string;
      seo: {
        metaDesc: string;
      };
      wpChildren: {
        nodes: {
          slug: string;
          name: string;
          seo: {
            metaDesc: string;
          };
        }[];
      };
    };
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
}

const CategoryTemplate = ({ pageContext }: CategoryTemplateProps) => {
  return (
    <GlobalWrapper withLayout headerWithShadow>
      <SEO
        title={pageContext.category.name}
        description={pageContext.category.seo.metaDesc}
      />
      <BreadcrumbArea
        title={pageContext.category.name}
        breadcrumbs={[
          { name: "BestOnDesk", link: "/" },
          ...(pageContext.parentCategory?.slug
            ? [
                {
                  name: pageContext.parentCategory.name,
                  link: pageContext.parentCategory.uri,
                },
              ]
            : []),
          {
            name: pageContext.category.name,
            link: pageContext.category.uri,
          },
        ]}
      />

      <PostListArea>
        <Container>
          <Row>
            <Col lg={8}>
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
                  categorySlugs={[pageContext.category.slug]}
                  childrenCategories={!pageContext.parentCategory}
                  excludeProvided
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

export default CategoryTemplate;

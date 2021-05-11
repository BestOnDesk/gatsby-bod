import React from "react";
import {
  PostGridContent,
  SinglePostGrid,
  StyledGridTabContent,
} from "./index.style";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { Col, Row } from "styled-bootstrap-grid";
import PostThumbnail from "../../ContentBlock/PostThumbnail";
import { getPostLink } from "../../../../../utils/links";
import PostContent from "../../ContentBlock/PostContent";
import PostCat from "../../ContentBlock/PostContent/PostCat";
import Title from "../../../../core/Title";
import PostMeta from "../../PostMeta";
import { AuthorPreview } from "../../../../../app-types/author";
import { getReadingTimeString } from "../../../../../utils/reading-time";
import { Link } from "gatsby";
import ContentBlock from "../../ContentBlock";

interface GridTabContentCategory {
  slug: string;
  name: string;
  posts: {
    nodes: {
      date: string;
      slug: string;
      title: string;
      content: string;
      author: {
        node: AuthorPreview;
      };
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
    }[];
  };
}

export interface GridTabContentProps {
  categories: GridTabContentCategory[];
  selectedIndex: number;
}

const getContentBlock = (
  category: GridTabContentCategory,
  index: number,
  big: boolean
) => (
  <ContentBlock postGrid postGridLarge={big} marginTop={30}>
    <PostThumbnail
      image={
        big
          ? category.posts.nodes[index].bigImage.node.localFile.childImageSharp
              .gatsbyImageData
          : category.posts.nodes[index].smallImage.node.localFile
              .childImageSharp.gatsbyImageData
      }
      alt={category.posts.nodes[index].title}
      link={getPostLink(category.posts.nodes[index].slug)}
    />
    <PostGridContent>
      <PostContent>
        <PostCat categories={[{ slug: category.slug, name: category.name }]} />
        <Title level={3}>
          <Link to={getPostLink(category.posts.nodes[index].slug)}>
            {category.posts.nodes[index].title}
          </Link>
        </Title>
        {big ? (
          <PostMeta
            date={category.posts.nodes[index].date}
            author={category.posts.nodes[index].author.node}
            readingTime={getReadingTimeString(
              category.posts.nodes[index].content
            )}
            postSlug={category.posts.nodes[index].slug}
            withShareButtons
          />
        ) : (
          <></>
        )}
      </PostContent>
    </PostGridContent>
  </ContentBlock>
);

const GridTabContent = (props: GridTabContentProps) => {
  return (
    <StyledGridTabContent>
      {props.categories.map((category, i) => {
        return (
          <Transition in={i === props.selectedIndex} timeout={150} key={i}>
            {(state: TransitionStatus) => (
              <SinglePostGrid state={state}>
                <Row>
                  <Col xl={7} lg={7} md={12} xs={12}>
                    {getContentBlock(category, 0, true)}
                  </Col>
                  <Col xl={5} lg={5} md={12} xs={12}>
                    <Row>
                      <Col xl={12} lg={12} md={6} xs={12}>
                        {getContentBlock(category, 1, false)}
                      </Col>
                      <Col xl={12} lg={12} md={6} xs={12}>
                        {getContentBlock(category, 2, false)}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </SinglePostGrid>
            )}
          </Transition>
        );
      })}
    </StyledGridTabContent>
  );
};

export default GridTabContent;

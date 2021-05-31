import React from "react";
import {
  AuthorInfo,
  Content,
  Description,
  Media,
  MediaBody,
  StyledAboutAuthor,
  Subtitle,
  Thumbnail,
} from "./index.style";
import { AuthorPreview } from "../../../../app-types/author";
import { graphql, Link, useStaticQuery } from "gatsby";
import { getAuthorLink } from "../../../../utils/links";
import StaticImg from "../../../core/StaticImg";
import { getAuthorAvatarRelativePath } from "../../../../utils/author";
import Title from "../../../core/Title";
import HoverFlip from "../../../core/HoverFlip";
import SocialShare from "../SocialShare";

export interface AboutAuthorProps {
  author: AuthorPreview;
  mainTitle?: boolean;
}

interface AboutAuthorQueryResult {
  authors: {
    nodes: {
      name: string;
      slug: string;
      description: string;
      details: {
        job: string;
      };
    }[];
  };
}

const AboutAuthor = (props: AboutAuthorProps) => {
  const { authors }: AboutAuthorQueryResult = useStaticQuery(graphql`
    {
      authors: allWpUser {
        nodes {
          name
          slug
          description
          details {
            job
          }
        }
      }
    }
  `);

  const author = authors.nodes.find(
    (queryAuthor) => queryAuthor.slug === props.author.slug
  );

  return author ? (
    <StyledAboutAuthor>
      <Media>
        <Thumbnail>
          <Link to={getAuthorLink(author.slug)}>
            <StaticImg
              style={{ width: 105, height: 105 }}
              alt={author.name}
              src={getAuthorAvatarRelativePath(author.slug)}
            />
          </Link>
        </Thumbnail>
        <MediaBody>
          <AuthorInfo>
            <Title level={props.mainTitle ? 1 : 5}>
              <HoverFlip to={getAuthorLink(author.slug)}>
                {author.name}
              </HoverFlip>
            </Title>
            <Subtitle>{author.details.job}</Subtitle>
          </AuthorInfo>
          <Content>
            <Description>{author.description}</Description>
            <SocialShare sizeMd />
          </Content>
        </MediaBody>
      </Media>
    </StyledAboutAuthor>
  ) : (
    <></>
  );
};

export default AboutAuthor;

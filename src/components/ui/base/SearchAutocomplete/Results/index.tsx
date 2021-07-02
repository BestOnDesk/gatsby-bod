import React from "react";
import { InnerContainer, NoResults, StyledResults } from "./index.style";
import { connectStateResults, PoweredBy } from "react-instantsearch-dom";
import { StateResultsProvided } from "react-instantsearch-core";
import PostThumbnail from "../../ContentBlock/PostThumbnail";
import ContentBlock from "../../ContentBlock";
import { getPostLink } from "../../../../../utils/links";
import PostContent from "../../ContentBlock/PostContent";
import Title from "../../../../core/Title";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import PostMeta from "../../PostMeta";
import { humanizeTime } from "../../../../../utils/reading-time";

const Hits = (props: StateResultsProvided) => {
  if (!props.searchResults || !props.searchResults.query) {
    return <NoResults>Cosa stai cercando?</NoResults>;
  }
  if (props.searchResults && props.searchResults.nbHits < 1) {
    return (
      <NoResults>
        {`Nessun risultato per "${props.searchResults.query}"`}
      </NoResults>
    );
  } else {
    return (
      <>
        {props.searchResults.hits.map((hit) => (
          <ContentBlock postMedium marginBottom={20}>
            <PostThumbnail
              image={(hit.image as any) as IGatsbyImageData}
              alt={hit.title}
              link={getPostLink(hit.slug)}
            />
            <PostContent>
              <Title level={6}>
                <Link to={getPostLink(hit.slug)}>{hit.title}</Link>
              </Title>
              <PostMeta
                date={hit.date}
                readingTime={humanizeTime(parseFloat(hit.readingTime))}
                postSlug={hit.slug}
                noMargin
              />
            </PostContent>
          </ContentBlock>
        ))}
      </>
    );
  }
};

const ConnectedHits = connectStateResults(Hits);

const Results = () => {
  return (
    <StyledResults>
      <InnerContainer>
        <ConnectedHits />
      </InnerContainer>
      <PoweredBy />
    </StyledResults>
  );
};

export default Results;

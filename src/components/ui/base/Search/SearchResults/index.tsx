import React from "react";
import { StateResultsProvided } from "react-instantsearch-core";
import { NoResults } from "../SearchAutocomplete/Results/index.style";
import ContentBlock from "../../ContentBlock";
import PostThumbnail from "../../ContentBlock/PostThumbnail";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { getPostLink } from "../../../../../utils/links";
import PostContent from "../../ContentBlock/PostContent";
import Title from "../../../../core/Title";
import { Link } from "gatsby";
import PostMeta from "../../PostMeta";
import { humanizeTime } from "../../../../../utils/reading-time";
import { connectStateResults } from "react-instantsearch-dom";
import PostCat, {
  PostCatCategory,
} from "../../ContentBlock/PostContent/PostCat";
import { AuthorPreview } from "../../../../../app-types/author";

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
          <ContentBlock postListView marginTop={30} key={hit.slug}>
            <PostThumbnail
              image={hit.image as any as IGatsbyImageData}
              alt={hit.title}
              link={getPostLink(hit.slug)}
            />
            <PostContent>
              <PostCat
                categories={hit.categories as any as PostCatCategory[]}
              />
              <Title level={4}>
                <Link to={getPostLink(hit.slug)}>{hit.title}</Link>
              </Title>
              <PostMeta
                date={hit.date}
                readingTime={humanizeTime(parseFloat(hit.readingTime))}
                postSlug={hit.slug}
                author={hit.author as any as AuthorPreview}
                noAuthorImage
                withShareButtons
              />
            </PostContent>
          </ContentBlock>
        ))}
      </>
    );
  }
};

const ConnectedHits = connectStateResults(Hits);

const SearchResults = () => {
  return <ConnectedHits />;
};

export default SearchResults;

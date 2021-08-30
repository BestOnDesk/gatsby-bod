import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import ErrorArea from "../components/ui/extended/ErrorArea";

interface NotFoundPageProps {
  location: Location;
}

export default ({ location }: NotFoundPageProps) => {
  return (
    <GlobalWrapper withLayout withoutFooter headerWithShadow>
      <SEO
        title={"Errore 404"}
        description={"Errore 404"}
        location={location}
      />
      <ErrorArea />
    </GlobalWrapper>
  );
};

import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";

export default () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"Chi siamo"} description={"Description chi siamo"} />

      <h1>Chi siamo</h1>
    </GlobalWrapper>
  );
};

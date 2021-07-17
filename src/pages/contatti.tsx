import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";

export default () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"Contatti"} description={"Description contatti"} />

      <h1>Contatti</h1>
    </GlobalWrapper>
  );
};

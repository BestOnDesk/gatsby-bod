import * as React from "react";
import GlobalWrapper from "components/core/GlobalWrapper";
import Last5PostsSlider from "components/ui/extended/Last5PostsSlider";
import HomeFeaturedPost from "components/ui/extended/HomeFeaturedPost";
import TabArea from "components/ui/extended/TabArea";
import PostGridArea from "../components/ui/extended/PostGridArea";

export default () => {
  return (
    <GlobalWrapper withLayout={true}>
      <Last5PostsSlider />

      <HomeFeaturedPost
        slugLeft={"le-migliori-sedie-da-ufficio"}
        slugRight={"i-migliori-notebook"}
      />

      <TabArea mainCategorySlug={"prodotti"} />

      <PostGridArea />
    </GlobalWrapper>
  );
};

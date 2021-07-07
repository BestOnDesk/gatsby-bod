import * as React from "react";
import GlobalWrapper from "components/core/GlobalWrapper";
import Last5PostsSlider from "components/ui/extended/Last5PostsSlider";
import HomeFeaturedPost from "components/ui/extended/HomeFeaturedPost";
import TabArea from "components/ui/extended/TabArea";
import PostGridArea from "../components/ui/extended/PostGridArea";
import AltPostArea from "../components/ui/extended/AltPostArea";
import SocialArea from "../components/ui/base/SocialArea";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
} from "../constants/socials";
import CategoriesList from "../components/ui/extended/CategoriesList";
import SEO from "../components/core/SEO";

export default () => {
  return (
    <GlobalWrapper withLayout={true}>
      <SEO title={"Home"} description={"Test"} />

      <Last5PostsSlider />

      <HomeFeaturedPost />

      <TabArea mainCategorySlug={"prodotti"} />

      <AltPostArea />

      <CategoriesList
        slugs={[
          "libri",
          "tecnologia",
          "corsi",
          "successo-denaro",
          "gestione-risorse",
          "motivazione",
        ]}
      />

      <SocialArea
        noPaddingBottom
        socials={[
          {
            link: INSTAGRAM_URL,
            type: "instagram",
          },
          {
            link: FACEBOOK_URL,
            type: "facebook",
          },
          {
            link: LINKEDIN_URL,
            type: "linkedin",
          },
          {
            link: TELEGRAM_URL,
            type: "telegram",
          },
        ]}
      />

      <PostGridArea mainCategorySlug={"crescita-personale"} backgroundGrey />
    </GlobalWrapper>
  );
};

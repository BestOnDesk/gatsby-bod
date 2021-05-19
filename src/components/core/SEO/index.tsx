import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { Image, OpenGraphObject, TwitterCard } from "app-types/seo";
import { getOpenGraphTypeMetas } from "utils/seo";
import { globalHistory } from "@reach/router";
import { Thing, WithContext } from "schema-dts";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface SEOProps {
  title: string;
  withoutTitleSuffix?: boolean;
  description: string;
  canonical?: string;
  image?: Image;
  openGraph?: OpenGraphObject;
  twitterCard?: TwitterCard;
  meta?: JSX.IntrinsicElements["meta"][];
  structuredData?: WithContext<Thing>[];
}

export interface SEOImage {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

interface SEOQueryProps {
  cardImage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  images: {
    edges: {
      node: {
        relativePath: string;
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    }[];
  };
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
    };
  };
}

const SEO = (props: SEOProps) => {
  // TODO: Change default meta img
  const { site, cardImage, images }: SEOQueryProps = useStaticQuery(graphql`
    query {
      cardImage: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo/logo-light.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      images: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { ne: "svg" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  const getSEOImage = (image: Image | undefined): SEOImage | undefined => {
    if (image?.imageData?.images.fallback) {
      return {
        src: site.siteMetadata.siteUrl + image.imageData.images.fallback.src,
        width: image.imageData.width,
        height: image.imageData.height,
        alt: image.alt,
      };
    } else if (image?.relativePath) {
      const relativeImage = images.edges.filter(
        (edge) => edge.node.relativePath === image.relativePath
      )[0].node.childImageSharp.gatsbyImageData;

      if (relativeImage.images.fallback) {
        return {
          src: site.siteMetadata.siteUrl + relativeImage.images.fallback.src,
          width: relativeImage.width,
          height: relativeImage.height,
          alt: image.alt,
        };
      }
    }
    return undefined;
  };

  const lang = "it";
  const image = getSEOImage(props.image);
  const ogImage = getSEOImage(props.openGraph?.image);
  const twitterImage = getSEOImage(props.twitterCard?.image);

  let defaultImage: SEOImage | undefined = undefined;
  if (cardImage.childImageSharp.gatsbyImageData.images.fallback?.src) {
    defaultImage = {
      src:
        site.siteMetadata.siteUrl +
        cardImage.childImageSharp.gatsbyImageData.images.fallback.src,
      width: cardImage.childImageSharp.gatsbyImageData.width,
      height: cardImage.childImageSharp.gatsbyImageData.height,
    };
  } else {
    new Error("Default SEO Image not found");
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={props.title}
      titleTemplate={
        props.withoutTitleSuffix ? undefined : `%s | ${site.siteMetadata.title}`
      }
      link={
        props.canonical
          ? [{ rel: "canonical", key: props.canonical, href: props.canonical }]
          : []
      }
      meta={[
        {
          name: `description`,
          content: props.description,
        },
        {
          property: `og:title`,
          content:
            props.openGraph && props.openGraph.title
              ? props.openGraph.title
              : props.withoutTitleSuffix
              ? props.title
              : `${props.title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content:
            props.openGraph && props.openGraph.description
              ? props.openGraph.description
              : props.description,
        },
        {
          property: `og:site_name`,
          content: props.openGraph?.siteName
            ? props.openGraph.siteName
            : site.siteMetadata.title,
        },
        {
          property: `og:url`,
          content: props.canonical
            ? props.canonical
            : `${site.siteMetadata.siteUrl}${globalHistory.location.pathname}`,
        },
        {
          property: `og:image`,
          content: ogImage
            ? ogImage.src
            : image
            ? image.src
            : defaultImage?.src,
        },
        {
          property: `og:image:width`,
          content: ogImage
            ? ogImage.width.toString()
            : image
            ? image.width.toString()
            : defaultImage?.width.toString(),
        },
        {
          property: `og:image:height`,
          content: ogImage
            ? ogImage.height.toString()
            : image
            ? image.height.toString()
            : defaultImage?.height.toString(),
        },
        {
          property: `og:image:alt`,
          content: props.openGraph?.image
            ? props.openGraph.image.alt
            : "Customerly",
        },
        ...getOpenGraphTypeMetas(props.openGraph?.type),
        {
          property: `twitter:card`,
          content: "summary_large_image",
        },
        {
          property: `twitter:title`,
          content:
            props.twitterCard && props.twitterCard.title
              ? props.twitterCard.title
              : props.title,
        },
        {
          property: `twitter:description`,
          content:
            props.twitterCard && props.twitterCard.description
              ? props.twitterCard.description
              : props.description,
        },
        {
          property: `twitter:image`,
          content: twitterImage
            ? twitterImage.src
            : image
            ? image.src
            : defaultImage?.src,
        },
      ].concat(props.meta ? props.meta : [])}
    >
      {props.structuredData &&
        props.structuredData.map((data, i) => {
          return (
            <script type="application/ld+json" key={i}>
              {JSON.stringify(data)}
            </script>
          );
        })}
    </Helmet>
  );
};

export default SEO;

const path = require("path");
require("dotenv").config();

const url = process.env.GATSBY_SITE_URL || ***REMOVED***;

module.exports = {
  siteMetadata: {
    title: "BestOnDesk",
    siteUrl: url,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url:
          process.env.GATSBY_WP_SOURCE_URL ||
          ***REMOVED***,
        schema: {
          timeout: 3600000,
          requestConcurrency: 150,
        },
        develop: {
          hardCacheMediaFiles: true,
          hardCacheData: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        "app-types": path.join(__dirname, "src/app-types"),
        components: path.join(__dirname, "src/components"),
        create: path.join(__dirname, "src/create"),
        fonts: path.join(__dirname, "src/fonts"),
        pages: path.join(__dirname, "src/pages"),
        stories: path.join(__dirname, "src/stories"),
        styles: path.join(__dirname, "src/styles"),
        templates: path.join(__dirname, "src/templates"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        fileName: false,
        displayName: process.env.NODE_ENV === "development",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/media/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/media/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: (node) => node.internal.type === `WpPost`,
        source: (node) => node.content,
        contextFields: ["slug"],
        fragment: true,
        space: `html`,
        emitParseErrors: false,
        verbose: false,
        plugins: [],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: [
          {
            query: `{
              allWpPost {
                nodes {
                  slug
                  title
                  date(formatString: "DD MMM YYYY", locale: "it")
                  content
                  modified
                  seo {
                    metaDesc
                    readingTime
                  }
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                  tags {
                    nodes {
                      name
                    }
                  }
                }
              }
            }`,
            transformer: ({ data }) =>
              data.allWpPost.nodes.map((node) => {
                const content = require("string-strip-html").stripHtml(
                  node.content,
                  {
                    stripTogetherWithTheirContents: ["script", "style"],
                  }
                ).result;
                return {
                  objectID: node.slug,
                  slug: node.slug,
                  title: node.title,
                  desc: node.seo.metaDesc,
                  modified: node.modified,
                  date: node.date,
                  content: content
                    .replace(/\.\.\./g, " ")
                    .trim() // Remove HTML
                    .replace(/\s+/g, " "),
                  tags: node.tags.nodes.map((node) => node.name),
                  image:
                    node.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData,
                  readingTime: node.readingTime,
                  matchFields: ["slug", "modified"],
                };
              }),
            indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
            settings: {},
          },
        ],
        enablePartialUpdates: true,
        matchFields: ["slug", "modified"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Red Hat Display\:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_S3_BUCKET || ***REMOVED***,
        protocol: "https",
        hostname: process.env.AWS_S3_BUCKET || ***REMOVED***,
        generateMatchPathRewrites: false,
        generateRoutingRules: true,
        generateRedirectObjectsForPermanentRedirects: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          staging: {
            policy: [
              { userAgent: "AhrefsSiteAudit", allow: ["/"] },
              { userAgent: "Screaming Frog SEO Spider", allow: ["/"] },
              { userAgent: "*", disallow: ["/"] },
            ],
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
              },
              { userAgent: "*", allow: "/" },
            ],
          },
        },
      },
    },
  ],
};

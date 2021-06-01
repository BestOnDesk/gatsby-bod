const path = require("path");

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
        url: ***REMOVED***,
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
      resolve: `gatsby-plugin-react-redux-persist`,
      options: {
        pathToCreateStoreModule: "./src/state/createStore",
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
          ignoreFunction: true,
        },
        cleanupOnClient: true,
        windowKey: "__PRELOADED_STATE__",
      },
    },
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
        contextFields: [],
        fragment: true,
        space: `html`,
        emitParseErrors: false,
        verbose: false,
        plugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: `${__dirname}/src/media/videos/`,
      },
      __key: "videos",
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Red Hat Display\:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500`,
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-netlify",
  ],
};

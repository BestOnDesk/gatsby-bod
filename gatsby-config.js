const path = require("path");

module.exports = {
  siteMetadata: {
    title: "BestOnDesk",
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
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/styles"),
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
    //{
    //  resolve: "gatsby-plugin-google-analytics",
    //  options: {
    //    trackingId: "",
    //  },
    //},
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-image",
  ],
};

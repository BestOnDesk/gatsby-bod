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
    "gatsby-plugin-styled-components",
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

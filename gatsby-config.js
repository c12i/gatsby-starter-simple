module.exports = {
  siteMetadata: {
    title: `Simple Blog`,
    description: `Kick off your next, great Gatsby project with this simple starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Simple`,
  },
  pathPrefix: "/gatsby-starter-simple",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-simple`,
        short_name: `simple`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/simple-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mydisqus`
      }
    },
    `gatsby-plugin-offline`,
  ],
}

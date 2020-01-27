module.exports = {
  siteMetadata: {
    title: `⚛️ Gatsby Starter with Typescript`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Kahlil Whitfield`,
    socialMedia: {
      twitter: {
        twitterCard: `summary`,
        twitterTitle: `darkristy`,
        twitterDescription: `🏠 my home on the web`,
        twitterImage: ``,
        twitterSite: `@darkristy`,
      },
      facebook: {
        facebookUrl: `https://bornwhitfield.space`,
        facebookTitle: `bornwhitfield`,
        facebookDescription: `🏠 my home on the web`,
        facebookImage: ``,
        facebookType: `website`,
      },
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

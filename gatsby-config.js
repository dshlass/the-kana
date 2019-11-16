module.exports = {
  siteMetadata: {
    title: 'Severus Snape',
    titleTemplate: '%s · The Real Hero',
    description: 'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
    author: 'Dale Shlass',
    url: 'https://www.dshlass.github.io.com', // No trailing slash allowed!
    image: '/images/gatsby-icon.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@occlumency'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        // eslint-disable-next-line no-useless-escape
        ignore: [`**/\.*`] // ignore files starting with a dot
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
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
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};

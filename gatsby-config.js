module.exports = {
  siteMetadata: {
    title: `mintthemoon`,
    siteUrl: `https://mintthemoon.xyz`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chains`,
        path: `${__dirname}/src/chains`,
      }
    },
    `gatsby-plugin-sass`,
  ],
}

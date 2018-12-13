const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'davidcunha.xyz',
    author: 'David Cunha',
    description:
      'Hello, I’m David. I’m a professional Software Engineer with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `davidcunha.xyz`,
        short_name: `davidcunha`,
        start_url: '/',
        background_color: '#FCFCFC',
        theme_color: '#FCFCFC',
        display: 'minimal-ui',
        icon: 'src/assets/images/computer-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}

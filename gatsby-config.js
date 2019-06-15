const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'davidcunha.xyz',
    author: 'David Cunha',
    description:
      'Hello, I’m David. I’m a professional Software Engineer and Scrum Master with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'davidcunha.xyz',
        short_name: 'davidcunha',
        start_url: '/',
        background_color: '#171717',
        theme_color: '#171717',
        display: 'minimal-ui',
        icon: 'src/images/computer-icon.png',
      },
    },
  ],
};

require('regenerator-runtime/runtime');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Marisa Morby · Transformation Designer and UX Researcher',
    titleTemplate: '%s · Marisa Morby',
    description:
      'Marisa Morby is a product manager, user experience researcher, designer, and strategist living in Portland, OR.',
    url: 'https://marisamorby.com', // no trailing slash!
    image: '/images/marisa-morby.jpg',
    owner: 'Marisa Morby',
    twitterUsername: '@marisamorby',
    facebookAppID: '',
    nav: [
      { path: 'https://medium.com/@marisamorby', name: 'Blog', hidden: true },
      { path: '/#about', name: 'About' },
      { path: '/#process', name: 'Process' },
      { path: '/#speaking', name: 'Speaking' },
      { path: '/#contact', name: 'Contact' },
    ],
    categories: [
      { slug: 'confidence', name: 'Confidence' },
      { slug: 'better-humans', name: 'Better Humans' },
      { slug: 'business-basics', name: 'Business Basics' },
      { slug: 'uncomfortable-things', name: 'Uncomfortable Things' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-twitter',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#faf6fa',
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-numbered-footnotes',
        ],
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        baseId: `appEToRRhrPEVkmU2`,
        tableName: `Speaking Engagements`,
        tableView: `Grid view`,
        queryName: `SpeakingEngagements`,
      },
    },
    'gatsby-plugin-offline',
  ],
};

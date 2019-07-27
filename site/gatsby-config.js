require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Marisa Morby · Transformation Designer and UX Researcher',
    titleTemplate: '%s · Marisa Morby',
    description:
      'Marisa Morby is a product manager, user experience researcher, designer, and strategist living in Portland, OR.',
    baseUrl: 'https://marisamorby.com', // no trailing slash!
    image: '/images/marisa-morby.jpg',
    owner: 'Marisa Morby',
    twitterUsername: '@marisamorby',
    facebookAppID: '',
    nav: [
      { path: '/articles', name: 'Articles' },
      { path: '/#about', name: 'About' },
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-theme-blog-sanity',
      options: {
        path: '/articles',
        includePathInPosts: false,
        sanity: {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
          token: process.env.SANITY_READ_TOKEN,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'sections',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/section.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 540,
              tracedSVG: { color: '#faf6fa' },
              withWebp: true,
            },
          },
        ],
        plugins: [
          {
            resolve: 'gatsby-plugin-manifest',
            options: {
              name: 'Marisa Morby',
              short_name: 'Marisa',
              start_url: '/',
              background_color: '#ffffff',
              theme_color: '#a330f6',
              display: 'standalone',
              icon: 'static/marisa-morby.svg',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 540,
              tracedSVG: { color: '#faf6fa' },
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appEToRRhrPEVkmU2`,
            tableName: `Speaking Engagements`,
            queryName: `SpeakingEngagements`,
          },
        ],
      },
    },
  ],
};

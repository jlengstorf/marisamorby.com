const isProd = process.env.NODE_ENV === 'production';

module.exports = ({ baseUrl = '', image = '', sanity = {} }) => ({
  siteMetadata: {
    title: 'Gatsby Blog Powered By Sanity',
    description: 'This is a Gatsby blog that uses Sanity.io for writing posts.',
    baseUrl, // used to create absolute URLs for SEO
    image, //
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: sanity.projectId || process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: sanity.dataset || process.env.GATSBY_SANITY_DATASET,
        token: sanity.token || process.env.SANITY_READ_TOKEN,
        watchMode: sanity.watchMode || !isProd,
        overlayDrafts: sanity.overlayDrafts || !isProd,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
  ],
});

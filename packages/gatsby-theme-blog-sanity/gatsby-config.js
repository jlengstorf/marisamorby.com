const isProd = process.env.NODE_ENV === 'production';

module.exports = ({ sanity = {} }) => ({
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: sanity.projectId || process.env.SANITY_PROJECT_ID,
        dataset: sanity.dataset || process.env.SANITY_DATASET,
        token: sanity.token || process.env.SANITY_READ_TOKEN,
        watchMode: sanity.watchMode || !isProd,
        overlayDrafts: sanity.overlayDrafts || !isProd,
      },
    },
    'gatsby-plugin-emotion',
  ],
});

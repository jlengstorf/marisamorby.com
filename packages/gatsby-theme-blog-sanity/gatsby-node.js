const _ = require('lodash');
const { paginate, groupPostsByCategory } = require('./gatsby-utils/pagination');

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const result = await graphql(`
    query {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        sort: { fields: publishedAt, order: DESC }
      ) {
        nodes {
          id
          title
          description
          slug {
            current
          }
          categories {
            title
          }
          mainImage {
            asset {
              fixed(width: 150, height: 150) {
                base64
                height
                src
                srcSet
                srcSetWebp
                srcWebp
                width
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('unable to load posts from Sanity', result.errors);
  }

  const posts = (result.data.allSanityPost.nodes || []).map(post => ({
    ...post,
    path: options.includePathInPosts
      ? `${options.path}/${post.slug.current}`
      : `/${post.slug.current}`,
  }));

  // create a page for each post
  posts.forEach(post => {
    actions.createPage({
      path: post.path,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: post.id,
        postPath: post.path,
      },
    });
  });

  const paginationDefaults = {
    createPage: actions.createPage,
    component: require.resolve('./src/templates/post-previews.js'),
  };

  // create pages for all posts
  paginate(posts, {
    ...paginationDefaults,
    pathTemplate: `${options.path}/<%= pageNumber %>`,
  });

  // create category-specific pages
  const postsByCategory = groupPostsByCategory(posts);

  Object.entries(postsByCategory).forEach(([category, postGroup]) => {
    const catSlug = _.kebabCase(category);

    paginate(postGroup, {
      ...paginationDefaults,
      pathTemplate: `${options.path}/category/${catSlug}/<%= pageNumber %>`,
      category,
    });
  });
};

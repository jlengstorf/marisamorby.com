const path = require('path');
const template = require('lodash.template');

const POSTS_PER_PAGE = 10;

const getSlug = (...parts) => `/${parts.filter(Boolean).join('/')}/`;

const getUnique = (field, posts) =>
  posts.reduce((uniques, { node: post }) => {
    const values = [post.frontmatter[field]];

    return uniques.concat(values.filter(val => !uniques.includes(val)));
  }, []);

const groupPostsByUnique = (field, posts) => {
  const uniqueValues = getUnique(field, posts);

  return uniqueValues.reduce(
    (grouped, unique) => ({
      ...grouped,
      [unique]: posts.filter(
        ({ node: post }) => post.frontmatter[field] === unique,
      ),
    }),
    {},
  );
};

// Add paginated blog preview pages. Here’s how it works:
//
// 1.  We map over all the posts and — when we get to a post that starts
//     a page — we slice the appropriate number of posts into a group.
//     For all the other posts, we return `null`. This gives us
//     something like `[[{post, ...}, null, null, {post, ...}, ...]]`
// 2.  Next, we filter out all `null` entries.
// 3.  Finally, we create a new page for each post group.
//
// Adapted from https://github.com/pixelstew/gatsby-paginate
const paginate = (
  { pathTemplate, createPage, component, type, value },
  posts,
) =>
  posts
    // 1
    .map(
      (post, index, allPosts) =>
        index % POSTS_PER_PAGE === 0
          ? allPosts.slice(index, index + POSTS_PER_PAGE)
          : null,
    )
    // 2
    .filter(item => item)
    // 3
    .forEach((postGroup, index, allGroups) => {
      const isFirstPage = index === 0;
      const currentPage = index + 1;
      const totalPages = allGroups.length;
      const getPath = template(pathTemplate);

      createPage({
        path: getPath({ pageNumber: isFirstPage ? '' : currentPage }),
        component,
        context: {
          postGroup,
          type,
          value,
          currentPage,
          totalPages,
          isFirstPage,
          isLastPage: currentPage === totalPages,
          linkBase: getPath({ pageNumber: '' }),
        },
      });
    });

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const fileData = path.parse(fileNode.relativePath);
    const slug = getSlug(fileData.dir, fileData.name).replace(
      /^\/(?:pages|posts)(.*)$/,
      '$1',
    );

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions: { createPage, createRedirect } }) =>
  new Promise((resolve, reject) => {
    const templates = {
      page: path.resolve('src/templates/page.js'),
      post: path.resolve('src/templates/post.js'),
      previews: path.resolve('src/templates/previews.js'),
    };

    resolve(
      graphql(`
        {
          pages: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: { glob: "**/{pages,posts}/**" } }
          ) {
            edges {
              node {
                id
                fileAbsolutePath
                fields {
                  slug
                }
                frontmatter {
                  title
                  slug
                  description
                  category
                }
                excerpt
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const paginationDefaults = {
          createPage,
          component: templates.previews,
        };

        const allPosts = result.data.pages.edges
          .filter(({ node }) => node.frontmatter.publish !== false)
          .filter(({ node }) => node.fileAbsolutePath.includes('posts'));

        const postsByCategory = groupPostsByUnique('category', allPosts);

        Object.entries(postsByCategory).forEach(catData => {
          const category = catData[0];
          const posts = catData[1];

          paginate(
            {
              ...paginationDefaults,
              pathTemplate: `/articles/category/${category}/<%= pageNumber %>`,
              type: 'category',
              value: category,
            },
            posts,
          );
        });

        paginate(
          {
            ...paginationDefaults,
            pathTemplate: '/articles/<%= pageNumber %>',
            type: 'all',
            value: null,
          },
          allPosts,
        );

        // Create an alias for the first page of blog listings.
        createRedirect({
          fromPath: '/articles/1',
          toPath: '/articles/',
          isPermanent: true,
          redirectInBrowser: true,
        });

        result.data.pages.edges.forEach(({ node: page }) => {
          // We manually create these pages, so skip them here.
          if (['/articles/'].includes(page.fields.slug)) {
            return;
          }

          // Also bail if this post is a draft
          if (page.frontmatter.draft === true) {
            return;
          }

          const realPath = page.frontmatter.slug || page.fields.slug;
          const type = page.fileAbsolutePath.match(/\/posts\//)
            ? 'post'
            : 'page';

          createPage({
            path: realPath !== '/index/' ? realPath : '/',
            component: templates[type],
            context: {
              slug: page.fields.slug,
            },
          });
        });
      }),
    );
  });

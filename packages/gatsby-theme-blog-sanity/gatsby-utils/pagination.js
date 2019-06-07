// we’re not sending this to the browser, so we don’t need to stress about bundle size
const _ = require('lodash');

const paginate = (
  posts,
  {
    reporter = console,
    postsPerPage = 10,
    pathTemplate = '/blog/<%= pageNumber %>',
    category = '.*', // load all posts by default
    createPage,
    component,
  },
) => {
  if (posts.length < 1) {
    reporter.error('no posts supplied');
  }

  const pages = _.chunk(posts, postsPerPage);

  pages.forEach((group, index, allGroups) => {
    const isFirstPage = index === 0;
    const currentPage = index + 1;
    const totalPages = allGroups.length;
    const getPath = _.template(pathTemplate);
    const path = getPath({ pageNumber: isFirstPage ? '' : currentPage });

    createPage({
      path,
      component,
      context: {
        group,
        category: `/${category}/`,
        // TODO add a template for page headings
        isFirstPage,
        currentPage,
        totalPages,
        isLastPage: currentPage === totalPages,
        linkBase: getPath({ pageNumber: '' }),
      },
    });
  });
};

// get unique category titles from the Sanity data
const getCategories = posts =>
  _.map(_.uniqBy(_.flatMap(posts, 'categories'), 'title'), 'title');

const groupPostsByCategory = posts => {
  const categories = getCategories(posts);

  return categories.reduce(
    (grouped, unique) => ({
      ...grouped,
      [unique]: posts.filter(post => {
        const cats = post.categories || [];
        return cats.some(cat => cat.title === unique);
      }),
    }),
    {},
  );
};

module.exports = {
  paginate,
  groupPostsByCategory,
};

/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  totalPages,
  linkBase,
  ...props
}) => (
  <div
    className="pagination"
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 4,
      a: {
        display: 'inline-block',
        my: 0,
        mx: 2,
        padding: 2,
        ':first-of-type': {
          marginLeft: 0,
        },
        ':last-of-type': {
          marginRight: 0,
        },
        '&.newer': {
          marginRight: 'auto',
        },
        '&.older': {
          marginLeft: 'auto',
        },
      },
    }}
    {...props}
  >
    {!isFirstPage && currentPage !== 2 && (
      <Link to={linkBase} title="jump to newest posts" className="newest">
        « <span className="screen-reader-text">newest posts</span>
      </Link>
    )}
    {!isFirstPage && (
      <Link
        to={`${linkBase}${currentPage - 1 === 1 ? '' : currentPage - 1}`}
        className="newer"
      >
        ‹ newer posts
      </Link>
    )}
    {!isLastPage && (
      <Link to={`${linkBase}${currentPage + 1}`} className="older">
        older posts ›
      </Link>
    )}
    {!isLastPage && currentPage !== totalPages - 1 && (
      <Link to={`${linkBase}${totalPages}`} title="jump to oldest posts">
        <span className="screen-reader-text">oldest post</span> »
      </Link>
    )}
  </div>
);

export default Pagination;

/** @jsx jsx */
import { jsx } from 'theme-ui';
import BasePagination from 'gatsby-theme-blog-sanity/src/components/pagination';

const Pagination = props => (
  <BasePagination
    {...props}
    sx={{
      a: {
        color: 'muted',
        textDecoration: 'none',
      },
    }}
  />
);

export default Pagination;

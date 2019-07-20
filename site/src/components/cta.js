/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const CTA = ({ to, children }) => (
  <Link
    sx={{
      display: 'block',
      mx: 'auto',
      ':active,:focus,:hover': {
        cursor: 'pointer',
        outline: 'none',
      },
    }}
    to={to}
  >
    {children}
  </Link>
);

export default CTA;

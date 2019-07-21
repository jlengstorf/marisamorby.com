/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          nav {
            name
            path
          }
        }
      }
    }
  `);

  return (
    <footer
      sx={{
        borderTop: '1px solid',
        borderColor: 'grayAlpha',
        color: 'muted',
        fontSize: 0,
        marginBottom: 0,
        marginTop: 6,
        mx: 'auto',
        paddingBottom: 4,
        paddingTop: 5,
        px: '5vw',
        textAlign: 'center',
        a: {
          color: 'muted',
          display: 'inline-block',
          mx: 2,
          my: 0,
          padding: 1,
          textDecoration: 'none',
        },
        '& p': {
          padding: 1,
        },
        '@media (min-width: 540px)': {
          display: 'flex',
          justifyContent: 'space-between',
          mx: 0,
          px: 'calc((100vw - 540px) / 2)',
          '> *': {
            marginTop: 0,
          },
        },
      }}
    >
      <nav>
        {data.site.siteMetadata.nav.map(link => (
          <Link key={`footerlink-${link.path}`} to={link.path}>
            {link.name}
          </Link>
        ))}
      </nav>
      <p>© Marisa Morby</p>
    </footer>
  );
};

export default Footer;

/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Nav from './nav';

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        meta: siteMetadata {
          navLinks: nav {
            name
            path
          }
        }
      }
    }
  `);
  const navLinks = data.site.meta.navLinks;

  return (
    <header
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        fontFamily: 'heading',
        fontSize: 3,
        fontWeight: 'body',
        margin: 0,
        px: '5vw',
        py: 2,
        position: 'sticky',
        textAlign: 'center',
        textTransform: 'lowercase',
        top: 0,
        width: '100%',
        zIndex: 100,
        '.home-link': {
          textAlign: 'center',
        },
        a: {
          color: 'inherit',
          display: 'inline-block',
          padding: 2,
          position: 'relative',
          textDecoration: 'none',
          '&:after': {
            backgroundColor: 'primary',
            borderRadius: 2,
            content: '" "',
            height: '2px',
            left: 0,
            opacity: 0,
            position: 'absolute',
            top: 0,
            transition: '150ms linear all',
            right: 0,
          },
          ':hover,:active,:focus,[aria-current],&.active': {
            outline: 'none',
            '&:after': {
              opacity: '0.25',
            },
          },
        },
        nav: {
          marginTop: 0,
          a: {
            fontSize: ['80%', '100%'],
            marginLeft: 1,
            marginTop: 0,
            ':first-of-type': {
              marginLeft: 0,
            },
            ':active,&[aria-current],&.active': {
              '::after': {
                opacity: 1,
              },
            },
          },
        },
        '@media (min-width: 550px)': {
          alignItems: 'flex-end',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          pt: 4,
          px: 'calc((100vw - 540px) / 2)',
          pb: 3,
          '.home-link': {
            textAlign: 'left',
          },
          nav: {
            mt: 0,
          },
        },
      }}
    >
      <p className="home-link">
        <Link to="/">Marisa Morby</Link>
      </p>
      <Nav navLinks={navLinks} />
    </header>
  );
};

export default Header;

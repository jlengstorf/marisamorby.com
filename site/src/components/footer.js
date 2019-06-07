import React from 'react';
import { css } from '@emotion/core';
import { dimensions, typography, colors } from '../tokens';
import { useStaticQuery, graphql, Link } from 'gatsby';

const footerStyles = css`
  border-top: 1px solid ${colors.black}22;
  color: ${colors.textLight};
  font-size: ${typography.small.fontSize};
  margin: 4rem auto 0;
  padding: 1.25rem 5vw 1rem;
  text-align: center;

  a {
    color: inherit;
    display: inline-block;
    margin: 0 0.25rem;
    padding: 0.125rem;
    text-decoration: none;
  }

  p {
    padding: 0.125rem;
  }

  @media (min-width: 540px) {
    display: flex;
    justify-content: space-between;
    padding-left: calc((100vw - ${dimensions.maxWidth}) / 2);
    padding-right: calc((100vw - ${dimensions.maxWidth}) / 2);

    > * {
      margin-top: 0;
    }

    p {
      margin-left: 2rem;
    }
  }
`;

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
    <footer css={footerStyles}>
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

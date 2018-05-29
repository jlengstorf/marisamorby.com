import React from 'react';
import styled from 'react-emotion';
import { Link, StaticQuery } from 'gatsby';

const Nav = styled('nav')`
  text-align: center;
`;

const LinkWrap = ({ to, children, ...props }) =>
  /^\/(?!\/)/.test(to) ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <a href={to} {...props}>
      {children}
    </a>
  );

const NavLink = styled(LinkWrap)`
  color: inherit;
  display: inline-block;
  margin: 0 0.25rem;
  padding: 0.25rem;
  text-decoration: none;

  @media (min-width: 480px) {
    padding: 0.375rem;
  }

  @media (min-width: 800px) {
    margin-right: 0.5rem;

    &:first-child {
      margin-left: -0.5rem;
    }
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            nav {
              path
              name
              hidden
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { nav },
      },
    }) => (
      <Nav>
        {nav.map(link => (
          <NavLink key={`nav-${link.name}`} to={link.path}>
            {link.footerName || link.name}
          </NavLink>
        ))}
      </Nav>
    )}
  />
);

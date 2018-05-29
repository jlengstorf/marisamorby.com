import React from 'react';
import styled, { css } from 'react-emotion';
import { Link, StaticQuery } from 'gatsby';
import Context from '../../utils/context';
import scrollToAnchor from '../../utils/scroll-to-anchor';
import { font } from '../../utils/style';

const Nav = styled('nav')`
  font-family: ${font.heading};
  font-size: 1.125rem;
  font-weight: ${font.headingWeight};
  margin: 0;

  @media (min-width: 480px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const linkStyles = css`
  margin: 0 0.5rem;

  @media (min-width: 480px) {
    margin: 0 0.25rem;

    &:last-child {
      margin-right: -0.125rem;
    }
  }

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }
`;

const onClickHandler = (path, refMap, updateCurrentSection) => {
  const targetID = path.replace('/#', '');
  const target = refMap[targetID] || false;

  return target
    ? scrollToAnchor(target, () => {
        updateCurrentSection(targetID);
      })
    : () => {};
};

const getLink = (
  isHome,
  linkClass,
  currentSection,
  refMap,
  updateCurrentSection,
) => link => {
  const Component = isHome ? 'a' : Link;
  const isActive = currentSection === link.path.replace('/#', '');
  const attrs = {
    key: `nav-${link.name}`,
    className: `${linkStyles} ${linkClass} ${isActive && 'active'}`,
    [isHome ? 'href' : 'to']: link.path,
    onClick: onClickHandler(link.path, refMap, updateCurrentSection),
  };

  return <Component {...attrs}>{link.name}</Component>;
};

export default ({ linkClass, isHome }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
      <Context.Consumer>
        {({ currentSection, refMap, updateCurrentSection }) => (
          <Nav>
            {nav
              .filter(link => !link.hidden)
              .map(
                getLink(
                  isHome,
                  linkClass,
                  currentSection,
                  refMap,
                  updateCurrentSection,
                ),
              )}
          </Nav>
        )}
      </Context.Consumer>
    )}
  />
);

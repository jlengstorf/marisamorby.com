import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import CategoryLink from './CategoryLink';
import { color } from '../utils/style';

const Wrapper = styled('section')`
  margin-bottom: 3rem;
`;

const Heading = styled('h2')`
  font-size: 2rem;

  a {
    color: inherit;
    display: block;
    padding: 0;
    position: relative;
    text-decoration: none;
    z-index: 10;

    &:active,
    &:focus,
    &:hover {
      outline: none;

      &::after {
        background: ${color.accent};
        bottom: -0.5rem;
        clip-path: polygon(0 7%, 100% 0%, 99% 100%, 1% 79%);
        content: ' ';
        height: 100%;
        left: -0.5rem;
        opacity: 0.25;
        position: absolute;
        right: -0.5rem;
        z-index: -1;
      }
    }
  }
`;

const Preview = ({ post }) => (
  <Wrapper>
    <Heading data-text={post.frontmatter.title}>
      <Link to={`/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
    </Heading>
    <div>
      <CategoryLink
        key={`category-${post.frontmatter.category}`}
        category={post.frontmatter.category}
      />
    </div>
    <p>
      {post.frontmatter.description
        ? post.frontmatter.description
        : post.excerpt}
    </p>
    <Link to={`/${post.frontmatter.slug}`}>Read post ›</Link>
  </Wrapper>
);

Preview.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      category: PropTypes.string,
      description: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default Preview;

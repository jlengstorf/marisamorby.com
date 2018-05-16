import React from 'react';
import styled from 'react-emotion';
import { Link, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { color } from '../../utils/style';

const HomeLink = styled(Link)`
  background-color: ${color.lightest};
  border: 2px solid ${color.accent};
  border-radius: 50%;
  display: block;
  grid-column: 1 / 2;
  margin-left: -20px;
  margin-top: -10px;
  padding: 2px;
  position: relative;
  width: 80px;
  z-index: 10;

  &:active,
  &:focus,
  &:hover {
    border-color: ${color.accentDark};
    outline: none;
  }

  @media (min-width: 480px) {
    margin-left: 0;
    margin-top: 0;
    width: 150px;
  }
`;

const HomeImage = styled(Image)`
  display: block;
  border-radius: 50%;
  margin-top: 0;
  transform: rotate(0deg);
  transition: all 200ms ease-out;

  &:hover {
    transform: rotate(-3deg);
  }

  & img {
    border-radius: 50%;
    margin-top: 0;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query MainImageQuery {
        image: imageSharp(original: { src: { regex: "/marisa-morby/" } }) {
          sizes(maxWidth: 138, traceSVG: { color: "#d3f5fe" }) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    `}
    render={data => (
      <HomeLink to="/">
        <HomeImage sizes={data.image.sizes} alt="Marisa Morby" />
      </HomeLink>
    )}
  />
);

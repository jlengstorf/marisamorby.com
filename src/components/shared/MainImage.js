import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';

const Wrapper = styled('div')`
  border-radius: 50%;
  display: block;
  height: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.25rem;
  overflow: hidden;
  padding-bottom: calc(300px - 2rem);
  position: relative;
  width: calc(300px - 2rem);
`;

const Image = styled(Img)`
  display: block;
  margin-top: 0;
  position: relative;
  z-index: 1;

  img {
    margin-top: 0;
  }
`;

const MainImage = ({ sizes, alt }) => (
  <Wrapper>
    <Image sizes={sizes} alt={alt} />
  </Wrapper>
);

MainImage.propTypes = {
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.shape({
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }).isRequired,
};

export default MainImage;

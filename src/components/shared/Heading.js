import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const H1 = styled('h1')`
  font-size: 9vw;
  margin-bottom: 2rem;

  @media (min-width: 480px) {
    font-size: 3rem;
    margin-top: 2rem;
    padding-right: 4rem;

    &::after {
      padding-right: 4rem;
    }
  }
`;

const Heading = ({ text, ...props }) => (
  <H1 data-text={text} {...props}>
    {text}
  </H1>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;

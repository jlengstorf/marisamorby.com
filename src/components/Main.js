import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import Grid from './Grid';

const topMargin = css`
  margin-top: 3rem;
`;

const Main = ({ children }) => (
  <Grid element="main" className={topMargin}>
    {children}
  </Grid>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Main;

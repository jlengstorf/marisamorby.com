import React from 'react';
import { css } from 'react-emotion';
import Grid from '../Grid';
import Image from './Image';
import Logo from './Logo';
import Nav from './Nav';
import { color } from '../../utils/style';

const wrapper = css`
  align-items: start;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 50px 1fr;
  position: relative;
  width: 100%;

  @media (min-width: 480px) {
    align-items: center;
    grid-template-columns: 150px 150px 1fr;
    grid-template-rows: 150px 1fr;
    margin: 2rem auto 0;
    max-width: 1150px;
    padding-right: 2rem;
    width: 90%;

    &::after {
      background-color: ${color.accent};
      border-radius: 0 50px 50px 0;
      content: ' ';
      display: block;
      height: 100px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 90%;
      z-index: 1;
    }
  }

  @media (min-width: 800px) {
    margin-top: 3rem;
  }
`;

export default () => (
  <Grid element={'header'} className={wrapper}>
    <Image />
    <Logo to="/" text="Marisa Morby" />
    <Nav />
  </Grid>
);

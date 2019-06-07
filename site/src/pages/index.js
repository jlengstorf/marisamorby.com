import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Intro from '../../sections/intro.mdx';
import Praise from '../../sections/praise.mdx';
import Speaking from '../../sections/speaking.mdx';
import Contact from '../../sections/contact.mdx';
import { colors } from '../tokens';

const Index = () => {
  return (
    <Layout>
      <Intro
        css={css`
          h1 {
            font-size: 2.75rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            text-align: center;

            em {
              color: ${colors.brand};
              font-style: normal;
            }

            @media (min-width: 540px) {
              font-size: 4rem;
              margin-top: 5rem;
              margin-bottom: 3rem;
            }
          }
        `}
      />
      <Speaking />
      <Praise />
      <Contact />
    </Layout>
  );
};

export default Index;

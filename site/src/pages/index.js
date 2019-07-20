/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/layout';
import Intro from '../../sections/intro.mdx';
import Praise from '../../sections/praise.mdx';
import Speaking from '../../sections/speaking.mdx';
import Contact from '../../sections/contact.mdx';

const Index = () => {
  return (
    <Layout>
      <Intro
        sx={{
          h1: {
            fontSize: [6, 7],
            marginTop: [5, 6],
            marginBottom: [4, 5],
            textAlign: 'center',
            em: {
              color: 'primary',
              fontStyle: 'normal',
            },
          },
        }}
      />
      <Speaking />
      <Praise />
      <Contact />
    </Layout>
  );
};

export default Index;

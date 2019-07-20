import React from 'react';
import { Layout as ThemeLayout, Main, Container } from 'theme-ui';

const Layout = ({ children }) => (
  <ThemeLayout>
    <Main>
      <Container>{children}</Container>
    </Main>
  </ThemeLayout>
);

export default Layout;

/** @jsx jsx */
import { jsx, Layout as ThemeLayout } from 'theme-ui';
import { Global, css } from '@emotion/core';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <ThemeLayout>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        body,
        #___gatsby {
          margin-top: 0;
        }
      `}
    />
    <Header />
    <main
      sx={{
        mx: 'auto',
        maxWidth: 540,
        width: '90vw',
      }}
    >
      {children}
    </main>
    <Footer />
  </ThemeLayout>
);

export default Layout;

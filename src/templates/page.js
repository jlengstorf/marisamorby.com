/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Header = styled('h1')`
  font-size: 9vw;
  grid-column: 2 / span 3;
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

const ImageWrapper = styled('div')`
  border-radius: 50%;
  display: block;
  grid-column: 1 / span 2;
  height: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.25rem;
  overflow: hidden;
  padding-bottom: calc(300px - 2rem);
  position: relative;
  width: calc(300px - 2rem);

  @media (min-width: 800px) {
    margin-right: 2rem;
  }
`;

const Image = styled(Img)`
  display: block;
  margin-top: 0;
  position: relative;
  z-index: 1;

  & img {
    margin-top: 0;
  }
`;

const Content = styled('section')`
  grid-column: 3 / span 1;

  & > :first-child {
    font-size: 125%;
    font-weight: 300;
  }
`;

const Page = ({ data: { page }, location }) => (
  <Layout location={location}>
    <SEO data={page} />
    <Header data-text={page.frontmatter.title}>{page.frontmatter.title}</Header>
    <ImageWrapper>
      <Image
        sizes={page.frontmatter.image.childImageSharp.sizes}
        alt={page.frontmatter.title}
      />
    </ImageWrapper>
    <Content dangerouslySetInnerHTML={{ __html: page.html }} />
  </Layout>
);

Page.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query PageQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            sizes(
              maxHeight: 300
              maxWidth: 300
              traceSVG: { color: "#d3f5fe" }
              duotone: { highlight: "#ffffff", shadow: "#39bbdf" }
            ) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
            resolutions {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

export default Page;

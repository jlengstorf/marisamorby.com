/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../components/Heading';
import MainImage from '../components/MainImage';
import Content from '../components/Content';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Page = ({ data: { page }, location }) => {
  const pageContent = [
    <div key="page-content" dangerouslySetInnerHTML={{ __html: page.html }} />,
    location.pathname === '/contact/' && (
      <ContactForm key="contact-form" action="/thanks/" />
    ),
  ];

  return (
    <Layout location={location}>
      <SEO data={page} />
      <Heading text={page.frontmatter.title} />
      <MainImage
        sizes={page.frontmatter.image.childImageSharp.sizes}
        alt={page.frontmatter.title}
      />
      <Content>{pageContent}</Content>
    </Layout>
  );
};

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
  query PageQuery(
    $slug: String!
    $duotoneHighlight: String!
    $duotoneShadow: String!
    $tracedSVGColor: String!
  ) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            sizes(
              maxHeight: 268
              maxWidth: 268
              traceSVG: { color: $tracedSVGColor }
              duotone: { highlight: $duotoneHighlight, shadow: $duotoneShadow }
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

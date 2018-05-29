/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../components/shared/Heading';
import MainImage from '../components/shared/MainImage';
import Layout from '../components/shared/Layout';
import Section from '../components/shared/Section';
import SEO from '../components/SEO/SEO';

const Page = ({ data: { page }, location }) => {
  const image = page.frontmatter.image;

  return (
    <Layout location={location}>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.description || page.excerpt}
        image={image && image.childImageSharp.sizes.src}
        pathname={location.pathname}
      />
      <Section>
        <Heading text={page.frontmatter.title} />
        {image && (
          <MainImage
            sizes={image.childImageSharp.sizes}
            alt={page.frontmatter.title}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </Section>
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
      excerpt
      frontmatter {
        title
        description
        slug
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

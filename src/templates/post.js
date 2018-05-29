/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/shared/Layout';
import Section from '../components/shared/Section';
import Heading from '../components/shared/Heading';
import MainImage from '../components/shared/MainImage';
import SEO from '../components/SEO/SEO';

const Post = ({ data: { post }, location }) => (
  <Layout location={location}>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt || 'nothin’'}
      image={post.frontmatter.image.childImageSharp.sizes.src}
      pathname={post.fields.slug}
      article
    />
    <Section>
      <Heading text={post.frontmatter.title} />
      <MainImage
        sizes={post.frontmatter.image.childImageSharp.sizes}
        alt={post.frontmatter.title}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Section>
  </Layout>
);

Post.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query PostQuery(
    $slug: String!
    $duotoneHighlight: String!
    $duotoneShadow: String!
    $tracedSVGColor: String!
  ) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        title
        description
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
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

export default Post;

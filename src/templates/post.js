/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import MainImage from '../components/MainImage';
import Content from '../components/Content';
import SEO from '../components/SEO';

const Post = ({ data: { post }, location }) => (
  <Layout location={location}>
    <SEO data={post} article />
    <Heading text={post.frontmatter.title} />
    <MainImage
      sizes={post.frontmatter.image.childImageSharp.sizes}
      alt={post.frontmatter.title}
    />
    <Content>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Content>
  </Layout>
);

Post.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
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
  query PostQuery(
    $slug: String!
    $duotoneHighlight: String!
    $duotoneShadow: String!
    $tracedSVGColor: String!
  ) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
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

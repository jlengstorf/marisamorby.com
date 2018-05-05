/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Post = ({ data: { post } }) => (
  <Layout>
    <SEO data={post} article />
    <h1>{post.frontmatter.title}</h1>
    <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
  query PostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        title
        image {
          childImageSharp {
            sizes(maxWidth: 690, traceSVG: { color: "#ffdddd" }) {
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

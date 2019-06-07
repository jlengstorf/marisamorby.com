import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';

export const query = graphql`
  query($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      title
      publishedAt
      categories {
        _key
        title
      }
      mainImage {
        asset {
          fixed(width: 300, height: 300) {
            ...GatsbySanityImageFixed
          }
        }
        alt
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            asset {
              fixed(width: 40, height: 40) {
                ...GatsbySanityImageFixed
              }
            }
          }
          name
        }
      }
    }
  }
`;

const PostTemplate = ({ data }) => (
  <Layout>
    <Post post={data.post} />
  </Layout>
);

export default PostTemplate;

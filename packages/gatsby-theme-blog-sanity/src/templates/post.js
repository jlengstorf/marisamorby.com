import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';

export const query = graphql`
  query($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      title
      publishedAt
      description
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
          twitter
        }
      }
    }
  }
`;

const PostTemplate = ({ data, pageContext }) => {
  const post = {
    path: pageContext.postPath,
    title: data.post.title,
    description: data.post.description,
    content: data.post._rawBody,
    image: data.post.mainImage,
    // XXX this doesn’t support multiple authors
    author: data.post.authors[0].author,
    categories: data.post.categories.map(cat => cat.title),
    date: new Date(data.post.publishedAt),
  };

  return (
    <Layout>
      <Post post={post} />
    </Layout>
  );
};

export default PostTemplate;

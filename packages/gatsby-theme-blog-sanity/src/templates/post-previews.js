import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Pagination from '../components/pagination';

const PostPreviewsTemplate = ({ pageContext }) => {
  const posts = pageContext.group.map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.mainImage.asset.fixed,
    path: p.path,
  }));

  return (
    <Layout>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
      <Pagination
        isFirstPage={pageContext.isFirstPage}
        isLastPage={pageContext.isLastPage}
        currentPage={pageContext.currentPage}
        totalPages={pageContext.totalPages}
        linkBase={pageContext.linkBase}
      />
    </Layout>
  );
};

export default PostPreviewsTemplate;

import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PortableText from './portable-text';

const PostPreview = ({ post, ...props }) => (
  <article {...props}>
    <Link to={post.path}>
      <Image fixed={post.image} alt={post.title} />
    </Link>
    <div className="preview-text">
      <h2>
        <Link to={post.path}>{post.title}</Link>
      </h2>
      {post.excerpt && <PortableText blocks={post.excerpt} />}
      <Link to={post.path} className="read-link">
        Read this post &rsaquo;
      </Link>
    </div>
  </article>
);

export default PostPreview;

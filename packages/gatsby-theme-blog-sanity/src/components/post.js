import React from 'react';
import GatsbyImage from 'gatsby-image';
import PortableText from './portable-text';
import PostImage from './post-image';
import SEO from './seo';

const Post = ({ post, ...props }) => (
  <article {...props}>
    <SEO
      post={{
        ...post,
        image: post.image.asset.fixed.src,
      }}
    />
    <PostImage image={post.image} />
    <h1>{post.title}</h1>
    <div className="post-meta">
      {post.author && post.author.image && post.author.image.asset && (
        <GatsbyImage
          fixed={post.author.image.asset.fixed}
          alt={post.author.name}
        />
      )}
      <p>
        {post.author.name} posted this on{' '}
        <time dateTime={post.date.toISOString()}>
          {post.date.toLocaleDateString('default', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </p>
    </div>
    {post.content && <PortableText blocks={post.content} />}
  </article>
);

export default Post;

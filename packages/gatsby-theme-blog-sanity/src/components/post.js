import React from 'react';
import GatsbyImage from 'gatsby-image';
import PortableText from './portable-text';
import PostImage from './post-image';

const Post = ({ post, ...props }) => {
  const { _rawBody, authors, title, mainImage, publishedAt } = post;
  const date = new Date(publishedAt);

  // XXX this won’t handle multiple authors
  const { author } = authors[0];

  return (
    <article {...props}>
      <PostImage image={mainImage} />
      <h1>{title}</h1>
      <div className="post-meta">
        {author && author.image && author.image.asset && (
          <GatsbyImage fixed={author.image.asset.fixed} alt={author.name} />
        )}
        <p>
          {author.name} posted this on{' '}
          <time dateTime={date.toISOString()}>
            {date.toLocaleDateString('default', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </p>
      </div>
      {_rawBody && <PortableText blocks={_rawBody} />}
    </article>
  );
};

export default Post;

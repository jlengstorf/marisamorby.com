import React from 'react';
import SanityPortableText from '@sanity/block-content-to-react';
import sanityConfig from '../sanity/config';
import Figure from './figure';
import Tweet from './tweet';
import YouTube from './youtube';

// map Sanity portable text types to React components
const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    twitter: Tweet,
    youtube: YouTube,
  },
};

const PortableText = ({ blocks }) => (
  <SanityPortableText
    blocks={blocks}
    serializers={serializers}
    {...sanityConfig}
  />
);

export default PortableText;

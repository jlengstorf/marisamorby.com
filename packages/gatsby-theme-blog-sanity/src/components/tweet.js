/** @jsx jsx */
import { jsx } from 'theme-ui';
import TweetEmbed from '@jlengstorf/react-tweet-embed';

const Tweet = ({ node }) => (
  <div
    sx={{
      my: 4,
      '.twitter-tweet': {
        mx: 'auto',
      },
    }}
  >
    <TweetEmbed url={node.url} />
  </div>
);

export default Tweet;

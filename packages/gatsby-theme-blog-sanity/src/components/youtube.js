/** @jsx jsx */
import { jsx } from 'theme-ui';
import YouTubeEmbed from 'react-youtube';
import getYouTubeId from 'get-youtube-id';

const YouTube = ({ node }) => {
  const { url } = node;
  const id = getYouTubeId(url);
  return (
    <div
      sx={{
        my: 4,
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        iframe: {
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        },
      }}
    >
      <YouTubeEmbed videoId={id} />
    </div>
  );
};

export default YouTube;

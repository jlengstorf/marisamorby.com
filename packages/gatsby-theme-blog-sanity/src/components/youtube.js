import React from 'react';
import { css } from '@emotion/core';
import YouTubeEmbed from 'react-youtube';
import getYouTubeId from 'get-youtube-id';

const YouTube = ({ node }) => {
  const { url } = node;
  const id = getYouTubeId(url);
  return (
    <div
      css={css`
        position: relative;
        padding-bottom: 56.25%;
        height: 0;

        iframe {
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `}
    >
      <YouTubeEmbed videoId={id} />
    </div>
  );
};

export default YouTube;

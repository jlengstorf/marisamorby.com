import React from 'react'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

const YouTubePreview = ({value}) => {
  const {url} = value
  const id = getYouTubeId(url)
  return <YouTube videoId={id} />
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: YouTubePreview
  }
}

import React from 'react'
import Tweet from '@jlengstorf/react-tweet-embed/es'

const TweetPreview = ({ value }) => {
  const { url } = value
  console.log(url)

  return <Tweet url={url} />
  // return <p>This will be an embedded tweet.</p>
}

export default {
  name: 'twitter',
  type: 'object',
  title: 'Tweet Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Tweet URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: TweetPreview
  }
}

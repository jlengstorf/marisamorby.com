import React from 'react'
import {BlockEditor} from 'part:@sanity/form-builder'

export default class CustomEditor extends React.PureComponent {
  render () {
    return (
      <div>
        <BlockEditor {...this.props} onPaste={handlePaste} />
      </div>
    )
  }
}

function handlePaste (input) {
  const {event, path} = input
  const text = event.clipboardData.getData('text/plain')
  // const json = event.clipboardData.getData('application/json')
  const youTube = text.match(/^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/)

  if (youTube) {
    const YouTubeBlock = [
      {
        _type: 'youtube',
        url: text
      }
    ]
    return {insert: YouTubeBlock, path}
  }

  // return undefined to let the defaults do the work
  return undefined
}

import React, { Component } from 'react';

import { VideoItem } from '../../VideoList';

class VideoList extends Component {
  handleVideoClick(evt, video) {
    evt.preventDefault();
    this.props.onLoadDetailView(video);
  }

  render() {
    const { items } = this.props;

    return (
      items.length ?
        <ol>
          {items.map(video =>
            <VideoItem
              key={video.id}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails && video.snippet.thumbnails.default.url}
              description={video.snippet.description}
              publishedAt={video.snippet.publishedAt}
              onClick={evt => this.handleVideoClick(evt, video)}
            />
          )}
        </ol>
        : null
    )
  }
}

export default VideoList;
import React, { Component } from 'react';

import PublishedDate from '../../PublishedDate/PublishedDate';

class VideoDetail extends Component {
  render() {
    const {
      id,
      snippet: {
        publishedAt,
        description,
        resourceId: {
          videoId
        }
      }
    } = this.props.video;

    return (
      <div className="video-detail">
          <PublishedDate date={publishedAt} />

          <p className="video-detail__description">{description}</p>

          <iframe
            className="video-detail__media"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            gesture="media"
            allowFullScreen
          />
      </div>
    )
  }
}

export default VideoDetail;
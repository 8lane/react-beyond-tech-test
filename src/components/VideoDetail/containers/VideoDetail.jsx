import React, { Component } from 'react';

class VideoDetail extends Component {
  render() {
    const { onVideoListReturn } = this.props;
  
    return (
      <div className="video-detail">
        <button
          className="video-detail__back-btn"
          onClick={onVideoListReturn}
        >
          Back
        </button>
      </div>
    )
  }
}

export default VideoDetail;
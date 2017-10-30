import React, { Component } from 'react';

import { VideoItem } from '../../VideoList';

import VideoService from '../../../services/Video';

class VideoList extends Component {
  state = {
    items: [],
    resultsPerPage: 0,
    totalResults: 0,
    detailView: null
  }

  componentDidMount() {    
    VideoService().then(data => {
      const { items, pageInfo: { resultsPerPage, totalResults } } = data;
      this.setState({ items, resultsPerPage, totalResults });
    });
  }

  handleVideoClick(evt, detailView) {
    evt.preventDefault();
    this.setState({ detailView });
  }

  render() {
    const { items } = this.state;

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
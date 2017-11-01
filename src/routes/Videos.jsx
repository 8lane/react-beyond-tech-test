import React, { Component } from 'react';

import { VideoList, VideoDetail } from '../components';

import VideoService from '../services/Video';

class Videos extends Component {
  state = {
    items: [],
    detailView: null
  }

  componentDidMount() {    
    VideoService().then(data => this.setState({ items: data.items }));
  }

  handleDetailVideoLoad = detailView => this.setState({ detailView });

  handleVideoListLoad = () => this.setState({ detailView: null });

  render() {
    const { items, detailView } = this.state;

    return (
      <section className="videos">
        {!detailView ?
          <VideoList
            items={items}
            onLoadDetailView={this.handleDetailVideoLoad}
          />
          :
          <VideoDetail
            video={detailView}
            onVideoListReturn={this.handleVideoListLoad}
          />
        }
      </section>
    )
  }
}

export default Videos;
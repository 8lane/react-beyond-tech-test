import React, { Component } from 'react';

import { VideoList, VideoDetail } from '../components';

class Videos extends Component {
  state = {
    detailView: null
  }

  handleDetailVideoLoad = detailView => this.setState({ detailView });

  handleVideoListLoad = () => this.setState({ detailView: null });

  render() {
    const { detailView } = this.state;

    return (
      <section className="videos">
        {!detailView ?
          <VideoList
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
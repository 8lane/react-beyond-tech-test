import React, { Component } from 'react';

import { VideoList, VideoDetail, PageTitle } from '../components';

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
      <main>
        <header>
          {detailView ?
            <button
              className="video-detail__back-btn"
              onClick={this.handleVideoListLoad}
            >
              Back to list of videos
            </button>
          : null}

          <PageTitle title={!detailView ? 'My YouTube playlist' : detailView.snippet.title} />
        </header>

        <section className="videos">
          {!detailView ?
            <VideoList
              items={items}
              onLoadDetailView={this.handleDetailVideoLoad}
            />
            :
            <VideoDetail
              video={detailView}
            />
          }
        </section>
      </main>
    )
  }
}

export default Videos;
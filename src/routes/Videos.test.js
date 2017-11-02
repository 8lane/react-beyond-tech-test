import React from 'react';
import { shallow, mount } from 'enzyme';

import Videos from './Videos';
import { VideoList, VideoDetail, PageTitle } from '../components';

import VideoService from '../services/Video';

jest.mock('../services/Video', () => jest.fn().mockImplementation((cb) => ({
	then: jest.fn()
})));

describe('when setting up the videos page for the first time', () => {
	let videosComponent;

	beforeAll(() => {
		videosComponent = shallow(<Videos />);
	});

	it('should fetch the videos', () => {
		expect(VideoService).toHaveBeenCalled();
	});
});

describe('when displaying a videos page', () => {
	let videosComponent;

	beforeAll(() => {
		videosComponent = shallow(
      <Videos />
    );
	});

	it('should display', () => {
		expect(videosComponent.find('section.videos').exists()).toBeTruthy();
  });

  describe('which contains a videos list', () => {
    beforeAll(() => {
      videosComponent = shallow(<Videos />);
    });

    it('should have a page title', () => {
      expect(videosComponent.find(PageTitle).prop('title')).toEqual('My YouTube playlist');
    });

    it('should display a videos list', () => {
      expect(videosComponent.find(VideoList).exists()).toBeTruthy();
    });
  });

  describe('with contains a video detail view', () => {
    beforeAll(() => {
      videosComponent = shallow(<Videos />);
      videosComponent.setState({ detailView: { id: 123, snippet: { title: 'can i haz 2nd stage interview?'} } });
    });

    it('should display a back button', () => {
      expect(videosComponent.find('button.video-detail__back-btn').text()).toEqual('Back to list of videos');
    });

    it('should have a page title', () => {
      expect(videosComponent.find(PageTitle).prop('title')).toEqual('can i haz 2nd stage interview?');
    });

    it('should not display a videos list', () => {
      expect(videosComponent.find(VideoList).exists()).toBeFalsy();
    });

    it('should display a detailed video view', () => {
      expect(videosComponent.find(VideoDetail).exists()).toBeTruthy();
    });
  });
});

describe('when going from a video list to a video detail view', () => {
  let videosComponent;

  beforeAll(() => {
    videosComponent = shallow(<Videos />);
    videosComponent.instance().handleDetailVideoLoad({ id: 123, snippet: { title: 'kewl title'} });
    videosComponent.update();
  });

	it('should save the new detail view information', () => {
		expect(videosComponent.instance().state.detailView.id).toEqual(123);
		expect(videosComponent.instance().state.detailView.snippet.title).toEqual('kewl title');
	});

  it('should display a detailed video view', () => {
    expect(videosComponent.find(VideoDetail).exists()).toBeTruthy();
  });
});

describe('when going from video detail view to a video list', () => {
  let videosComponent;

  beforeAll(() => {
    videosComponent = shallow(<Videos />);
    videosComponent.instance().handleVideoListLoad();
    videosComponent.update();
  });

	it('should save the new detail view information', () => {
		expect(videosComponent.instance().state.detailView).toEqual(null);
	});

  it('should display a videos list', () => {
    expect(videosComponent.find(VideoList).exists()).toBeTruthy();
  });

  it('should not display a detailed video view', () => {
    expect(videosComponent.find(VideoDetail).exists()).toBeFalsy();
  });
});

describe('when clicking the back to video list button', () => {
  let videosComponent;
  let onVideoListReturn = jest.fn();

  beforeAll(() => {
    videosComponent = mount(<Videos />);
    videosComponent.instance().handleDetailVideoLoad({ id: 123, snippet: { title: 'kewl title'} });
    videosComponent.update();
    videosComponent.find('button.video-detail__back-btn').simulate('click');
  });

  it('should go back', () => {
    expect(VideoDetail).toHaveLength(0);
  });
});
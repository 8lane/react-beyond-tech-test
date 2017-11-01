import React from 'react';
import { shallow, mount } from 'enzyme';

import Videos from './Videos';
import { VideoList, VideoDetail } from '../components';

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

    it('should display a videos list', () => {
      expect(videosComponent.find(VideoList).exists()).toBeTruthy();
    });
  });

  describe('with contains a video detail view', () => {
    beforeAll(() => {
      videosComponent = shallow(<Videos />);
      videosComponent.setState({ detailView: { id: 123 } });
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
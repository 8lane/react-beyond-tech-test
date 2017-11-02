import React from 'react';
import { shallow, mount } from 'enzyme';

import { VideoDetail } from '../../../components';

import PublishedDate from '../../PublishedDate/PublishedDate';

describe('when displaying a detailed video view', () => {
	let videoDetailComponent;

	beforeAll(() => {
		videoDetailComponent = shallow(<VideoDetail video={{
      snippet: {
        publishedAt: "30/10/17",
        description: "even better desc",
        resourceId: {
          videoId: '22212313asdasd'
        }
      }
    }}/>);
	});

	it('should display a detail video view', () => {
		expect(videoDetailComponent.find('div.video-detail').exists()).toBeTruthy();
  });

	it('should display a date', () => {
    expect(videoDetailComponent.find(PublishedDate).exists()).toBeTruthy();
		expect(videoDetailComponent.find(PublishedDate).prop('date')).toEqual('30/10/17');
  });

  it('should display a full description', () => {
    expect(videoDetailComponent.find('p.video-detail__description').text()).toEqual('even better desc');
  });

  it('should display a video', () => {
    expect(videoDetailComponent.find('iframe.video-detail__media').exists()).toBeTruthy();
  });
});
import React from 'react';
import { shallow, mount } from 'enzyme';

import VideoItem from './VideoItem';
import PublishedDate from '../../PublishedDate/PublishedDate';

describe('when displaying a single video item', () => {
	let videoItemComponent;

	beforeAll(() => {
		videoItemComponent = shallow(
      <VideoItem
        title="sweet title!"
        description="even better desc"
        publishedAt="30/10/17"
      />
    );
	});

	it('should display a title', () => {
		expect(videoItemComponent.text().includes('sweet title!')).toBeTruthy();
  });
  
	it('should display a date', () => {
    expect(videoItemComponent.find(PublishedDate).exists()).toBeTruthy();
		expect(videoItemComponent.find(PublishedDate).prop('date')).toEqual('30/10/17');
  });
  
	it('should display a description', () => {
		expect(videoItemComponent.find('p').text()).toEqual('even better desc');
  });
  
	it('should display a thumbnail', () => {
		expect(videoItemComponent.find('img').exists()).toBeTruthy();
	});
});

describe('when clicking video item', () => {
  let videoItemComponent;
  let onClick = jest.fn();

	beforeAll(() => {
		videoItemComponent = shallow(
      <VideoItem
        title="sweet title!"
        description="even better desc"
        publishedAt="30/10/17"
        onClick={onClick}
      />
    );

    videoItemComponent.find('.video-item__link').simulate('click');
	});

	it('should load the detail page', () => {
		expect(onClick).toHaveBeenCalled();
  });
});

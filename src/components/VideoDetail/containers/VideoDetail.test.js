import React from 'react';
import { shallow, mount } from 'enzyme';

import { VideoDetail } from '../../../components';

describe('when displaying a detailed video view', () => {
	let videoDetailComponent;

	beforeAll(() => {
		videoDetailComponent = shallow(<VideoDetail />);
	});

	it('should display a detail video view', () => {
		expect(videoDetailComponent.find('div.video-detail').exists()).toBeTruthy();
	});
});

describe('when clicking the back to video list button', () => {
  let videoDetailComponent;
  let onVideoListReturn = jest.fn();

  beforeAll(() => {
    videoDetailComponent = shallow(<VideoDetail onVideoListReturn={onVideoListReturn} />);
    videoDetailComponent.find('button.video-detail__back-btn').simulate('click');
  });

  it('should go back', () => {
    expect(onVideoListReturn).toHaveBeenCalled();
  });
});
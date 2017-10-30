import React from 'react';
import { shallow, mount } from 'enzyme';

import { VideoList, VideoItem } from '../../VideoList';

import VideoService from '../../../services/Video';

jest.mock('../../../services/Video', () => jest.fn().mockImplementation((cb) => ({
	then: jest.fn()
})));

describe('when setting up the video list for the first time', () => {
	let videoListComponent;

	beforeAll(() => {
		videoListComponent = shallow(<VideoList />);
	});

	it('should fetch the videos', () => {
		expect(VideoService).toHaveBeenCalled();
	});
});

describe('when displaying the video list', () => {
	let videoListComponent;

	describe('without any videos', () => {
		beforeAll(() => {
			videoListComponent = shallow(<VideoList />);
			videoListComponent.setState({ items: [] });
		});

		it('should not display any videos', () => {
			expect(videoListComponent.find(VideoItem)).toHaveLength(0);
		});
	});
	
	describe('with videos', () => {
		beforeAll(() => {
			const items = [{ id: 123, snippet: { title: 'title'} }, { id: 456, snippet: { title: 'title'} }];
			videoListComponent = shallow(<VideoList />);
			videoListComponent.setState({ items });
		});

		it('should display a list of videos', () => {
			expect(videoListComponent.find(VideoItem)).toHaveLength(2);
		});
	});
});

describe('when clicking on a video within the list', () => {
	let videoListComponent;
	let evt = { preventDefault: jest.fn() }

	beforeAll(() => {
		const items = [{ id: 123, snippet: { title: 'kewl title'} }, { id: 456, snippet: { title: 'title'} }];
		videoListComponent = shallow(<VideoList />);
		videoListComponent.instance().handleVideoClick(evt, items[0]);
	});

	it('should not follow the native browser link', () => {
		expect(evt.preventDefault).toHaveBeenCalled();
	});

	it('should save the new detail view information', () => {
		expect(videoListComponent.instance().state.detailView.id).toEqual(123);
		expect(videoListComponent.instance().state.detailView.snippet.title).toEqual('kewl title');
	});
});
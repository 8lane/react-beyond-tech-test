import React from 'react';
import { shallow, mount } from 'enzyme';

import { VideoList, VideoItem } from '../../VideoList';

describe('when displaying the video list', () => {
	let videoListComponent;

	describe('without any videos', () => {
		beforeAll(() => {
			videoListComponent = shallow(<VideoList items={[]} />);
		});

		it('should not display any videos', () => {
			expect(videoListComponent.find(VideoItem)).toHaveLength(0);
		});
	});
	
	describe('with videos', () => {
		beforeAll(() => {
			const items = [{ id: 123, snippet: { title: 'title'} }, { id: 456, snippet: { title: 'title'} }];
			videoListComponent = shallow(<VideoList items={items} />);
		});

		it('should display a list of videos', () => {
			expect(videoListComponent.find(VideoItem)).toHaveLength(2);
		});
	});
});

describe('when clicking on a video within the list', () => {
	let videoListComponent;
	let evt = { preventDefault: jest.fn() };
	let onLoadDetailView = jest.fn();

	beforeAll(() => {
		const items = [{ id: 123, snippet: { title: 'kewl title'} }, { id: 456, snippet: { title: 'title'} }];
		videoListComponent = shallow(<VideoList items={items} onLoadDetailView={onLoadDetailView} />);
		videoListComponent.instance().handleVideoClick(evt, items[0]);
	});

	it('should not follow the native browser link', () => {
		expect(evt.preventDefault).toHaveBeenCalled();
	});

	it('should change the current view', () => {
		expect(onLoadDetailView).toHaveBeenCalledWith({ id: 123, snippet: { title: 'kewl title'} })
	});
});
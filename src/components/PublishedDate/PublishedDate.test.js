import React from 'react';
import { shallow, mount } from 'enzyme';

import PublishedDate, { getDate } from './PublishedDate';

describe('when parsing a date timestamp', () => {
	const date = getDate('2022-03-01T16:02:34.000Z');

	it('should return a readable date', () => {
		expect(date).toEqual('March 1, 2022');
	});
});

describe('when displaying a provided date', () => {
	let dateComponent;

	beforeAll(() => {
		dateComponent = shallow(<PublishedDate date="2014-09-04T16:00:41.000Z" />);
	});

	it('should display', () => {
    expect(dateComponent.find('div').exists()).toBeTruthy();
    expect(dateComponent.find('div').text()).toEqual('Published on September 4, 2014');
	});
});

describe('when displaying a date that is not readable', () => {
	let dateComponent;

	beforeAll(() => {
		dateComponent = shallow(<PublishedDate date={null} />);
	});

	it('should not display', () => {
    expect(dateComponent.find('date').exists()).toBeFalsy();
	});
});


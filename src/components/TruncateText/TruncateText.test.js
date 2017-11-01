import React from 'react';
import { shallow, mount } from 'enzyme';

import TruncateText, { getTruncatedText } from './TruncateText';

describe('when truncating text', () => {
	const data = getTruncatedText('blah blah blah, blah blah blah, blah blah blah', 13);

	it('should return the text in the expected format', () => {
		expect(data).toEqual('blah blah bla...');
	});
});

describe('when displaying truncted text', () => {
	let truncateTextComponent;

	beforeAll(() => {
		truncateTextComponent = shallow(<TruncateText text="my name is tom" maxCharacters={7} />);
	});

	it('should display', () => {
    expect(truncateTextComponent.text()).toEqual('my name...');
	});
});

describe('when displaying text that is not readable', () => {
	let truncateTextComponent;

	beforeAll(() => {
		truncateTextComponent = shallow(<TruncateText text={null} />);
	});

	it('should not display', () => {
    expect(truncateTextComponent.text()).toEqual('');
	});
});


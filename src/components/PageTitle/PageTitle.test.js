import React from 'react';
import { shallow } from 'enzyme';

import PageTitle from './PageTitle';

describe('when showing the page title', () => {
	const paegTitleComponent = shallow(<PageTitle title="Sweet page title" />);

	it('should return the text in the expected format', () => {
		expect(paegTitleComponent.text()).toEqual('Sweet page title');
	});
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Videos from './routes/Videos';

describe('when rendering the app', () => {
  let appComponent;

  beforeAll(() => {
    appComponent = shallow(<App />);
  });

  it('should show a videos view', () => {
    expect(appComponent.find(Videos).exists()).toBeTruthy();
  });
});
import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('should render an H1', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toEqual('Hello World!');
});

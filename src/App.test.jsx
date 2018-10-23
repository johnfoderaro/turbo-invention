import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

it('should render the app', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

it('should render the app', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

import React from 'react';
import { hot } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <h1>
    {'Hello World!'}
  </h1>
);

export default hot(module)(App);

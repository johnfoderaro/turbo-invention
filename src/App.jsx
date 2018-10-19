import React from 'react';
import { hot } from 'react-hot-loader';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <>
    <GlobalStyle/>
    <h1>
      {'Hello World!'}
    </h1>
  </>
);

export default hot(module)(App);

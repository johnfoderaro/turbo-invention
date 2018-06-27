import React from 'react';
import { hot } from 'react-hot-loader';
// import { injectGlobal } from 'styled-components';

// injectGlobal`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   @font-face {
//     font-family: 'Source Sans Pro Regular';
//     src: url('/sourcesanspro-regular.ttf');
//   }
//   body,
//   select {
//     font-family: 'Source Sans Pro Regular', sans-serif;
//     font-size: ${baseFont};
//     color: ${black};
//   }
// `;

const App = () => (
  <h1>
    {'Hello World!'}
  </h1>
);

export default hot(module)(App);

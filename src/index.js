import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './index.css';
import { Grommet,Box,  ResponsiveContext } from 'grommet';
// const theme = {
//   global: {
//     font: {
//       family: 'Arvo',
//       size: '18px',
//       height: '20px',
//     },
//     breakpoints: {
//       xsmall: {
//         value: 375,
//       },
//       small: {
//         value: 568,
//         edgeSize: {
//           none: '0px',
//           small: '6px',
//           medium: '12px',
//           large: '24px',
//         },
//       },
//       medium: {
//         value: 768,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//       large: {
//         value: 1024,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//       xlarge: {
//         value: 1366,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//     },
//   },
// };




ReactDOM.render(
  <React.StrictMode>
  
           <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

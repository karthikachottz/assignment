import React from 'react';
import ReactDOM from 'react-dom';

import App from './app'; // This imports the App component


// Render the App component into the root div of index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: if you have reportWebVitals


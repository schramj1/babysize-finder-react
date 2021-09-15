import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main/services/Main.js";
import reportWebVitals from './main/services/reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>,
    document.getElementById('finder-app')
);

reportWebVitals();

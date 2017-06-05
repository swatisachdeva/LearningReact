import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

let appElement = document.getElementById('app');
let appMarkup = (
    <App />
);

ReactDOM.render(appMarkup, appElement);

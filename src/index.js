import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
// import './server.js';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();

//react
import React from 'react';
import ReactDOM from 'react-dom';
//assets
import './index.css';
//components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

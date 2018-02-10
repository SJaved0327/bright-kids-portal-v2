//react
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, 
} from "react-router-dom";
//assets

//components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router>
    <App />
  </Router>
	), document.getElementById('root'));
registerServiceWorker();

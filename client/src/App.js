//react
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//assets

//components

//pages
import Main from './host_pages/Main';

const App = () => (
	<Router>
    	{/* main applicaiton will be rendered here */}
      <Main />
  </Router>
)


export default App;

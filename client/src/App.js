//react
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
//assets

//components

//pages
import Main from './host_pages/Main';

const App = () => (
	<Router>
    	{/*  main application will be rendered here  */}
      <Main />
  </Router>
)


export default App;

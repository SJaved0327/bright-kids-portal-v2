//react
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//assets
import './App.css';
//components
import Footer from './components/footer';
import NavbarTurtle from './components/navbar';
//pages
import LogIn from './components/pages/LogIn';
import NoMatch from './components/pages/NoMatch';

const App = () => 
	<Router>
		<div>
			<NavbarTurtle />
			<Switch>
				<Route exact path="/" component={LogIn} />
				<Route component={NoMatch} />
			</Switch>
			<Footer />
		</div>
	</Router>;

export default App;

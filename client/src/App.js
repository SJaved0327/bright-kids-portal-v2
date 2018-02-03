//react
import React from 'react';
import {
	BrowserRouter as Router, Route,
	Switch 
} from "react-router-dom";
//assets
import './App.css';
//components
import Footer from './components/footer';
import NavbarTurtle from './components/navbar';
//pages
import LogIn from './pages/LogIn';
import NoMatch from './pages/NoMatch';
import select_path from './pages/select_path'

const App = () =>
	<Router>
		<div>
			<NavbarTurtle />

			<Switch>
				<Route exact path="/" component={LogIn} />
				<Route exact path = "/select_path" component={select_path}/>
				<Route component={NoMatch} /> 
			</Switch>
			
			<Footer />
		</div>
	</Router>;

export default App;

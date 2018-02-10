// react
import React from 'react';
// react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// host_pages
import ViewFamily from '../ViewFamily'
import RegisterPrograms from '../RegisterPrograms'
// pages
import LogIn from '../../pages/LogIn';
import NoMatch from '../../pages/NoMatch';
import select_path from '../../pages/select_path';
// components
import NavbarTurtle from '../../components/navbar';
import Footer from '../../components/Footer';
// assets


const Main = () => (
	<div>
		<NavbarTurtle />

		<Switch>
		  <Route exact path='/' component={LogIn} />
		  
		  <Route path='/select_path' component={select_path} />
		  <Route path='/view_family' component={ViewFamily} />
		  <Route path='/register_programs' component={RegisterPrograms} />
		
		  <Route component={NoMatch} />
		</Switch>

		<Footer />

	</div>
)

export default Main; 
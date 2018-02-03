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
// import LogIn from './pages/LogIn';
// import NoMatch from './pages/NoMatch';
// import Select from './pages/Select';
<<<<<<< HEAD
// import ViewFamily from './components/pages/ViewFamily';

=======
import select_path from './pages/select_path'
>>>>>>> b5bf08b2b1a83fd70004ea1c52ee331927973e5d

const App = () =>
	<Router>
		<div>
			<NavbarTurtle />

			<Switch>
				{/* <Route exact path="/" component={LogIn} />
				<Route exact path="/select" component={Select} />
<<<<<<< HEAD
				<Route exact path="/family" component={ViewFamily} />
				<Route component={NoMatch} />

			</Switch> */}
			
=======
				<Route component={NoMatch} /> */}
				<Route exact path = "/select_path" component={select_path}/>
			</Switch>
>>>>>>> b5bf08b2b1a83fd70004ea1c52ee331927973e5d
			<Footer />
		</div>
	</Router>;

export default App;

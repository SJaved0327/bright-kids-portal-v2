//react
import React from 'react';
import { BrowserRouter as Router, Route, 
	// Switch 
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
// import ViewFamily from './components/pages/ViewFamily';


const App = () => 
	<Router>
		<div>
			<NavbarTurtle />
{/* 
			<Switch>
				<Route exact path="/" component={LogIn} />
				<Route exact path="/select" component={Select} />
				<Route exact path="/family" component={ViewFamily} />
				<Route component={NoMatch} />

			</Switch> */}
			
			<Footer />
		</div>
	</Router>;

export default App;

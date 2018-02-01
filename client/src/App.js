<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
=======
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

const App = () => 
	<Router>
		<div>
			<NavbarTurtle />
{/* 
			<Switch>
				<Route exact path="/" component={LogIn} />
				<Route exact path="/select" component={Select} />
				<Route component={NoMatch} />
			</Switch> */}
			
			<Footer />
		</div>
	</Router>;
>>>>>>> d9c5d413a9af9a42253f8c8ae72de44293e0441b

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/footer';
import NavbarTurtle from './components/navbar';
import SignIn from './components/signin';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <NavbarTurtle />
        <SignIn />
        <Footer/>
        
      </div>
    )
  }
}

export default App;

//react
import React from 'react';
//assets

//components
import Footer from './components/footer';
import NavbarTurtle from './components/navbar';
//pages
import Main from './pages/Main';

const App = () => (
		<div>
			<NavbarTurtle />
			{/* This is where our app will be rendered */}
			<Main />
			<Footer />
		</div>
)

export default App;

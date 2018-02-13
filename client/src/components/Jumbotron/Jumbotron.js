//react
import React from 'react';

const Jumbotron = (props) => {
	return(
		<div className="jumbotron jumbotron-fluid">
		  <div className="container">
		    <h1 className="display-4">{props.display}</h1>
		  </div>
		</div>
	)
}

export default Jumbotron;
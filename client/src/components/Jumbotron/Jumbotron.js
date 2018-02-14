//react
import React from 'react';

const style = {
	jumbotron: {
		height: "150px",
		marginTop: "0px",
		background: "#fedc60",
		marginBottom: "0px"
	},
	display: {
		margin: "auto",
		paddingBottom: "25px",
		fontFamily: "'Covered By Your Grace', cursive"
	}
}

const Jumbotron = (props) => {
	return(
		<div className="jumbotron jumbotron-fluid" style={style.jumbotron}>
		  <div className="container text-center">
		    <h1 className="display-4" style={style.display}>{props.display}</h1>
		  </div>
		</div>
	)
}

export default Jumbotron;
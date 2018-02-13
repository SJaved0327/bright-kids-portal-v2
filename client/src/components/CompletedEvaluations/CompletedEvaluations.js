// react
import React from 'react';

	const style = {
		card : {
			width: "100%",
			height: "250px"
		}
	}

const CompletedEvaluations = (props) => (

	<div class="card" style={style.card}>
	  <div class="card-body">
	    <h4 class="card-title">Completed Evaluations</h4>
				{props.onLoad}
	  </div>
	</div>
)


export default CompletedEvaluations; 
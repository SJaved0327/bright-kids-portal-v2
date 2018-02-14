import React, { Component } from "react";
import {LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";

const style = {
	chartDiv: {
		margin: "auto",
		position: "relative",
		right: "50px"
	}
}

export default class SimpleLineChart extends Component {

	render () {
		
		const data = [
      {name: 'Arithmetic Reasoning', incorrect: this.props.arithIncorrect, correct: this.props.arithCorrect, amt: this.props.arithTotal},
      {name: 'Aural Reasoning', incorrect: this.props.auralIncorrect, correct: this.props.auralCorrect, amt: this.props.auralTotal},
      {name: 'Following Directions', incorrect: this.props.followIncorrect, correct: this.props.followCorrect, amt: this.props.followTotal},
      {name: 'Pattern Completion', incorrect: this.props.patternIncorrect, correct: this.props.patternCorrect, amt: this.props.patternTotal},
      {name: 'Reasoning By Analogy', incorrect: this.props.analogyIncorrect, correct: this.props.analogyCorrect, amt: this.props.analogyTotal},
      {name: 'Serial Reasoning', incorrect: this.props.serialIncorrect, correct: this.props.serialCorrect, amt: this.props.serialTotal},
      {name: 'Spatial Visualization', incorrect: this.props.spatialIncorrect, correct: this.props.spatialCorrect, amt: this.props.spatialTotal},
		];

  	return (
    	<div className="chartDiv" style={style.chartDiv}>
	    	<LineChart width={1000} height={400} data={data}
	            margin={{top: 20, right: 50, left: 20, bottom: 5}}>
	       <XAxis dataKey="name"/>
	       <YAxis/>
	       <CartesianGrid strokeDasharray="3 3"/>
	       <Tooltip/>
	       <Legend />
	       <ReferenceLine y={5} label="50%" stroke="#b5e4f8" strokeWidth={2.5}/>
	       <Line type="monotone" dataKey="correct" stroke="#2FBF71" strokeWidth={1.5}/>
	       <Line type="monotone" dataKey="incorrect" stroke="#FF686B" strokeWidth={1.5}/>
	      </LineChart>
	     </div>
    );
  }
}




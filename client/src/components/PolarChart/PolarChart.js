import React, { Component } from "react";
import {LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";

export default class SimpleLineChart extends Component {
	render () {

		const data = [
      {name: 'Arithmetic Reasoning', incorrect: 6, correct: 4, amt: 10},
      {name: 'Aural Reasoning', incorrect: 2, correct: 8, amt: 10},
      {name: 'Following Directions', incorrect: 5, correct: 5, amt: 10},
      {name: 'Pattern Completion', incorrect: 3, correct: 7, amt: 10},
      {name: 'Reasoning By Analogy', incorrect: 5, correct: 5, amt: 10},
      {name: 'Serial Reasoning', incorrect: 8, correct: 2, amt: 10},
      {name: 'Spatial Visualization', incorrect: 0, correct: 10, amt: 10},
		];

  	return (
    	<LineChart width={600} height={300} data={data}
            margin={{top: 20, right: 50, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <ReferenceLine y={5} label="50%" stroke="#b5e4f8"/>
       <Line type="monotone" dataKey="correct" stroke="#2FBF71" />
       <Line type="monotone" dataKey="incorrect" stroke="#FF686B" />
      </LineChart>
    );
  }
}




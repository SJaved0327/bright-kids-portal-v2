// react
import React from 'react';
// react-router
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
// host_pages

// pages

// components
import Jumbotron from '../../components/Jumbotron'
import LeftPageArrow from '../../components/LeftPageArrow'
import RightPageArrow from '../../components/RightPageArrow'

// assets

class StudentEvaluations extends React.Component {
	
	state = {
		evaluations: [
			{
				date: "01/01/2018",
				test_type: "Gifted & Talented",
				results: {
					subtests: [
					{ 
						OLSAT: {
							Following_Directions : {
								correct: 7, 
								total: 10
							},
							Arithmetic_Reasoning : {
								correct: 4, 
								total: 10
							},
							Aural_Reasoning : {
								correct: 5, 
								total: 10
							}
						},{
						NNAT: {
							Pattern_Completion : {
								correct: 3, 
								total: 10
							},
							Reasoning_By_Analogy: {
								correct: 2, 
								total: 10
							},
							Serial_Reasoning : {
								correct: 3, 
								total: 10
							},
							Spatial_Visualization : {
								correct: 3, 
								total: 10
							}
					}
				],
					notes: "It was a pleasure working with John today."
				}
			}
		]
	}


	render(){
		return(
		<h3>StudentEvaluations</h3>
	)
	}	
}


export default StudentEvaluations;
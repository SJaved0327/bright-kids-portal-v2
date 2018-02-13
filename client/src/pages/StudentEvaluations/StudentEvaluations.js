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
import AssignedAM from '../../components/AssignedAM'
import CompletedEvaluations from '../../components/CompletedEvaluations'
import ScheduleTable from '../../components/ScheduleTable'

// assets
import './StudentEvaluations.css'

const style = {
	jumbotron: {
		background: "#fedc60"
	},
	container: {
		background: "#f4f8f9",
		padding: "20px"
	},
	arrow: {
    color: "#31ace0"
	},
	card : {
		width: "100%",
		height: "150px"
	}
}

const arrowSize = 50;

class StudentEvaluations extends React.Component {
	
	constructor(props){
		super(props);

		this.state = {
			evaluations: [
				{
					date: "01/01/2018",
					test_type: "Gifted & Talented",
					evaluation_type: "Diagnostic",
					results: {
						subtests: [
							{OLSAT: {
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
									}}
							},
							{NNAT: {
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
									}}
							}
						],
						notes: "It was a pleasure working with John today."
					}
				},
				{
					date: "01/23/2018",
					test_type: "Gifted & Talented",
					evaluation_type: "Progress Test",
					results: {
						subtests: [
							{OLSAT: {
									Following_Directions : {
										correct: 7, 
										total: 10
									},
									Arithmetic_Reasoning : {
										correct: 6, 
										total: 10
									},
									Aural_Reasoning : {
										correct: 8, 
										total: 10
									}}
							},
							{NNAT: {
									Pattern_Completion : {
										correct: 8, 
										total: 10
									},
									Reasoning_By_Analogy: {
										correct: 5, 
										total: 10
									},
									Serial_Reasoning : {
										correct: 3, 
										total: 10
									},
									Spatial_Visualization : {
										correct: 2, 
										total: 10
									}}
							}
						],
						notes: "It was a pleasure working with John today."
					}
				},
				{
					date: "02/09/2018",
					test_type: "Gifted & Talented",
					evaluation_type: "Progress Test",
					results: {
						subtests: [
							{OLSAT: {
									Following_Directions : {
										correct: 7, 
										total: 10
									},
									Arithmetic_Reasoning : {
										correct: 6, 
										total: 10
									},
									Aural_Reasoning : {
										correct: 8, 
										total: 10
									}}
							},
							{NNAT: {
									Pattern_Completion : {
										correct: 8, 
										total: 10
									},
									Reasoning_By_Analogy: {
										correct: 5, 
										total: 10
									},
									Serial_Reasoning : {
										correct: 3, 
										total: 10
									},
									Spatial_Visualization : {
										correct: 2, 
										total: 10
									}}
							}
						],
						notes: "It was a pleasure working with John today."
					}
				},
				{
					date: "02/17/2018",
					test_type: "Gifted & Talented",
					evaluation_type: "Mock Test",
					results: {
						subtests: [
							{OLSAT: {
									Following_Directions : {
										correct: 9, 
										total: 10
									},
									Arithmetic_Reasoning : {
										correct: 8, 
										total: 10
									},
									Aural_Reasoning : {
										correct: 10, 
										total: 10
									}}
							},
							{NNAT: {
									Pattern_Completion : {
										correct: 8, 
										total: 10
									},
									Reasoning_By_Analogy: {
										correct: 7, 
										total: 10
									},
									Serial_Reasoning : {
										correct: 8, 
										total: 10
									},
									Spatial_Visualization : {
										correct: 6, 
										total: 10
									}}
							}
						],
						notes: "It was a pleasure working with John today."
					}
				}
			]
		}

		this.handleKeyClick = this.handleKeyClick.bind(this);
	}
	
	handleKeyClick = () => {
		return true
	};

	render(){
		return(
			<div>
				<Jumbotron 
					display="Evaluations"
					style={style.jumbotron}
				/>

				<div className="container" style={style.container}>
					<div className="row">

						{/* built-in margin*/}
						{/* holds nav arrow */}
						<div className="col-lg-1">
						{/* if currently on /view_family/:id, left arrow should take user to invoices */}
							<LeftPageArrow 
							to="/view_family/:id"
							size={arrowSize}
							className="fontAwe"
							style={style.arrow}
							/>
						</div>

						{/* main container that contains content */}
						<div className="col-lg-10">

						{/* Row 1 */}
							<div className="row">
								<div className="col-lg-6">
									<div className="card" style={style.card}>
									  <div className="card-body">
									    <h4 className="card-title">Completed Evaluations</h4>
									    	<div className="evalList">
													{this.state.evaluations.map((evaluation, index) => (
															<div className="evalRow">
																<a onClick={this.handleKeyClick}><h5 key={index}>{evaluation.date} {evaluation.test_type} {evaluation.evaluation_type}</h5></a>
															</div>
													))}
												</div>
									  </div>
									</div>
								</div>
								<div className="col-lg-6">
									<AssignedAM />
								</div>
							</div>
							{/* Row 2 */}
							<div className="row chartRow">

								<div className="col-lg-6">
									<div>
										<h2>Pie Chart Goes Here</h2>
									</div>
								</div>

								<div className="col-lg-6">
									<div>
										<h2>Bar Chart Goes Here</h2>
									</div>
								</div>

							</div>
							{/* Row 3 */}
							<div className="row">
								<div className="col-lg-12">
									<h2>Notes Go Here</h2>
								</div>
							</div>

						</div>

						{/* holds nav arrow */}
						<div className="col-lg-1">
						{/* if currently on /view_family/:id/invoices right arrow should take user to profile */}
							<RightPageArrow 
							to="/view_family/:id/reports"
							size={arrowSize}
							className="fontAwe"
							style={style.arrow}
							/>
						</div>
						{/* built-in margin*/}

					</div>
				</div>
			</div>
	)
	}	
}

export default StudentEvaluations;
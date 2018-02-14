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
import LineChart from '../../components/PolarChart'

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
	},
	evalRow: {
		marginTop: "20px"
	},
	chosenTest: {
		paddingLeft: "10px",
		paddingRight: "10px",
		fontWeight: "bold"
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
										incorrect: 3,
										total: 10
									},
									Arithmetic_Reasoning : {
										correct: 4, 
										incorrect: 6,
										total: 10
									},
									Aural_Reasoning : {
										correct: 5, 
										incorrect: 5,
										total: 10
									}}
							},
							{NNAT: {
									Pattern_Completion : {
										correct: 3, 
										incorrect: 7,
										total: 10
									},
									Reasoning_By_Analogy: {
										correct: 2, 
										incorrect: 8,
										total: 10
									},
									Serial_Reasoning : {
										correct: 3, 
										incorrect: 7,
										total: 10
									},
									Spatial_Visualization : {
										correct: 3, 
										incorrect: 7,
										total: 10
									}}
							}
						],
						notes: "It was a pleasure working with John today. As it was his first time working with a new tutor, he was a bit slow to warm up. I'm happy to say that he only needed two breaks during the session. Great job!"
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
										incorrect: 3,
										total: 10
									},
									Arithmetic_Reasoning : {
										correct: 6,
										incorrect: 4, 
										total: 10
									},
									Aural_Reasoning : {
										correct: 8, 
										incorrect: 2,
										total: 10
									}}
							},
							{NNAT: {
									Pattern_Completion : {
										correct: 8, 
										incorrect: 2,
										total: 10
									},
									Reasoning_By_Analogy: {
										correct: 5, 
										incorrect: 5,
										total: 10
									},
									Serial_Reasoning : {
										correct: 3, 
										incorrect: 7,
										total: 10
									},
									Spatial_Visualization : {
										correct: 2, 
										incorrect: 8,
										total: 10
									}}
							}
						],
						notes: "John had a better day today and needed less breaks and redirection. He did very well on the OLSAT portion, however his scores fell greatly during the NNAT portion. I attribute this to fatigue as he expressed being tired halfway through the evaluation."
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
										incorrect: 3,
										total: 10
									},
									Arithmetic_Reasoning : {
										correct: 8, 
										incorrect: 2,
										total: 10
									},
									Aural_Reasoning : {
										correct: 8, 
										incorrect: 2,
										total: 10
									}}
							},
							{NNAT: {
									Pattern_Completion : {
										correct: 6, 
										incorrect: 4,
										total: 10
									},
									Reasoning_By_Analogy: {
										correct: 3, 
										incorrect: 7,
										total: 10
									},
									Serial_Reasoning : {
										correct: 5, 
										incorrect: 5,
										total: 10
									},
									Spatial_Visualization : {
										correct: 2, 
										incorrect: 8,
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
										incorrect: 3,
										total: 12
									},
									Arithmetic_Reasoning : {
										correct: 8, 
										incorrect: 1,
										total: 9
									},
									Aural_Reasoning : {
										correct: 7,
										incorrect: 2, 
										total: 9
									}}
							},
							{NNAT: {
									Pattern_Completion : {
										correct: 16, 
										incorrect: 2,
										total: 18
									},
									Reasoning_By_Analogy: {
										correct: 7, 
										incorrect: 4,
										total: 11
									},
									Serial_Reasoning : {
										correct: 15, 
										incorrect: 2,
										total: 17
									},
									Spatial_Visualization : {
										correct: 1, 
										incorrect: 1,
										total: 2
									}}
							}
						],
						notes: "It was a pleasure working with John today."
					}
				}
			],
			chosen: 
						{ subtests: [
							{OLSAT: {
									Following_Directions : {
										correct: 5, 
										incorrect: 5,
										total: 10
									},
									Arithmetic_Reasoning : {
										correct: 5, 
										incorrect: 5,
										total: 10
									},
									Aural_Reasoning : {
										correct: 5,
										incorrect: 5, 
										total: 10
									}}
							},
							{NNAT: {
									Pattern_Completion : {
										correct: 5, 
										incorrect: 5,
										total: 10
									},
									Reasoning_By_Analogy: {
										correct: 5, 
										incorrect: 5,
										total: 10
									},
									Serial_Reasoning : {
										correct: 5, 
										incorrect: 5,
										total: 10
									},
									Spatial_Visualization : {
										correct: 5, 
										incorrect: 5,
										total: 10
									}}
							}
						],
						notes: "There are no notes to display."
						},
			chosenDate: "",
			chosenEval: "",
			chosenTest: ""
		}

		this.handleValueClick = this.handleValueClick.bind(this);
	}
	
	handleValueClick(index){
		console.log(this.state.evaluations[index].results)

		this.setState({
			chosenDate: this.state.evaluations[index].date,
			chosenTest: this.state.evaluations[index].test_type,
			chosenEval: this.state.evaluations[index].evaluation_type,
			chosen: this.state.evaluations[index].results
		});
		
	};


	render(){

		const OLSAT = this.state.chosen.subtests[0].OLSAT;
		const NNAT = this.state.chosen.subtests[1].NNAT;

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
															<a><h5 value={index} onClick={() => this.handleValueClick(index)}>
															{evaluation.date} {evaluation.test_type} {evaluation.evaluation_type}
															</h5></a>
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
							<div className="row evalRow" style={style.evalRow}>
								<div className="col-lg-12">
									<h4 className="text-center">{this.state.chosenDate} <span id="chosenTest" style={style.chosenTest}>{this.state.chosenTest}</span> {this.state.chosenEval}</h4>
								</div>
							</div>

							{/* Row 3 */}
							<div className="row">

								<div className="col-lg-12">

									<div className="floatLeft">
											<LineChart 
												arithCorrect={OLSAT.Arithmetic_Reasoning.correct}
												arithIncorrect={OLSAT.Arithmetic_Reasoning.incorrect}
												arithTotal={OLSAT.Arithmetic_Reasoning.total}

												auralCorrect={OLSAT.Aural_Reasoning.correct}
												auralIncorrect={OLSAT.Aural_Reasoning.incorrect}
												auralTotal={OLSAT.Aural_Reasoning.total}

												followCorrect={OLSAT.Following_Directions.correct}
												followIncorrect={OLSAT.Following_Directions.incorrect}
												followTotal={OLSAT.Following_Directions.total}

												patternCorrect={NNAT.Pattern_Completion.correct}
												patternIncorrect={NNAT.Pattern_Completion.incorrect}
												patternTotal={NNAT.Pattern_Completion.total}

												analogyCorrect={NNAT.Reasoning_By_Analogy.correct}
												analogyIncorrect={NNAT.Reasoning_By_Analogy.incorrect}
												analogyTotal={NNAT.Reasoning_By_Analogy.total}

												serialCorrect={NNAT.Serial_Reasoning.correct}
												serialIncorrect={NNAT.Serial_Reasoning.incorrect}
												serialTotal={NNAT.Serial_Reasoning.total}

												spatialCorrect={NNAT.Spatial_Visualization.correct}
												spatialIncorrect={NNAT.Spatial_Visualization.incorrect}
												spatialTotal={NNAT.Spatial_Visualization.total}

											/>
									</div>
							
								</div>
							</div>
							{/* Row 4 */}
							<div className="row">
								<div className="col-lg-12">
									<h4>Tutor Comments:</h4>
									<p>{this.state.chosen.notes}</p>
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
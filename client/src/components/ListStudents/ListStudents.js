// react
import React from 'react';
// react-router
import {
	BrowserRouter as Router, 
	Route,
	Switch,
	Link
} from "react-router-dom";
// components
import Jumbotron from '../Jumbotron'
// utils
import API from '../../utils/APIstudents'

// const dynamicRedirect = ({ match }) => {
// 	return <Route to"" render=/>
// }

class ListStudents extends React.Component {
	
	state = {
		students: [],
	}

	//when component mounts, load student data
	componentDidMount() {
		this.loadStudents();
	}

	//load student data from database
	loadStudents = () => {
		API.getAllStudents()
			.then(res => {
					// console.log(res.data)
					this.setState({
						students: res.data
					})
					console.log(this.state)
					// console.log(this.state.students[0].id)
				}
			)
			.catch(err => console.log(err));
	};


	render() {

		return (
			
			<div>

				<Jumbotron 
					display="Students In Your Family"
				/>

				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div>
				        {/* If there are students loaded to the state */}
								{this.state.students.length ? (
				          <div>
				          	{/* Go through every student in family and render a div*/}
				            {this.state.students.map(student => (
				              <div>
				                <h3 key={student.id}>
				                	{student.student_first} {student.student_last}
				                </h3>
				                <Link to={"/view_family/" + student.id}>
				                   <button><p>Choose Student</p></button>
				                </Link>
				              </div>
				            ))}
				          </div>
				        ) : (
				              <h3>No students to display. Please register for services.</h3>
				            )}
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default ListStudents; 
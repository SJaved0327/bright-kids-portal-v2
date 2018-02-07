//react
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
//components
import listStudents from '../../components/listStudents';
import parentContact from '../../components/parentContact';
//pages
import StudentDashboard from '../StudentDashboard';

const ViewFamily = () => (

	<div>

		<div className="jumbotron jumbotron-fluid">
		  <div className="container">
		    <h1 className="display-4">Family Profile Page</h1>
		    {/*<p className="lead">Welcome Back!</p>*/}
		  </div>
		</div>

		<div className="container">
			<div className="row">
				{/* built-in margin*/}
				<div className="col-lg-2">
				</div>
				{/* container to hold student buttons */}
				<div className="col-lg-8">

					<Switch>
						<Route exact path='/view_family' component={listStudents} />
						<Route path='/view_family/contact' component={parentContact} />
      			<Route path='/view_family/:id' component={StudentDashboard} />
					</Switch>

				</div>
				{/* built-in margin*/}
				<div className="col-lg-2">
				</div>
			</div>
			{/* row for buttons */}
			<div className="row">
				<div className="col-lg-12">
					<button>Policies</button>
					<button>Edit Contact Info</button>
				</div>
			</div>
		</div>

	</div>

	)

export default ViewFamily;


// //react
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
// import API from "../../utils/APIstudents"

// //components

// class ViewFamily extends React.Component {
// 	state = {
// 		students: [],
// 		name: "",
// 		grade: ""
// 	};

// 	//when component mounts, load student data
// 	componentDidMount() {
// 		this.loadStudents();
// 	}

// 	//load student data from database
// 	loadStudents = () => {
// 		API.getAllStudents()
// 			.then(res =>
// 				this.setState({
// 					students: res.data
// 				})
// 			)
// 			.catch(err => console.log(err));
// 	};

// 	//input changes to any fields
// 	handleInputChange = event => {
// 		const { name, value } = event.target;
// 		this.setState({
// 			[name]: value
// 		});
// 	};

// 	//form submissions
// 	handleFormSubmit = event => {
// 		event.preventDefault();
// 		if (this.state.student && this.state.grade) {
// 			API.createStudent({
// 				name: this.state.name,
// 				grade: this.state.grade
// 			})
// 				.then(res => this.loadStudents())
// 				.catch(err => console.log(err));
// 		}
// 	};

// 	render(){

// 		const changingHeaders = {
// 			0:{
// 				header: "Family Profile Page",
// 				lead: "Welcome Back!"
// 			},
// 			1:{
// 				header: "Guardian's Profile Page",
// 				lead: "Edit Contact Information"
// 			},
// 			2:{
// 				header: "Student's Profile Page",
// 				lead: "Dashboard"
// 			},
// 			3:{
// 				header: "Student's Profile Page",
// 				lead: "Invoices"
// 			},
// 			4:{
// 				header: "Student's Profile Page",
// 				lead: "Evaluations"
// 			},
// 			5:{
// 				header: "Student's Profile Page",
// 				lead: "1-on-1 Sessions Reports"
// 			}
// 		}

// 		return(
		
// 			<div>

// 				<div className="jumbotron jumbotron-fluid">
// 				  <div className="container">
// 				    <h1 className="display-4">Family Profile Page</h1>
// 				    <p className="lead">Welcome Back!</p>
// 				  </div>
// 				</div>


// 				<div className="container">
// 					<div className="row">
// 						{/* built-in margin}
// 						<div className="col-lg-2">
// 						</div>
// 						{/* container to hold student buttons */}
// 						<div className="col-lg-8">
// 						</div>
// 						{/* built-in margin*/}
// 						<div className="col-lg-2">
// 						</div>
// 					</div>
// 					{/* row for buttons */}
// 					<div className="row">
// 						<div className="col-lg-12">
// 							<button>Policies</button>
// 							<button>Edit Contact Info</button>
// 						</div>
// 					</div>
// 				</div>

// 			</div>
		
// 		)
// 	}
// }

// // const Child = ({ match }) => (
// //   <div>
// //     <h3>Studet ID #{match.params.id}</h3>
// //   </div>
// // )

// export default ViewFamily;
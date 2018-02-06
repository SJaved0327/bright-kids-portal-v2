//react
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import API from "../../utils/APIstudents"

//components


//import student buttons

class ViewFamily extends React.Component {
	state = {
		students: "",
		number: "2"
	};

	constructor(){
		super();
		this.loadStudents = this.loadStudents.bind(this);
	}
	//when component mounts, load student data
	componentDidMount() {
		this.loadStudents();
	}

	//load student data from database
	loadStudents = () => {
		
		API.getStudentById()
			.then(res =>
				this.setState({
					students: res.data
				})
			)
			.catch(err => console.log(err));
	};

	render(){
		return(
			<Router>
				<div>
					<div className="jumbotron jumbotron-fluid">
					  <div className="container">
					    <h1 className="display-4">Family Profile Page</h1>
					    <p className="lead">Welcome Back!</p>
					  </div>
					</div>
					<div className="container">
						<div className="row">
							{/* built-in margin*/}
							<div className="col-lg-2">
							</div>
							{/* container to hold student buttons */}
							<div className="col-lg-8">
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
			</Router>
		)
	}
}

// const Child = ({ match }) => (
//   <div>
//     <h3>Studet ID #{match.params.id}</h3>
//   </div>
// )

export default ViewFamily;
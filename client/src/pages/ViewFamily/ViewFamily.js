//react
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
//import student buttons

class ViewFamily extends React.Component {
	state = {

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
								<h3><Link to="view_family/{zillow-group}">Zillow Group</Link></h3>


								<Route path="/view_family/:id" component={Child}/>
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

const Child = ({ match }) => (
  <div>
    <h3>Studet ID #{match.params.id}</h3>
  </div>
)

export default ViewFamily;
// react
import React from 'react';
// react-router
import {
  Route,
  Switch
} from 'react-router-dom';
// host_pages

// pages

// components

// assets



const RegisterPrograms = () => (

	<div>

		<div className="jumbotron jumbotron-fluid">
		  <div className="container">
		    <h1 className="display-4">Register for Programs</h1>
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

					{/* <Switch>
						<Route exact path='/view_family' component={listStudents} />
						<Route path='/view_family/contact' component={parentContact} />
      			<Route path='/view_family/:id' component={StudentDashboard} />
					</Switch> */}

					<h3>Register for Programs</h3>

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

export default RegisterPrograms;

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


const arrowSize = 50;

const StudentDashboard = () => (
		<div>

			<Jumbotron 
				display="Student Dashboard"
			/>

			<div className="container">

				<div className="row">
					{/* built-in margin*/}
					<div className="col-lg-1">
					</div>
					{/* holds nav arrow */}
					<div className="col-lg-1">
					{/* if currently on /view_family/:id, left arrow should take user to invoices */}
						{/* <Route path={`${match.path}`} render={(props) => ( */}
						{/* to={`${match.path}/invoices`} */}
						<Route path={"/view_family/:id"} render={(props) => (
							<LeftPageArrow 
							to="/view_family/:id/invoices"
							size={arrowSize}
							className="fontAwe"
							/>)}
						/>
					{/* if currently on /view_family/:id/reports, left arrow should take user to profile */}
						{/* <Route path={`${match.path}/reports`} render={(props) => ( */}
						{/* to={`${match.path}`} */}
						<Route path={"/view_family/:id/reports"} render={(props) => (
							<LeftPageArrow 
							to="/view_family/:id"
							size={arrowSize}
							className="fontAwe"
							/>)}
						/>
					{/* if currently on /view_family/:id/evaluations, left arrow should take user to reports */}
						{/* <Route path={`${match.path}/evaluations`} render={(props) => ( */}
						{/* to={`${match.path}/reports`} */}
						<Route path={"/view_family/:id/evaluations"} render={(props) => (
							<LeftPageArrow 
							to="/view_family/:id/reports"
							size={arrowSize}
							className="fontAwe"
							/>)}
						/>
					</div>
					{/* main container that will switch out depending on the path */}
					<div className="col-lg-8">

						<h2>ROUTES GO HERE</h2>
						<h2>PROFILE</h2>
						<h2>INVOICES</h2>
						<h2>REPORTS</h2>
						<h2>EVALUATIONS</h2>

					</div>
					{/* holds nav arrow */}
					<div className="col-lg-1">
					{/* if currently on /view_family/:id right arrow should take user to evaluations */}
						{/* <Route path={`${match.path}`} render={(props) => ( */}
						{/* to={`${match.path}/evaluations`} */}
						<Route path={"/view_family/:id"} render={(props) => ( 
							<RightPageArrow 
							to="/view_family/:id/evaluations"
							size={arrowSize}
							className="fontAwe"
							/>)}
						/>
					{/* if currently on /view_family/:id/invoices right arrow should take user to profile */}
						{/* <Route path={`${match.path}/invoices`} render={(props) => ( */}
						{/* to={`${match.path}`} */}
						<Route path={"/view_family/:id/invoices"} render={(props) => (
							<RightPageArrow 
							to="/view_family/:id"
							size={arrowSize}
							className="fontAwe"
							/>)}
						/>
					{/* if currently on /view_family/:id/evaluations right arrow should take user to reports */}
						{/* <Route path={`${match.path}/evaluations`} render={(props) => ( */}
						{/* to={`${match.path}/reports`} */}
						<Route path={"/view_family/:id/evaluations"} render={(props) => (
							<RightPageArrow 
							to="/view_family/:id/reports"
							size={arrowSize}
							className="fontAwe"
							/>)}
						/>
					</div>
					{/* built-in margin*/}
					<div className="col-lg-1">
					</div>
				</div>

			</div>
		</div>
			
	)

export default StudentDashboard; 
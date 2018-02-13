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

import Requests from '../../components/Requests'
import AssignedAM from '../../components/AssignedAM'
import ScheduleTable from '../../components/ScheduleTable'


// assets
const style = {
	jumbotron: {
		background: "#fedc60"
	},
	arrow: {
    color: "#31ace0"
	}
}

const arrowSize = 50;

const StudentProfile = () => (
			<div>

				<Jumbotron 
					display="Student Profile"
					style={style.jumbotron}
				/>

				<div className="container">

					<div className="row">
						{/* built-in margin*/}
						{/* holds nav arrow */}
						<div className="col-lg-1">
						{/* if currently on /view_family/:id, left arrow should take user to invoices */}
							<LeftPageArrow 
							to="/view_family/:id/invoices"
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
									<Requests />
								</div>
								<div className="col-lg-6">
									<AssignedAM />
								</div>
							</div>
							{/* Row 2 */}
							<div className="row">
								<div className="col-lg-12">
									<ScheduleTable />
								</div>
							</div>

						</div>
						{/* holds nav arrow */}
						<div className="col-lg-1">
						{/* if currently on /view_family/:id right arrow should take user to evaluations */}
							<RightPageArrow 
							to="/view_family/:id/evaluations"
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

export default StudentProfile; 
// react
import React from 'react';
// react-router
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
// host_pages

//pages
import StudentDashboard from '../../pages/StudentDashboard';
import ParentContact from '../../pages/ParentContact';
//components
import ListStudents from '../../components/ListStudents';

// assets

const ViewFamily = () => (

	<div>
		<Switch>
			<Route exact path='/view_family' component={ListStudents} />
			<Route path='/view_family/contact' component={ParentContact} />
			<Route path ='/view_family/:id' component={StudentProfile} />
			
		</Switch>
	</div>

)

export default ViewFamily;

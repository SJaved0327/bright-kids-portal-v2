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
import StudentDashboard from '../StudentDashboard';
import ParentContact from '../../pages/ParentContact';

//components
import ListStudents from '../../components/ListStudents';

// assets

const ViewFamily = () => (

	<div>
		<Switch>
			<Route exact path='/view_family' component={ListStudents} />
			<Route path ='/view_family/:id' component={StudentDashboard} />
			<Route path='/view_family/contact' component={ParentContact} />
			
			
		</Switch>
	</div>

)

export default ViewFamily;

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
import StudentProfile from '../../pages/StudentProfile';
import StudentEvaluations from '../../pages/StudentEvaluations';
import StudentInvoices from '../../pages/StudentInvoices';
import StudentReports from '../../pages/StudentReports';

// assets

const StudentDashboard = () => (

	<div>
		<Switch>
			<Route exact path ='/view_family/:id' component={StudentProfile} />
			<Route exact path ='/view_family/:id/evaluations' component={StudentEvaluations} />
			<Route exact path ='/view_family/:id/invoices' component={StudentInvoices} />
			<Route exact path ='/view_family/:id/reports' component={StudentReports} />
		</Switch>
	</div>

)

export default StudentDashboard;

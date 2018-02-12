// react
import React from 'react';

//assets


class AssignedAM extends React.Component {

	state = {
		AccountManager: {
			first_name: "Taylor",
			last_name: "Kellly",
			email: "t.kelly@brightkidsnyc.com"
		},
		CurriculumTeam: {
			email: "materials@brightkidsnyc.com"
		},
		SchedulingTeam: {
			email: "schedule@brightkidsnyc.com"
		}
	}

	render(){
		return (
			<div>
				<h3>Assigned Account Manager</h3>
				<p>Name: {this.state.AccountManager.first_name} {this.state.AccountManager.last_name}</p>
				<p>Email: {this.state.AccountManager.email}</p>
			</div>
		)
	}
};

export default AssignedAM; 
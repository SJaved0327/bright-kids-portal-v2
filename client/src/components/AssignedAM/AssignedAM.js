// react
import React from 'react';

//assets
const style = {
	card: {
		width: "100%",
		height: "150px"
	}
}

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
			<div className="card" style={style.card}>
				<div className="card-body">
					<h4 class="card-title">Assigned Account Manager</h4>
					<p>Name: {this.state.AccountManager.first_name} {this.state.AccountManager.last_name}</p>
					<p>Email: {this.state.AccountManager.email}</p>
				</div>
			</div>
		)
	}
};

export default AssignedAM; 
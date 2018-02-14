// react
import React from 'react';

//assets
import './AssignedAM.css'
import PaperPlane from 'react-icons/lib/fa/paper-plane'


class AssignedAM extends React.Component {

	state = {
		AccountManager: {
			first_name: "Taylor",
			last_name: "Kelly",
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
			<div className="card" id="AMcard">
				<div className="card-body">
			
						<h4 class="card-title">Assigned Account Manager</h4>
					
						<p>Name: <strong>{this.state.AccountManager.first_name} {this.state.AccountManager.last_name}</strong></p>
						<p>Email: <strong>{this.state.AccountManager.email}</strong><a href={this.state.AccountManager.email} target={0} id="plane"><PaperPlane size={25}/></a></p>
	
				</div>
			</div>
		)
	}
};

export default AssignedAM; 
// react
import React from 'react';

class Requests extends React.Component {

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

	/* function here to call to database to grab the student's assigned AM. 
	CurriculumTeam and SchedulingTeam are hardcoded as these are static addresses  */

	render(){
		return(
			<div class="card">
			  <div class="card-body">
			    <h5 class="card-title">Make A Request</h5>
					<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <label class="input-group-text" for="inputGroupSelect01">Options</label>
					  </div>
					  <select class="custom-select" id="inputGroupSelect01">
					    <option selected>Choose...</option>
					    <option value="1">Reschedule Session</option>
					    <option value="2">Tutor Note</option>
					    <option value="3">Curriculum</option>
					  </select>
					</div>
			  </div>
			</div>
		)
	}
}

export default Requests; 
// react
import React from 'react';

	const style = {
		card : {
			width: "100%",
			height: "250px",
			padding: "2px",
			borderStyle: "solid",
			borderWidth: "1px",
			borderColor: "#31ace0",
			borderRadius: "5px"
		}
	}

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
			<div className="card" style={style.card}>
			  <div className="card-body">
			    <h4 className="card-title">Make A Request</h4>
					<div className="input-group mb-3">
					  <div className="input-group-prepend">
					    <label className="input-group-text" for="inputGroupSelect01">Type of Request:</label>
					  </div>
					  <select className="custom-select" id="inputGroupSelect01">
					    <option selected>Choose...</option>
					    <option value="1">Reschedule Session</option>
					    <option value="2">Tutor Note</option>
					    <option value="3">Curriculum Request</option>
					    <option value="4">Consultation</option>
					  </select>
					</div>
					 <div className="input-group-prepend">
					    <label className="input-group-text" for="inputGroupDate">To be addressed by:</label>
					  </div>
					<input id="inputGroupDate" type="date" />
					<br />
					<button id="submitButton">Submit</button>
			  </div>
			</div>
		)
	}
}

export default Requests; 
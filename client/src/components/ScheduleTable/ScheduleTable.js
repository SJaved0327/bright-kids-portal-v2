// react
import React from 'react';
//assets 
import './ScheduleTable.css'

class ScheduleTable extends React.Component {

	state = {
		sessions : [ 
			{
				date: "01/04/2018", 
				time: "10:00 AM",
				location: "Downtown",
				service: "BC-ID-GT-PK"
			},
			{
				date: "01/18/2018", 
				time: "11:00 AM",
				location: "Downtown",
				service: "BC-S-GT-PK"
			},
			{
				date: "01/27/2018", 
				time: "2:00 PM",
				location: "Upper East Side",
				service: "BC-S-GT-PK"
			},
			{
				date: "02/08/2018", 
				time: "10:00 AM",
				location: "Downtown",
				service: "BC-S-GT-PK"
			},
			{
				date: "02/15/2018", 
				time: "10:00 AM",
				location: "Downtown",
				service: "BC-S-GT-PK"
			},
			{
				date: "02/22/2018", 
				time: "10:00 AM",
				location: "Downtown",
				service: "BC-PT-GT-PK"
			}
		]
	}

	render(){

		return (
			<div className="card" id="scheduleCard">
				<div className="card-body">
					<h4 class="card-title">Current Schedule</h4>
					<table className="table table-striped" id="scheduleTable">
					  <thead>
					    <tr>
					      <th scope="col">Date</th>
					      <th scope="col">Time</th>
					      <th scope="col">Location</th>
					      <th scope="col">Service</th>
					    </tr>
					  </thead>
					   {/* If there are invoices loaded to the state */}
					   {this.state.sessions.length ? (
					   		<tbody>
					   			{/* Go through every invoice and render a row */}
					   			{this.state.sessions.map(session => (
					   				<tr>
					   					<td>{session.date}</td>
					   					<td>{session.time}</td>
					   					<td>{session.location}</td>
					   					<td>{session.service}</td>
					   				</tr>
					   			))}
					   		</tbody>
					   	):(
					   		<tbody>
					   			<tr>
					   				<td>n/a</td>
					 					<td>n/a</td>
					 					<td>n/a</td>
					 					<td>n/a</td>
					   			</tr>
					   		</tbody>
					   	)}
					</table>
				</div>
			</div>
		)
	}
}

export default ScheduleTable;
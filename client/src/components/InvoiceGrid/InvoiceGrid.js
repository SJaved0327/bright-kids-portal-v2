// react
import React from 'react';
//assets 
import './InvoiceGrid.css'

class InvoiceGrid extends React.Component {

	state = {
		invoices : [ 
			{
				date: "01/31/2018", 
				from: "01/16/2018",
				to: "01/31/2018",
				id_number: "1000000-111"
			},
			{
				date: "02/16/2018", 
				from: "02/01/2018",
				to: "02/16/2018",
				id_number: "1000000-111"
			}
		]
	}


	render(){

		return (
			<div className="card">
				<div className="card-body">
					<table className="table table-striped">
					  <thead>
					    <tr>
					      <th scope="col">Date</th>
					      <th scope="col">From</th>
					      <th scope="col">To</th>
					      <th scope="col">ID Number</th>
					    </tr>
					  </thead>
					   {/* If there are invoices loaded to the state */}
					   {this.state.invoices.length ? (
					   		<tbody>
					   			{/* Go through every invoice and render a row */}
					   			{this.state.invoices.map(invoice => (
					   				<tr>
					   					<td>{invoice.date}</td>
					   					<td>{invoice.from}</td>
					   					<td>{invoice.to}</td>
					   					<td>{invoice.id_number}</td>
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

export default InvoiceGrid;
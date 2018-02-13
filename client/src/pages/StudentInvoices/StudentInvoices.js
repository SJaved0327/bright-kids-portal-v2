// react
import React from 'react';
// react-router
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
// host_pages

// pages

// components
import Jumbotron from '../../components/Jumbotron'
import LeftPageArrow from '../../components/LeftPageArrow'
import RightPageArrow from '../../components/RightPageArrow'
import InvoiceGrid from '../../components/InvoiceGrid'

// assets
const style = {
	jumbotron: {
		background: "#fedc60"
	},
	container: {
		background: "#f4f8f9",
		padding: "20px"
	},
	arrow: {
    color: "#31ace0"
	}
}

const arrowSize = 50;


const StudentInvoices = () => (
	<div>
		<Jumbotron 
			display="Invoices"
			style={style.jumbotron}
		/>

		<div className="container" style={style.container}>
			<div className="row">

				{/* built-in margin*/}
				<div className="col-lg-1">
				</div>
				{/* holds nav arrow */}
				<div className="col-lg-1">
				{/* No left arrow as this is the end of the carousel */}
				</div>

				{/* main container that contains content */}
				<div className="col-lg-8">
					<InvoiceGrid />
				</div>

				{/* holds nav arrow */}
				<div className="col-lg-1">
				{/* if currently on /view_family/:id/invoices right arrow should take user to profile */}
					<RightPageArrow 
					to="/view_family/:id"
					size={arrowSize}
					className="fontAwe"
					style={style.arrow}
					/>
				</div>
				{/* built-in margin*/}
				<div className="col-lg-1">
				</div>

			</div>
		</div>

	</div>
);

export default StudentInvoices;
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
	}
}


const StudentInvoices = () => (
	<div>
		<Jumbotron 
			display="Invoices"
			style={style.jumbotron}
		/>

		<InvoiceGrid />

	</div>
);

export default StudentInvoices;
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

// assets
const style = {
	jumbotron: {
		background: "#fedc60"
	}
}


const StudentInvoices = () => (
	<div>
		<Jumbotron 
			display="Students In Your Family"
			style={style.jumbotron}
		/>

	</div>
);

export default StudentInvoices;
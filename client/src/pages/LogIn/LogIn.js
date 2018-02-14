//react
import React from 'react';
//components
import SignIn from '../../components/signin'
//assets
import './LogIn.css'

const LogIn = () =>
	<div className="container-fluid imageContainer">
		<div className="row">

			<div className="col-lg-4">
			</div>

			<div className="col-lg-4">
				<SignIn />
			</div>

			<div className="col-lg-4">
			</div>

		</div>
	</div>

export default LogIn;
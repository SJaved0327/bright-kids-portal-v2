//react
import React from 'react';
import {
	Link
} from "react-router-dom";
//assets
import LeftPageArrow from '../../components/LeftPageArrow'
//components
import Jumbotron from '../../components/Jumbotron'


const arrowSize = 50;

class ParentContact extends React.Component {

	render(){
		return(

			<div>

				<Jumbotron 
					display="Review Contact Information"
				/>

					<div className="container">

						<div className="row">
							{/* built-in margin*/}
							<div className="col-lg-1">
							</div>
							{/* holds nav arrow */}
							<div className="col-lg-1">
								{/* if currently on /view_family/:id, left arrow should take user to invoices */}
								<LeftPageArrow 
									to="/view_family"
									size="50px"
								/>
							</div>

							<div className="col-lg-8">
								<h1>Hellloooo parentContact</h1>
							</div>

							<div className="col-lg-1">
							</div>
							<div className="col-lg-1">
							</div>

						</div>

					</div>
			</div>
		)
	}
}

export default ParentContact; 
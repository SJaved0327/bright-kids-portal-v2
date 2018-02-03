//react
import React from 'react';
//components
import SelectButton from '../../selectButton'

const Select = () =>
	<div className="container">
		<div className="row">
			<div className="col-lg-6">
				<SelectButton
					title="View Family"
				/>
			</div>
			<div className="col-lg-6">
				<SelectButton
					title="Register For Services"
				/>
			</div>
		</div>
	</div>

export default Select;
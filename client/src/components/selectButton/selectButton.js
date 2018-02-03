//react
import React from 'react';

class SelectButton extends React.Component {
	
	render(){
		return (
			<div className="text-center">
				<h2>{this.props.title}</h2>
					<span className="oi oi-book" title="oi-book"><button /></span>

			</div>
		)
	}
}

export default SelectButton;
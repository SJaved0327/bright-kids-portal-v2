// react
import React from 'react';
// react-router
import {
  Link
} from 'react-router-dom';
//assets
import FaAngleRight from 'react-icons/lib/fa/angle-right'

//comments

const RightPageArrow = (props) => (
	<div style={props.style}>	
		<Link to={props.to}>
			<FaAngleRight size={props.size} className="fontAwe" />
		</Link>
	</div>
)

export default RightPageArrow;
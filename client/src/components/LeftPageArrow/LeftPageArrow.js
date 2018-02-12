//react
import React from 'react';
// react-router
import {
  Link
} from 'react-router-dom';
//assets
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const LeftPageArrow = (props) => (
	<div style={props.style}>
		<Link to={props.to}>
			<FaAngleLeft size={props.size} className="fontAwe" />
		</Link>
	</div>
)

export default LeftPageArrow;
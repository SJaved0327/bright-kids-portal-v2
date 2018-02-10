//react
import React from 'react';
// react-router
import {
  Link
} from 'react-router-dom';
//assets
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const LeftPageArrow = (props) => (
	<Link to={props.to}>
		<FaAngleLeft size={props.size} className="fontAwe" />
	</Link>
)

export default LeftPageArrow;
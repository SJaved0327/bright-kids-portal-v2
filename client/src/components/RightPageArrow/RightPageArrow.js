// react
import React from 'react';
// react-router
import {
  Link
} from 'react-router-dom';
//assets
import FaAngleRight from 'react-icons/lib/fa/angle-right'

const RightPageArrow = (props) => (
	<Link to={props.to}>
		<FaAngleRight size={props.size} className="fontAwe" />
	</Link>
)

export default RightPageArrow;
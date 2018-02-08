import React, { Component } from "react";
import {
    Link
} from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap'
import FaGroup from 'react-icons/lib/fa/group'
import './select_path.css'

const buttonSize = 100;

class select_path extends Component {

    render() {
        return (
            <div className ='container'>


            <Row>

                <Col  md = {6} xs={12} >

                <span className ='iconText'> View Family</span>

                <Link to={"/view_family"}>
                    <div className ='viewFamily selectCircle'>
                    <FaGroup size={buttonSize} className = 'fontAwe'/>
                    </div>
                </Link>

                </Col>


                <Col  md = {6} xs={12} >
                <span className ='iconText'> Register for Programs</span>

                <Link to={"/register_programs"}>
                    <div className ='registerPrograms selectCircle'>
                    <FaGraduationCap size={buttonSize} className = 'fontAwe' />
                    </div>
                </Link>

                </Col>


                </Row>




            </div>
         )
    }

}
export default select_path;
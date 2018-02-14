// react
import React, { Component } from "react";
// react-router
import {
    Link
} from "react-router-dom";
// host_pages

// pages

// components 

// assets
import { Row, Col } from 'react-bootstrap';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap'
import FaGroup from 'react-icons/lib/fa/group'
import './select_path.css'

const buttonSize = 100;

class select_path extends Component {

    render() {
        return (
            <div className ="container" id="selectContainer">


            <Row>

                <Col  md = {6} xs={12} >

                <span className ='iconText'><h2> View Family </h2></span>

                <a href="/view_family">
                    <div className ='viewFamily selectCircle'>
                    <FaGroup size={buttonSize} className = 'fontAwe'/>
                    </div>
                </a>

                </Col>


                <Col  md = {6} xs={12} >
                <span className ='iconText'><h2> Register for Programs </h2></span>

                <a href="/register_programs">
                    <div className ='registerPrograms selectCircle'>
                    <FaGraduationCap size={buttonSize} className = 'fontAwe' />
                    </div>
                </a>

                </Col>


                </Row>




            </div>
         )
    }

}
export default select_path;
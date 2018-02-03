import React, { Component } from "react";
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

                <div className ='viewFamily selectCircle'>
                <FaGroup size={buttonSize} className = 'fontAwe'/>
                </div>

                </Col>


                <Col  md = {6} xs={12} >
                <span className ='iconText'> Register for Programs</span>

                <div className ='registerPrograms selectCircle'>
                <FaGraduationCap size={buttonSize} className = 'fontAwe' />
                </div>

                </Col>


                </Row>




            </div>
         )
    }

}
export default select_path;
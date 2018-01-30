// import { Button } from 'react-bootstrap';
import './footer.css'
import React, { Component } from 'react'
import FaPhone from 'react-icons/lib/fa/phone'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import { Row, Col, Grid } from 'react-bootstrap';

class footer extends Component {
  render() {
    return (
      <div>

        <Grid>
          <Row className='footerRow'>
            <Col xs={2}> 
              <FaPhone className='faPhone'   size={30} />
              <br/>
              <span className = 'footerPhone footerText'>(646) 434-1084 </span>
            </Col>
            <Col xs={8}>
              <img src='./facebook.png' alt='facebook icon' height='50px' width='50px' className='footerButton' />
              <img src='./youtube.png' alt='youtube icon' height='50px' width='50px' className='footerButton' />
              <img src='./twitter.png' alt='twitter icon' height='50px' width='50px' className='footerButton' />
            </Col>

            <Col xs={2}>
              <FaEnvelope className='faEnvelope'  size={30} />
              <br/>
              <span className = 'footerEmail footerText'>info@brightkidsnyc.com</span>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default footer;

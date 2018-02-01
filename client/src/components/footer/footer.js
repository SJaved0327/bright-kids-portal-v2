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
          <hr className = 'footerHr'/>
          <Row className='footerRow'>
            <Col xs={2}> 

              <span className = 'footerPhone footerText'>(646) 434-1084 </span>
  <br/>
              <FaPhone className='faPhone'   size={30} />

            </Col>
            <Col xs={8}>
            Follow us on social media!

            <div className ='allFooterButtons'>
              {/*Facebook*/}
              <a href="https://www.facebook.com/brightkidsinc/" target="_blank">
                <img src='./facebook.png' alt='facebook icon' height='50px' width='50px' className='footerButton' />
              </a>
              {/*YoutTube*/}
              <a href="https://www.youtube.com/channel/UCrA-x6F7l3bg--v0NmDuw2Q" target="_blank">
               <img src='./youtube.png' alt='youtube icon' height='50px' width='50px' className='footerButton' />
              </a>
            {/*Twitter*/}
              <a href="https://twitter.com/BrightKidsInc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                <img src='./twitter.png' alt='twitter icon' height='50px' width='50px' className='footerButton' />
              </a>
            </div>

            </Col>

            <Col xs={2}>
            <span className = 'footerEmail footerText'>info@brightkidsnyc.com</span>
              <FaEnvelope className='faEnvelope'  size={30} />


            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default footer;

import React, {Component} from 'react'
import "./navbar.css";

class navbar extends Component {
    render() {
      return (
    <div>
        <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="#home"><img src="/public/assets/logo.png" alt="bright-kids-logo" className="logo"></a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#">
            Portal
            </NavItem>
            <NavItem eventKey={2} href="#">
            Registration
            </NavItem>
        </Nav>
        </Navbar>
    </div>
);

export default navBar;
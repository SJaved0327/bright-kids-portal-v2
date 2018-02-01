import React, {Component} from 'react'
import "./navbar.css"
import { Navbar } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'


class NavbarTurtle extends Component {
    render() {
      return (
<div>
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Bright-Kids</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Portal
    </NavItem>
    <NavItem eventKey={2} href="#">
      Registration
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
</div>
      )
    }
};

export default NavbarTurtle;

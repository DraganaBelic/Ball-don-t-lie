
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import React, { Component } from 'react'
import { routes } from '../constants/routes';
import { Link } from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href='/'>Home</Navbar.Brand> */}
        <Link to="/">Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="See favourite" id="basic-nav-dropdown">
              <Link to={routes.FAVOURITE_TEAM}>Favourite team</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
    )
  }
}





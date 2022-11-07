import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NavbarComp = () => {
      return (
        <Router>
        <div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Adopt a Pet</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Adopt" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#dogs">
                  Dogs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#cats">
                  Cats
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="other">
                  Other pets
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Container>
      </Navbar>

      </div>
      </Router>
      );
    }
    
  

export default NavbarComp;
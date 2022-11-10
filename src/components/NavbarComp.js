import React from 'react';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComp = () => {
      return (
        
        <div>
        <Navbar bg="light" expand="lg" align="center">
        <Container fluid>
          <div padding="5">
          <Navbar.Brand href="#">Adopt a Pet</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Adopt" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/pets?type=dog">
                  Dogs
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                <Link to="/pets?type=cat">
                  Cats
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Container>
      </Navbar>

      </div>
     
      );
    }
    
  

export default NavbarComp;

import React from 'react';
import { Navbar, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../../App.css'

export default function Header() {
  
  return (
    <>
    <Navbar style={{backgroundColor:"#3B7FBF"}} variant="dark" sticky="bottom" expand="lg">
        <Container fluid>
          <NavbarBrand href="/#">
            <Image
              src="data:image/png;base64,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"
              alt=""
              style={{ width: '100px', height: 'auto',marginLeft:"1em" }}
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" style={{marginRight:"10px"}}/>
          <NavbarCollapse id="responsive-navbar-nav ">
            <Nav className=" mr-auto fs-5 justify-content-center">
            <NavLink href='/' style={{marginLeft: "1em" ,color:"white"}}>Home</NavLink>
              <NavLink  href='/about' style={{ marginLeft: "1em",color:"white" }}>About</NavLink>
              <NavLink   href='/services' style={{ marginLeft: "1em",color:"white" }}>Services</NavLink>
            </Nav>
            <Nav className="ml-auto">
              <NavLink href='/login' style={{ marginLeft:"1em",color:"white" }}> <Button variant="outline-light">Get started</Button>
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}

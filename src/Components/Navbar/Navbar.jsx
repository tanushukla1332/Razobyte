
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
    <Navbar style={{backgroundColor:"#FFFFF"}} variant="light" sticky="bottom" expand="lg">
        <Container fluid>
          <NavbarBrand href="/#">
            <Image
              src="https://razobyte.com/wp-content/uploads/2023/11/Razobyte-Softtech-Logo.jpg"
              alt=""
              style={{ width: '250px', height: 'auto',marginLeft:"1em" }}
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" style={{marginRight:"10px"}}/>
          <NavbarCollapse id="responsive-navbar-nav ">
            <Nav className=" mr-auto fs-5 justify-content-center">
            <NavLink href='/' style={{marginLeft: "1em" ,color:"white"}} active>Home</NavLink>
              <NavLink  href='/about' style={{ marginLeft: "1em",color:"white" }}>About</NavLink>
              <NavLink   href='/services' style={{ marginLeft: "1em",color:"white" }}>Services</NavLink>
              <NavLink   href='/services' style={{ marginLeft: "1em",color:"white" }}>Potfolio</NavLink>
              <NavLink   href='/services' style={{ marginLeft: "1em",color:"white" }}>Get in Touch</NavLink>
              <NavLink   href='/services' style={{ marginLeft: "1em",color:"white" }}>Career</NavLink>
            </Nav>
            <Nav className="ml-auto">
              <NavLink href='/login' style={{ marginLeft:"1em",color:"white" }}> 
              <Button variant="light" className='btn1'>Book a Session</Button>
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}

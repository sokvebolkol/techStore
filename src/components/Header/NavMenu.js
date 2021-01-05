import React from 'react';
import { Navbar, Nav, Button, Image, Container } from 'react-bootstrap';

const NavMenu = () => {
  return (
    <Container fluid className="bg-light">
      <div className="px-4 ml-4">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">
            <Image
              src="https://seeklogo.com/images/T/technology-round-logo-7AA5D5112F-seeklogo.com.png"
              width={95}
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto pl-4">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="products">Products</Nav.Link>
              <Nav.Link href="services">Services</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Item className="px-2">
                <Button variant="outline-success">Login</Button>
              </Nav.Item>
              <Nav.Item className="px-4">
                <Button href="signUp" variant="outline-primary">
                  Sign Up
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavMenu;

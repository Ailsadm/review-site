import React from 'react';
import Container from 'react-bootstrap/Container';
//import { Nav, na } from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import "./style.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavbarTest() {

  return (

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search books"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="navbar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>

  )
}

export default NavbarTest



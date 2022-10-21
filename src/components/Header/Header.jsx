import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="headerCustomStyle">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4 text-primary">
            Tour Planner
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Link className="mx-4 linkStyle" href="#deets">Tours</Link>
              <Link className="mx-4 linkStyle" href="#memes">Places</Link>
              <Link className="mx-4 linkStyle" href="#memes">Content</Link>
              <Link className="mx-4 linkStyle" href="#memes">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

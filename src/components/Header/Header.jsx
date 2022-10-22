import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="headerCustomStyle">
        <Container>
          <Link to="/" className="fw-bold fs-4 text-primary linkStyle">
            Tour Planner
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Link className="mx-4 linkStyle" href="#deets">
                Tours
              </Link>
              <Link className="mx-4 linkStyle" href="#memes">
                Places
              </Link>
              <Link className="mx-4 linkStyle" href="#memes">
                Content
              </Link>
              <Link className="mx-4 linkStyle" href="#memes">
                About
              </Link>
              <div>
                <Link className="mx-2 linkStyle" to="/login">
                  Login
                </Link>
                <Link className="mx-2 linkStyle" to="/register">
                  Register
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

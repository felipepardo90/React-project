import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <Navbar bg="info" variant="dark" collapseOnSelect expand="lg">
        <Container>
          {/* LOGO */}

          <Navbar.Brand>
            <Link to="/">
              <img
                src="https://github.com/felipepardo90/React-project/blob/main/src/components/Images/logo.png?raw=true"
                width="60"
                height="100"
                className="d-inline-block align-top"
                alt="alf logo"
              />
            </Link>
          </Navbar.Brand>

          {/* NAV LINKS */}

          <Nav defaultActiveKey="/home" as="ul">
            <NavbarCollapse className="justify-content-end">
              <Nav.Link>
                <Link to="/pastelería">
                  Pastelería
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/paletas">Paletas</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/variedades">Variedades</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/nosotros">Nosotros</Link>
              </Nav.Link>
              <CartWidget />
              {/* ICON -- CART SHOPPING */}
            </NavbarCollapse>
          </Nav>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
}

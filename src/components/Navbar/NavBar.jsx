import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CartWidget from "./CartWidget";
import logo from "./logo.png";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          {/* LOGO */}

          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Cultura Logo"
            />
          </Navbar.Brand>

          {/* NAV LINKS */}

          <Nav defaultActiveKey="/home" as="ul">
            <NavbarCollapse className="justify-content-end">
              <Nav.Link href="#Cervecería">Cervecería</Nav.Link>
              <Nav.Link href="#Vinería">Vinería</Nav.Link>
              <Nav.Link href="#Licorería">Licorería</Nav.Link>
              <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
            </NavbarCollapse>
          </Nav>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <CartWidget />
          {/* ICON -- CART SHOPPING */}
        </Container>
      </Navbar>
    </>
  );
}

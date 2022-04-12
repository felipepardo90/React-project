import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <Navbar bg="info" variant="dark" collapseOnSelect expand="lg">
        <Container>
          {/* LOGO */}

          <Navbar.Brand href="#home">
            <img
              src="https://github.com/felipepardo90/React-project/blob/main/src/components/Images/logo.png?raw=true"
              width="60"
              height="100"
              className="d-inline-block align-top"
              alt="alf logo"
            />
          </Navbar.Brand>

          {/* NAV LINKS */}

          <Nav defaultActiveKey="/home" as="ul">
            <NavbarCollapse className="justify-content-end">
              <Nav.Link href="#Pastelería">Pastelería</Nav.Link>
              <Nav.Link href="#Paletas">Paletas</Nav.Link>
              <Nav.Link href="#Variedades">Variedades</Nav.Link>
              <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
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

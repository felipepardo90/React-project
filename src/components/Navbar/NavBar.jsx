import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import s from './NavStyles.module.css'

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
              
              <Link to="/category/pies" className={s.navLinks}>Pastelería</Link>
              <Link to="/category/popsicles" className={s.navLinks}>Paletas</Link>
              <Link to="/category/varieties" className={s.navLinks}>Variedades</Link>
              <Link to="/category/about-us" className={s.navLinks}>Nosotros</Link>

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

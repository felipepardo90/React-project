import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import "./_NavbarStyles.scss";

const navlinks = [
  { category: "Pastelería", toRoute: "/category/pies", id: 1 },
  { category: "Paletas", toRoute: "/category/popsicles", id: 2 },
  { category: "Variedades", toRoute: "/category/varieties", id: 3 },
  { category: "Nosotros", toRoute: "*", id: 4 },
];

export default function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar-bg"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/alf-paletas-react" style={{ textDecoration: "none" }}>
              <p className="brand-logo">Alf Paletas</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="light" />

          <Navbar.Collapse id="responsive-navbar-nav" style={{color:"white"}}>
            <Nav className="me-auto">
              {navlinks.map((nav) => (
                <li key={nav.id} style={{margin:"auto", padding:"10px 10px"}}>
                  <Link to={nav.toRoute} className="nav__links">
                    {nav.category}
                  </Link>
                </li>
              ))}
            </Nav>
            <Nav className="cart-widget">
            <CartWidget />
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

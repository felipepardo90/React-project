import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import './_NavbarStyles.scss'

const navlinks = [
  {category: "Pastelería", toRoute: "/category/pies", id:1 },
  {category: "Paletas", toRoute: "/category/popsicles", id:2 },
  {category: "Variedades", toRoute: "/category/varieties", id:3 },
  {category: "Nosotros", toRoute: "/category/about-us", id:4 }
]

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{borderBottom:"5px solid pink", background:"#0fffe9"}}>
        <Container>
          {/* LOGO */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Brand>
            <Link to="/React-project">
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
            <NavbarCollapse className="collapse">

              {navlinks.map(nav =>
                <li><Link to={nav.toRoute} className="nav__links dropdown-item">{nav.category}</Link></li>
              )}
            </NavbarCollapse>
          </Nav>
          <CartWidget />
  
        </Container>
      </Navbar>
    </>
  );
}

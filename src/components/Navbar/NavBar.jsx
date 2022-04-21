import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import s from './NavStyles.module.css'

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
            <NavbarCollapse className="justify-content-end">

              {navlinks.map(nav =>
                <Link key={nav.id} to={nav.toRoute} className={s.navLinks}>{nav.category}</Link>
              )}
              
              {/* <Link to="/category/pies" className={s.navLinks}>Pastelería</Link>
              <Link to="/category/popsicles" className={s.navLinks}>Paletas</Link>
              <Link to="/category/varieties" className={s.navLinks}>Variedades</Link>
              <Link to="/category/about-us" className={s.navLinks}>Nosotros</Link> */}

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

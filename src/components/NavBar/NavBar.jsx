import { Navbar, Container, Nav } from 'react-bootstrap'
import CartWidget from './CartWidget';


export default function NavBar() {

  return (
    
    <>
<Navbar bg="dark" variant="dark">
  
    <Container>


        {/* LOGO */}


    <Navbar.Brand href="#home"><img
        src="logo.png"
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />CULTURA ALCOHÓLICA</Navbar.Brand>
    <Nav className="me-auto">
        

        {/* NAV LINKS */}


      <Nav.Link href="#cerveceria">Cervecería</Nav.Link>
      <Nav.Link href="#licoreria">Licorería</Nav.Link>
      <Nav.Link href="#vineria">Vinería</Nav.Link>
      <Nav.Link href="#accesorios">Accesorios</Nav.Link>
    </Nav>

    {/* ICON -- CART SHOPPING */}

    <CartWidget></CartWidget>

    </Container>
    
  </Navbar>
    </>
  );
}

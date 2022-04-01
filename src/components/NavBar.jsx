import { Navbar, Container, Nav } from 'react-bootstrap'
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';


export default function NavBar() {

  return (
    
    <>
<Navbar bg="dark" variant="dark">
  
    <Container>


        {/* LOGO */}


    <Navbar.Brand href="#home"><img
        src='logo.png'
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />CULTURA ALCOHÓLICA</Navbar.Brand>

        {/* NAV LINKS */}

        <Nav className="me-auto">
        <Nav.Link href="#Cervecería">Cervecería</Nav.Link>
        <Nav.Link href="#Vinería">Vinería</Nav.Link>
        <Nav.Link href="#Licorería">Licorería</Nav.Link>
        <Nav.Link href="#Accesorios">Accesorios</Nav.Link>

    </Nav>

      

    {/* ICON -- CART SHOPPING */}

    <CartWidget />

    </Container>
    
  </Navbar>
    </>
  );
}

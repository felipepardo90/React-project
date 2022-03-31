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

        <ItemListContainer section="Cervecería" />     
        <ItemListContainer section="Licorería" />       
        <ItemListContainer section="Vinería" />    
        <ItemListContainer section="Accesorios" />

    </Nav>

      

    {/* ICON -- CART SHOPPING */}

    <CartWidget />

    </Container>
    
  </Navbar>
    </>
  );
}

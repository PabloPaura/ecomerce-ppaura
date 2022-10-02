import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'> 
            Tienda Pablo P
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>           
            Home            
          </Nav.Link>
          <Nav.Link as={Link} to='/category/discos-externos'>Discos externos</Nav.Link>
          <Nav.Link as={Link} to='/category/discos-internos'>Discos Internos</Nav.Link>
          <Nav.Link as={Link} to='/category/monitores'>Monitores</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;

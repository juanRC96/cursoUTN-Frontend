import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../../styles/components/layout/Nav.css"

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          
          <Nav.Link className="navlink" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="navlink" as={Link} to="/nosotros">
            Nosotros
          </Nav.Link>
          <Nav.Link className="navlink" as={Link} to="/noticias">
            Noticias
          </Nav.Link>
          <Nav.Link className="navlink" as={Link} to="/contacto">
            Contacto
          </Nav.Link>

          <NavDropdown className="navdropdown" title="Administrar" id="basic-nav-dropdown" style={{fontSize:"25px",marginLeft:"2rem"}}>
            <NavDropdown.Item as={Link} to="/login">Iniciar sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

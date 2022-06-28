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

          <NavDropdown className="navdropdown" title="Dropdown" id="basic-nav-dropdown" style={{fontSize:"25px",marginLeft:"2rem"}}>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../../styles/components/layout/Nav.css"
import AuthContext from "../../context/AuthContext";

function Navigation() {
  return (
    <AuthContext.Consumer>
      {
        context =>
        <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            
            <Nav.Link className="navlink" as={Link} to="/" style={{fontSize:"25px",marginLeft:"2rem"}}>
              Home
            </Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/nosotros" style={{fontSize:"25px",marginLeft:"2rem"}}>
              Nosotros
            </Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/noticias" style={{fontSize:"25px",marginLeft:"2rem"}}>
              Noticias
            </Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/contacto" style={{fontSize:"25px",marginLeft:"2rem"}}>
              Contacto
            </Nav.Link>

            {
              !context.userLogin &&
              <NavDropdown className="navdropdown" title="Administrar" id="basic-nav-dropdown" style={{fontSize:"25px",marginLeft:"2rem"}}>
                <NavDropdown.Item as={Link} to="/login">Iniciar sesión</NavDropdown.Item>
              </NavDropdown>
            }
            {
              context.userLogin &&
              <>
              <Nav.Link className="navlink" as={Link} to="/mensajes">
                Mensajes
              </Nav.Link>
              
              <NavDropdown className="navdropdown" title={context.username} id="basic-nav-dropdown" style={{fontSize:"25px",marginLeft:"2rem"}}>
                <NavDropdown.Item onClick={context.logoutUser}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      }

    </AuthContext.Consumer>
  );
}

export default Navigation;

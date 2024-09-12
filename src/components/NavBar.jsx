import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
  const [activeLink, setActiveLink] = useState('');

  const handleSelect = (selectedLink) => {
    setActiveLink(selectedLink);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="me-3">
        <img
            src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-alcohol-in-drinks-line-icon-vector-png-image_12262966.png"
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link
              href="#energizantes"
              className={`nav-link ${activeLink === 'energizantes' ? 'font-weight-bold border-bottom' : ''}`}
              onClick={() => handleSelect('energizantes')}
            >
              Energizantes
            </Nav.Link>
            <Nav.Link
              href="#importadas"
              className={`nav-link ${activeLink === 'importadas' ? 'font-weight-bold border-bottom' : ''}`}
              onClick={() => handleSelect('importadas')}
            >
              Importadas
            </Nav.Link>
            <Nav.Link
              href="#sin-alcohol"
              className={`nav-link ${activeLink === 'sin-alcohol' ? 'font-weight-bold border-bottom' : ''}`}
              onClick={() => handleSelect('sin-alcohol')}
            >
              Sin Alcohol
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;

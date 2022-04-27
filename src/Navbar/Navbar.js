import "./Navbar.css";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';


function MyNavbar() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Sopalinge</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Whoami</Nav.Link>
        <Nav.Link href="#link">CV</Nav.Link>
        <Nav.Link href="#link">Write-ups</Nav.Link>
        <Nav.Link href="#link">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default MyNavbar;

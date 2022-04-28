import "./Navbar.css";
import {Navbar, Nav, Container} from 'react-bootstrap';


function MyNavbar() {
  return (
<Navbar bg="light" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="/">Sopalinge</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Whoami</Nav.Link>
        <Nav.Link href="/#/cv">CV</Nav.Link>
        <Nav.Link href="/#/writeups">Writeups</Nav.Link>
        <Nav.Link href="/#/projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default MyNavbar;

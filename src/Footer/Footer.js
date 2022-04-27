import './Footer.css'
import {Navbar, Nav, Container} from 'react-bootstrap';

function Footer() {
    return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <Container>
        <p>Tanguy Boisset - 2022</p>
      </Container>
    </Navbar>
    );
  }
  
  export default Footer;
import './Whoami.css'
import {Row, Col, Container} from 'react-bootstrap';

function Whoami() {
    return (
      <div className="Whoami">
        <h1>Whoami</h1>
        <Container className='mainPrez'>
            <Row>
                <Col sm={8}>
                    <p>
                        My name is Tanguy 'Sopalinge' Boisset.<br/><br/>
                        I'm a cybersecurity student at CentraleSupelec and currently doing an internship at Mazars as cybersecurity consultant.<br/><br/>
                        I'm interested in computer science, especially cybersecurity, and a CTF player.<br/><br/>
                        I'm also a big fan of e-sport and a golf player.
                    </p>
                </Col>
                <Col sm={4}>
                    <img src={require('./baguette-pp.jpg')} className="whoamiImg"/>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Whoami;
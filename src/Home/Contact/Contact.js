import './Contact.css'
import {Card, CardGroup, Button} from 'react-bootstrap';

function Contact() {
    return (
      <div className='contactDiv'>
        <h2>Contact</h2>
        <br />
        <CardGroup className='group'>
          <Card className='card'>
            <Card.Img className="cardImg" variant="top" alt='logo LinkedIn' src={require("./icones/linkedin.png")} />
            <Card.Body>
              <Card.Title>LinkedIn</Card.Title>
              <Card.Text>
                Mon profil LinkedIn personnel. Je publie rarement.
              </Card.Text>
              <Button href='https://www.linkedin.com/in/tanguy-boisset/' target='_blank' className='cardButton'>Ouvrir dans un nouvel onglet</Button>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Img className="cardImg" variant="top" alt='logo Twitter' src={require("./icones/twitter.png")} />
            <Card.Body>
              <Card.Title>Twitter</Card.Title>
              <Card.Text>
                Mon compte Twitter où je publie de temps en temps.
              </Card.Text>
              <Button href='https://twitter.com/Sopalinge' target='_blank' className='cardButton'>Ouvrir dans un nouvel onglet</Button>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Img className="cardImg" variant="top" alt='logo GitHub' src={require("./icones/github.png")} />
            <Card.Body>
              <Card.Title>GitHub</Card.Title>
              <Card.Text>
                Différents projets académiques, professionnels ou personnels.
              </Card.Text>
              <Button href='https://github.com/Tanguy-Boisset' target='_blank' className='cardButton'>Ouvrir dans un nouvel onglet</Button>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Img className="cardImg" variant="top" alt='logo RootMe' src={require("./icones/rootme.png")} />
            <Card.Body>
              <Card.Title>RootMe</Card.Title>
              <Card.Text>
                Ma principale plateforme de tryhard. Actuellement à 4500+ pts et top 1000.
              </Card.Text>
              <Button href='https://www.root-me.org/Sopalinge' target='_blank' className='cardButton'>Ouvrir dans un nouvel onglet</Button>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Img className="cardImg" variant="top" alt='logo HackTheBox' src={require("./icones/hackthebox.png")} />
            <Card.Body>
              <Card.Title>HackTheBox</Card.Title>
              <Card.Text>
                Je ne m'y suis pas encore mis sérieusement mais ça arrive :)
              </Card.Text>
              <Button href='https://app.hackthebox.com/users/956700' target='_blank' className='cardButton'>Ouvrir dans un nouvel onglet</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
  
  export default Contact;
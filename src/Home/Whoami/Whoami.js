import './Whoami.css'

function Whoami() {
    return (
      <div className="Whoami">
        <h1>Whoami</h1>
        <div className='mainPrez'>
            <p>
                My name is Tanguy 'Sopalinge' Boisset.<br/><br/>
                I'm a cybersecurity student at CentraleSupelec and currently doing an internship at Mazars as cybersecurity consultant.<br/><br/>
                I'm interested in computer science, especially cybersecurity, and a CTF player.<br/><br/>
                I'm also a big fan of e-sport and a golf player.
            </p>
            <img src={require('./baguette-pp.jpg')} className="whoamiImg"/>
        </div>
      </div>
    );
  }
  
  export default Whoami;
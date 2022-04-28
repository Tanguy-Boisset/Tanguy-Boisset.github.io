import "./Home.css";
import Whoami from "./Whoami/Whoami";
import Contact from "./Contact/Contact";


function Home() {
  return (
    <div className="Home">
      <Whoami/>
      <Contact/>
    </div>
  );
}

export default Home;

import Commands from "./Commands";
import "./Shell.css";


function Shell() {

  function display(e){
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      let prevCommands = document.getElementsByClassName("Display")[0].innerHTML;
      let newCommand = document.getElementById("UserInput").value;
      let resultCommand = Commands(newCommand);
      document.getElementsByClassName("Display")[0].innerHTML = prevCommands + "<p>" + "tanguy@boisset:~$ " + newCommand + "</p>" + "<p>" + resultCommand + "</p>";
      document.getElementById("UserInput").value = "";
    }
  }

  return (
    <div className="Shell" onKeyDown={display}>
      <div className="Display">
        <p>Type 'help' for a list of useful commands ;)</p>
      </div>
      <div className="ShellInput">
        <label className="User" htmlFor="UserInput">tanguy@boisset:~$ </label>
        <input type="text" name="UserInput" id="UserInput" size="20" autoFocus/>
      </div>
    </div>
  );
}




export default Shell;

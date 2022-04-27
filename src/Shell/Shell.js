import Commands from "./Commands";
import "./Shell.css";


function Shell() {

  let prevCommands = ["<p>Type 'help' for a list of useful commands ;)</p>"]

  function display(e){
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      let newCommand = document.getElementById("UserInput").value; //get user input
      let resultCommand = Commands(newCommand); //get the result of the entered command
      prevCommands.push("<p>tanguy@boisset:~$ " + newCommand + "</p>");
      prevCommands.push("<p>" + resultCommand + "</p>");
      document.getElementsByClassName("Display")[0].innerHTML = prevCommands.join(" ");
      document.getElementById("UserInput").value = "";
      while (isOverflown(document.getElementsByClassName("Display")[0])){
        prevCommands.shift();
        document.getElementsByClassName("Display")[0].innerHTML = prevCommands.join(" ");
      }
    function isOverflown(element) {
      return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }
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

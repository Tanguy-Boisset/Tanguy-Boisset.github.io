function Commands(input){
    switch (input){

        case "help":
            return "Here's the list of all commands :" + "<br/>" +"\
            &nbsp;&nbsp;- help : display the available commands"

        case "":
            return ""
        
        default:
            return "Command '" + input + "' not found"
    }
}

export default Commands;
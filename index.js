"use strict";
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions
let {validatePin, getBalance, withdraw, deposit} = require("./atm.js");
const prompt = require('prompt-sync')();





accessATM();
function accessATM() {
  let pinNumber = '';
  pinNumber = '';
  pinNumber = prompt("Please enter your pin number: ");   //TODO: Prompt users for their pin
  pinNumber = parseInt(pinNumber);
  let trueOrFalse = '';
  trueOrFalse = validatePin(pinNumber);
  if(trueOrFalse === true){
    mainMenu();
    return
  }
  else{
    accessATM();
  }
}
//TODO: Call accessATM function

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following.
  let menu = "Please enter a number to choose a menu option: " + '\n' + "View Balance: (1)" + '\n' + "Withdraw: (2)" + '\n' + "Deposit: (3)" + '\n' + "Restart: (4)" + '\n' + "Exit: (5)" + '\n';
  console.log(menu);

  switch(prompt('Choose an option:  ')){
    case '1' || 1:
      getBalance();
      mainMenu()
      break;
    case '2' || 2:
      withdraw();
      mainMenu()
      break;
    case '3' || 3:
      deposit();
      mainMenu()
      break;
    case '4' || 4:
      accessATM();
      break;
      return
    case '5' || 5:
      break;
  }

  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}

//TODO: Call mainMenu function to start our app!

module.exports = {
  accessATM,
  mainMenu
}
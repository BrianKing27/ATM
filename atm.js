"use strict";
const {pin, balance} = require("./account.js");
//TODO: Import necessary values from account.js
console.log(pin);
function getBalance(accountBalance) {
  //TODO: Return the customer's acct. balance
  if(validatePin() === true){
    console.log(balance)
  }
  else {
    validatePin === false
    return
  }
} 


function withdraw(withdrawAmount) {
  if(validatePin() === true){            //TODO: withdraw amount from current acct. balance
    balance -= withdrawAmount;
    console.log(balance);
  }
  else {
    return
  }

function deposit(depositAmount) {
  if(validatePin() === true){
    balance += depositAmount;
    console.log(balance);
  }
  else {
    return
  }

  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) {
  if(enteredPin === pin){                //TODO: Check if entered pin matches account.js pin
      return true                        //Allow access to ATM if matching
  }                                      //Return value should be a Boolean (true or false)
  else{
    return false
  }


  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

//TODO: Export these functions

module.exports = {
  enterPin: validatePin(),
  checkBalance: getBalance(),
  makeWithdraw: withdraw(),
  makeDeposit: deposit(),
};

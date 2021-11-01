"use strict";
let {pin, balance} = require("./account.js");
const prompt = require('prompt-sync')();
//TODO: Import necessary values from account.js

function getBalance() {
  //TODO: Return the customer's acct. balance
    console.log(balance);
} 

function withdraw(withdrawAmount) {
  //TODO: withdraw amount from current acct. balance
  withdrawAmount = prompt('How much would you like to withdraw?');
  withdrawAmount = parseInt(withdrawAmount);
  balance = balance - withdrawAmount;
  console.log(balance);
}
function deposit(depositAmount) {
  depositAmount = prompt('How much would you like to deposit? ');
  depositAmount = parseInt(depositAmount);
  balance = balance + depositAmount;
  console.log(balance);
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) {
  if(enteredPin === pin){                //TODO: Check if entered pin matches account.js pin
      return true                        //Allow access to ATM if matching
  }                                      //Return value should be a Boolean (true or false)
  else{
    return false;
  }


  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

//TODO: Export these functions

module.exports = {
  validatePin,
  getBalance,
  withdraw,
  deposit,
};

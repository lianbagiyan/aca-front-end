/*
    Create an Account class. Account should have: id, name, balance.
    It should have setters for name and balance, and getters for all fields.
    It should have a method: credit(amount), which should add amount to balance and
    return the updated balance.
    It should have a method: debit(amount), which should subtract the amount from the
    balance, if amount is less than the balance, otherwise output “Amount exceeded
    balance.”
    It should have a method: transferTo(anotherAccount, amount): which should subtract the
    amount from the account balance and add it to the given anotherAccount and return the
    updated balance, if amount is less than the balance, otherwise output “Amount
    exceeded balance.”
    It should have a static method: identifyAccounts(accountFirst, accountSecond) which
    gets two accounts and identifies if they are the same or not comparing all fields.
    It should have toString method.
*/

class Account {
    constructor(id, name, balance) {
      this._id = id;
      this._name = name;
      this._balance = balance;
    }
  
    get id() {
      return this._id;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      const normalizedValue = value.trim();
  
      if (normalizedValue === "") {
        throw new Error("Empty value!");
      }
  
      this._name = value;
    }
  
    get balance() {
      return this._balance;
    }
  
    set balance(value) {
      if (value < 0) {
        throw new Error("Oops! Check again!");
      }
  
      this._balance = value;
    }
  
    credit(amount) {
      this.balance += amount;
      return this.balance;
    }
  
    debit(amount) {
      if (amount < this.balance) {
        return this.balance;
      }
  
      throw new Error("Amount exceeded balance.");
    }
  
    transferTo(anotherAccount, amount) {
      if (amount < this.balance) {
        this.balance = this.balance - amount;
        anotherAccount.balance = anotherAccount.balance + amount;
        return this.balance;
      }
  
      throw new Error("Amount exceeded balance.");
    }
  
    static identifyAccounts(accountFirst, accountSecond) {
      return JSON.stringify(accountFirst) === JSON.stringify(accountSecond);
    }
  
    toString() {
      return `${this.name} nice to meet you!`;
    }
}
  
const user = new Account(7, "Lian", 800);
  
console.log(user.toString());
/*
    Create an Author class and a Book class.
    Author should have: name, email, gender.
    It should have getters.
    It should have a toString method.
    Book should have: title, author(Author), price, quantity.
    It should have appropriate getters and setters.
    It should have a method: getProfit(), which calculates the profit from the book based on
    the price and quantity.
    It should have a toString method.
*/

class Author {
    constructor(name, email, gender) {
      this._name = name;
      this._email = email;
      this._gender = gender;
    }
  
    get name() {
      return this._name;
    }
  
    get email() {
      return this._email;
    }
  
    get gender() {
      return this._gender;
    }
  
    toString() {
      return `
          Author:
            name = ${this.name}
            email = ${this.email}
            gender = ${this.gender}
        `;
    }
}
  
class Book {
    constructor(title, author, price, quantity) {
      this._title = title;
      this._author = author;
      this._price = price;
      this._quantity = quantity;
    }
  
    get title() {
      return this._title;
    }
  
    get author() {
      return this._author;
    }
  
    get price() {
      return this._price;
    }
  
    get quantity() {
      return this._quantity;
    }
  
    set title(value) {
      if (value.trim() === "") {
        throw new Error("Empty value!");
      }
  
      this._title = value;
    }
  
    set author(value) {
      if (value.trim() === "") {
        throw new Error("Invalid value!");
      }
  
      this._author = value;
    }
  
    set price(value) {
      if (typeof value !== "number") {
        throw new Error("Should be a number!");
      }
  
      this._price = value;
    }
  
    set quantity(value) {
      if (value < 0) {
        throw new Error("Oops! Check again!");
      }
  
      this._price = value;
    }
  
    getProfit() {
      let profit = this._price * this._quantity;
      return profit;
    }
  
    toString() {
      return `
          Book:
            title = ${this.title}
            author = ${this.author}
        `;
    }
}
  
const author = new Author("Lian", "bagiyanliana2@gmail.com", "female");
const book = new Book("My history!", "Lian B.", 10000, 40);
  
console.log(author.toString());
console.log(book.getProfit());
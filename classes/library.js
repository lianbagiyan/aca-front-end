class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    toString() {
      return "Book";
    }
  
    isTheSameBook(book) {
      return this.author === book.author && this.title === book.title;
    }
}
  
const book1 = new Book("war and peace", "Leo Tolstoy");
const book2 = new Book("Alice in Wonderland", "Lewis Carroll");
  
class LibraryBookBase extends Book {
    constructor(title, author, bookId) {
      super(title, author);
      this.bookId = bookId;
    }
  
    toString() {
      return "LibraryBookBase";
    }
}
  
const libBook1 = new LibraryBookBase("finansist", "Theodor Draiser", 1);
  
// console.log(libBook1)
  
class LibraryBook extends LibraryBookBase {
    constructor([quantity, ...otherArgs]) {
      super(...otherArgs);
      this.quantity = quantity;
    }
  
    toString() {
      return "LibraryBook";
    }
  
    increaseQuantityBy(amount) {
      this.quantity += amount;
    }
  
    decreaseQuantityBy(amount) {
      this.quantity -= amount;
    }
}
  
const libBook2 = new LibraryBook([10, "finansist", "Theodor Draiser", 1]);
  
class ReaderBook extends Book {
    constructor(title, author, bookId, expirationDate, isReturned) {
      super(title, author);
  
      this.bookId = bookId;
      this.expirationDate = expirationDate;
      this.isReturned = isReturned;
    }
  
    toString() {
      return "ReaderBook";
    }
}
  
class Reader {
    constructor(fname, lname, readerId, books) {
      this.fname = fname;
      this.lname = lname;
      this.readerId = readerId;
      this.books = books;
    }
  
    toString() {
      return "Reader";
    }
  
    borrowBook(book, library) {
      const borrowedBook = library.lendBook(book, this.readerId);
  
      if (borrowedBook.toString() === "ReaderBook") {
        this.books.push(borrowedBook);
      } else {
        throw new Error("No such a book!");
      }
    }
}
  
const orwellsBook1984 = new ReaderBook(
    "1984",
    "Orwell",
    1,
    "2024-06-05",
    false
);
  
const montagsBooks = [
    orwellsBook1984,
    new ReaderBook("lord of rings", "Tolkien", 2, "2020-06-05", false),
];
  
const montag = new Reader("Guy", "Montag", 1, montagsBooks);
const cowperwood = new Reader("Frank", "Cowperwood", 1, []);
  
class Library {
    constructor(books = [], readers) {
      this.books = books;
      this.readers = readers;
    }
  
    doHaveBook(requestedBook) {
      return this.books.find((book) => {
        return requestedBook.isTheSameBook(book);
      });
    }
  
    addBook(newBook) {
      const foundBook = this.doHaveBook(newBook);
  
      if (foundBook) {
        foundBook.increaseQuantityBy(1);
      } else {
        const libraryBookInstance = new LibraryBook([
          1,
          newBook.title,
          newBook.author,
          1,
        ]);
        this.books.push(libraryBookInstance);
      }
    }
  
    addBooks(newBooks) {
      this.books.push(...newBooks);
    }
  
    checkReaderId(readerId) {
      return this.readers.some((reader) => {
        return reader.readerId === readerId;
      });
    }
  
    lendBook(book, readerId) {
      console.log(!this.checkReaderId(readerId));
  
      if (!this.checkReaderId(readerId)) {
        throw new Error("No such user!");
      }
  
      const foundBook = this.doHaveBook(book);
  
      if (foundBook && foundBook.quantity >= 1) {
        foundBook.decreaseQuantityBy(1);
        const readerBookInstance = new ReaderBook(
          foundBook.title,
          foundBook.author,
          foundBook.bookId,
          new Date("2020-07-06"),
          false
        );
  
        return readerBookInstance;
      }
  
      throw new Error("There's no such a book or we don't have at the moment!");
    }
}
  
const lib = new Library([], [montag, cowperwood]);
  
lib.addBook(book1);
  
cowperwood.borrowBook(book1, lib);
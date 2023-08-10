class Book {
  constructor(title, author, available) {
    this.title = title;
    this.author = author;
    this.year = available;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} and it is ${this.available}`;
  }
}
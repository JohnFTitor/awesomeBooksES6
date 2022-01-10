import Book from './Books.js';

export default class Bookshelf {
  constructor() {
    this.books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
    this.bookList = document.getElementById('book-list');
  }

  removeBook(index) {
    this.books = this.books.filter((book) => this.books.indexOf(book) !== index);
    this.storeData();
  }

  displayBooks() {
    this.bookList.innerHTML = '';

    this.books.forEach((book) => {
      const rowHTML = (book) => `
            <span class="book-title">"${book.title}" by ${book.author}</span>
            <button class="remove-button" type="button">Remove</button>
            `;
      const rowTr = document.createElement('tr');
      rowTr.innerHTML = rowHTML(book);
      rowTr.querySelector('.remove-button').addEventListener('click', () => {
        this.removeBook(this.books.indexOf(book));
        this.displayBooks(this.books);
      });
      document.getElementById('book-list').appendChild(rowTr);
    });
  }

  storeData() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook() {
    const span = document.getElementById('success-message');
    const book = new Book();
    if (JSON.stringify(this.books[this.books.length - 1]) !== JSON.stringify(book)
            && book.title !== '' && book.author !== '') {
      this.books.push(book);
      this.storeData();
      span.textContent = `${book.title} was Successfully Added`;
      this.displayBooks(this.books);
      document.getElementById('book-title-input').value = '';
      document.getElementById('book-author-input').value = '';
    }
  }
}
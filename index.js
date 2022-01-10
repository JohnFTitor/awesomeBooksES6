import Bookshelf from './modules/Bookshelf.js';
import { startTime, toggleDisplay } from './modules/Navigation.js';

const bookShelf = new Bookshelf();
const addButton = document.getElementById('book-form');
addButton.addEventListener('submit', (e) => {
  e.preventDefault();
  bookShelf.addBook();
});
bookShelf.displayBooks();

// Navigation

const selectList = document.getElementById('list');
selectList.addEventListener('click', () => { toggleDisplay('awesome-list', selectList); });

const selectNew = document.getElementById('new');
selectNew.addEventListener('click', () => { toggleDisplay('add-book', selectNew); });

const selectContact = document.getElementById('contact');
selectContact.addEventListener('click', () => { toggleDisplay('contact-info', selectContact); });

startTime();
toggleDisplay('awesome-list', selectList);
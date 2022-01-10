import { DateTime } from '../node_modules/luxon/src/luxon.js';

function startTime() {
  const now = DateTime.now();
  document.getElementById('date').innerHTML = now.toLocaleString(
    DateTime.DATETIME_MED
  );
  setTimeout(startTime, 1000);
}

function toggleDisplay(id, link) {
  const element = document.querySelectorAll('.content');
  element.forEach((section) => section.classList.add('hide'));
  const current = document.getElementById(id);
  current.classList.remove('hide');

  const menuLinks = document.querySelectorAll('.menu-links');
  menuLinks.forEach((selector) => selector.classList.remove('active'));
  link.classList.add('active');
}

export { startTime, toggleDisplay };

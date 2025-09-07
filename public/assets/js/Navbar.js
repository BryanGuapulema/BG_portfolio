'use strict';

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

const activatePage = (clickedIndex) => {
  pages.forEach((page, index) => {
    page.classList.toggle('active', index === clickedIndex);
    navigationLinks[index].classList.toggle('active', index === clickedIndex);
  });
};

navigationLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    activatePage(index);
    window.scrollTo(0, 0);
  });
});

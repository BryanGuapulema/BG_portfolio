'use strict';

// --- FILTER FUNCTIONALITY ---
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

// Toggle dropdown select
if (select) {
  select.addEventListener('click', () => select.classList.toggle('active'));
}

// Select category from dropdown
selectItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    select.classList.remove('active');
    filterFunc(selectedValue);
  });
});

// Filter function
function filterFunc(selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === 'all' || selectedValue === item.dataset.category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Filter buttons for large screens
let lastClickedBtn = filterBtn[0];
filterBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    btn.classList.add('active');
    lastClickedBtn = btn;
  });
});

// --- MODAL FUNCTIONALITY ---
const projectItems = document.querySelectorAll('.project-item a');

projectItems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const projectImg = link.querySelector('img').src;
    const projectTitle = link.querySelector('.project-title').innerText;
    const projectCategory = link.querySelector('.project-category').innerText;

    // Aquí se podría abrir un modal con la info del proyecto
    // Por ahora, solo mostramos un alert como ejemplo
    alert(`Project: ${projectTitle}\nCategory: ${projectCategory}`);
  });
});

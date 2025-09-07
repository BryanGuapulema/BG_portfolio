'use strict';

// === UTILS ===
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// === SIDEBAR ===
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// === TESTIMONIALS MODAL ===
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", function() {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// === CUSTOM SELECT & PORTFOLIO FILTER ===
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select.addEventListener("click", () => elementToggleFunc(select));

const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === "all" || item.dataset.category === selectedValue) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

selectItems.forEach(item => {
  item.addEventListener("click", function() {
    const value = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(value);
  });
});

let lastClickedBtn = filterBtn[0];
filterBtn.forEach(btn => {
  btn.addEventListener("click", function() {
    const value = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(value);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// === CONTACT FORM VALIDATION ===
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// === NAVBAR & PAGE NAVIGATION ===
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const setActiveLink = (pageId) => {
  pages.forEach((page, index) => {
    if (page.dataset.page === pageId) {
      page.classList.add("active");
      navigationLinks[index].classList.add("active");
    } else {
      page.classList.remove("active");
      navigationLinks[index].classList.remove("active");
    }
  });
};

// Intersection Observer para marcar sección visible
const observerOptions = { root: null, rootMargin: "0px", threshold: 0.6 };
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActiveLink(entry.target.dataset.page);
  });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
pages.forEach(page => observer.observe(page));

// Scroll smooth al hacer click
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    pages[index].scrollIntoView({ behavior: "smooth" });
    setActiveLink(pages[index].dataset.page);
  });
});

'use strict';

document.addEventListener("DOMContentLoaded", function () {

  // -------------------------
  // Helper function
  // -------------------------
  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  };

  // -------------------------
  // Sidebar toggle
  // -------------------------
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  }

  // -------------------------
  // Page navigation (Navbar)
  // -------------------------
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navigationLinks.forEach((link, i) => {
    link.addEventListener("click", function () {
      const target = this.innerText.toLowerCase();

      pages.forEach((page, j) => {
        if (page.dataset.page === target) {
          page.classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      });
    });
  });

  // -------------------------
  // Portfolio filter
  // -------------------------
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  const filterFunc = function (selectedValue) {
    filterItems.forEach((item) => {
      if (selectedValue === "all" || item.dataset.category === selectedValue) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  if (select) {
    select.addEventListener("click", () => elementToggleFunc(select));
  }

  selectItems.forEach((item) => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // -------------------------
  // Testimonials modal
  // -------------------------
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const testimonialsModalFunc = function () {
    if (modalContainer) modalContainer.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
  };

  testimonialsItem.forEach((item) => {
    item.addEventListener("click", function () {
      if (!modalImg || !modalTitle || !modalText) return;

      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");

      if (avatar) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
      }
      if (title) modalTitle.innerHTML = title.innerHTML;
      if (text) modalText.innerHTML = text.innerHTML;

      testimonialsModalFunc();
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

  // -------------------------
  // Contact form
  // -------------------------
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  formInputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (form && form.checkValidity()) {
        if (formBtn) formBtn.removeAttribute("disabled");
      } else {
        if (formBtn) formBtn.setAttribute("disabled", "");
      }
    });
  });

});

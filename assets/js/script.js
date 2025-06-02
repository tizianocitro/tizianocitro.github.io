'use strict';

const toggleElement = function (elem) {
  elem.classList.toggle("active");
}

const toggleNavbar = function (navToggleBtn, navbar) {
  toggleElement(navToggleBtn);
  toggleElement(navbar);
  toggleElement(document.body);
}

/**
 * Header sticky and go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * Navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  toggleNavbar(navToggleBtn, navbar);
});

// Close the navbar when a link is clicked in mobile view
const navLinks = document.querySelectorAll('.navbar-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleNavbar(navToggleBtn, navbar);
  });
});

/**
 * Skills toggle
 */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    toggleElement(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      toggleElement(toggleBtns[i]);
    }
    toggleElement(skillsBox);
  });
}

/**
 * Dark/light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  toggleElement(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * Check and apply last time selected theme from localStorage
 */
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Make education and experience headers collapsible
 */
document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling?.nextElementSibling;
    if (!content) {
      return;
    }
    const isExpanded = content.style.display !== "none";

    const tooltip = header.querySelector('.tooltip');

    const arrow = header.querySelector('.arrow');

    if (isExpanded) {
      content.style.display = "none";
      if (tooltip) {
        tooltip.textContent = 'Expand';
      }
      if (arrow) {
        arrow.classList.remove('expanded');
      }
    } else {
      content.style.display = "block";
      if (tooltip) {
        tooltip.textContent = 'Collapse';
      }
      if (arrow) {
        arrow.classList.add('expanded');
      }
    }
  });
});
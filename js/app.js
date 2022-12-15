const burgerBtn = document.querySelector("button");
const overlay = document.getElementById("overlay");
const navigationMenu = document.getElementById("navigationMenu");

// Burger Menu

burgerBtn.addEventListener("click", (e) => {
  if (burgerBtn.getAttribute("aria-expanded") == "true") {
    hideFunction();
  } else {
    showFunction();
  }
});

function hideFunction() {
  burgerBtn.setAttribute("aria-expanded", "false");

  setTimeout(() => {
    navigationMenu.classList.add("hidden");
  }, 500);

  overlay.classList.add("hidden");
}

function showFunction() {
  navigationMenu.classList.remove("hidden");

  setTimeout(() => {
    burgerBtn.setAttribute("aria-expanded", "true");
  }, 0);

  overlay.classList.remove("hidden");
}

// navigation links

const navLinks = document.querySelectorAll("#nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => link.classList.remove("text-accentColor"));
    console.log("click");

    link.classList.add("text-accentColor");
  });
});

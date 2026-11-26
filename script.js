const topbar = document.querySelector(".topbar");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function setMenuOpen(open) {
  nav.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => {
  setMenuOpen(!nav.classList.contains("open"));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("click", (event) => {
  if (nav.classList.contains("open") && !topbar.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 740 && nav.classList.contains("open")) {
    setMenuOpen(false);
  }
});

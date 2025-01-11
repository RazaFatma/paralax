const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const menuBtnIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", (e) => {
  sidebar.classList.toggle("active");

  const isOpen = sidebar.classList.contains("active");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  sidebar.classList.remove("active");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

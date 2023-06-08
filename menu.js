const openMenu = document.querySelector("[data-menuOpen]");
const closeMenu = document.querySelector("[data-menuClose]");
const menu = document.querySelectorAll(".menu__nav");
const openLogin = document.querySelector("[data-loginOpen]");
const closeLogin = document.querySelector("[data-loginClose]");
const modal = document.querySelector("[data-modal]");

openMenu.addEventListener("click", () => {
	menu.forEach((menu_element) => menu_element.classList.add("active"));
});

closeMenu.addEventListener("click", () => {
	menu.forEach((menu_element) => menu_element.classList.remove("active"));
});

openLogin.addEventListener("click", () => {
	modal.style.display = "block";
});

closeLogin.addEventListener("click", () => {
	modal.style.display = "none";
});

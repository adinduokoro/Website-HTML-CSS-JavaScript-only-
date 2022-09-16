const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

//Show the menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

// Show Active Menu
const highlightMenu = () => {
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('.#home-page')
  const aboutMenu = document.querySelector('.#about-page')
  const serviceMenu = document.querySelector('.service-page')
}
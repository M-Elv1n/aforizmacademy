const hb = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header");
const body = document.querySelector("body");
const idAbout = document.querySelector("#about-link")
const idMenu = document.querySelector("#menu-link")

hb.addEventListener("click", function () {
  menu.classList.toggle("active");
  body.classList.toggle("lock");
});

idAbout.addEventListener("click", function(){
    menu.classList.remove("active")
    body.classList.remove("lock")
})
const drop_down_menu__btn = document.querySelectorAll(".list");
const arrow = document.querySelectorAll(".arrow");
const drop_down_menu = document.querySelectorAll(".drop-down-menu__container");
const checkbox = document.querySelector(".header__checkbox");
const label__btn = document.querySelector(".header__label");
const nav__slider = document.querySelector(".header__nav");
const bk = document.querySelector(".bk");

drop_down_menu__btn.forEach((item, ind) => {
  item.addEventListener("click", function () {
    drop_down_menu[ind].classList.toggle("drop-down-menu__container--active");
    arrow[ind].classList.toggle("arrow--active");
  });
});

label__btn.addEventListener("click", function () {
  nav__slider.classList.toggle("header__nav--active");
  bk.classList.toggle("bk--active");
  document.body.classList.toggle("scroll-lock");
});

bk.addEventListener("click", function () {
  nav__slider.classList.toggle("header__nav--active");
  bk.classList.toggle("bk--active");
  checkbox.checked = false;
  document.body.classList.toggle("scroll-lock");
});

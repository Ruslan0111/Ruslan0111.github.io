let menuBurger = document.querySelector(".header__burger");
let header = document.querySelector(".header");

menuBurger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header__menu").classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
  header.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

let scrollDownBtn = document.querySelector(".main__scroll-down");

scrollDownBtn.addEventListener("click", function () {
  header.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

let menuList = document.querySelector(".header__menu");

menuList.addEventListener("click", function (e) {
  if (!e.target.closest("li")) return;

  e.preventDefault();
  let a = e.target.closest("li");
  let section = document.getElementById(a.dataset.href);
  section.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
  menuBurger.classList.toggle("active");
  document.querySelector(".header__menu").classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
});

const showMoreBtn = document.getElementById("show-more-btn");
const btnWrapper = document.querySelector(".project__card-coming");
const hiddenCards = document.querySelectorAll(".projects__card--hide");

showMoreBtn.addEventListener("click", function () {
  showMoreBtn.classList.add("loading");

  setTimeout(() => {
    hiddenCards.forEach((card) => {
      card.classList.remove("projects__card--hide");
      card.classList.add("projects__card--show");
    });

    btnWrapper.style.display = "none";
  }, 1000);
});

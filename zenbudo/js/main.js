/* ======== nav bar scroll reveal ========= */
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});
/* ======== nav bar scroll reveal end ========= */

/* ======= Competition Swiper Js ======= */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

/* ======= Testimonials Swiper Js ======= */
var swiper = new Swiper(".mySwipers", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },
});

/* Navbar  */
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

nav.querySelectorAll("li a").forEach((navLink) => {
  navLink.addEventListener("click", closeNav);
});

/* ===========dropdown menu ============== */
const dropDown = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".dropdown__menu");
const toggleArrow = document.getElementById("arrow");

const toggleDropDown = function () {
  dropDownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

dropDown.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropDown();
});

document.documentElement.addEventListener("click", function () {
  if (dropDownMenu.classList.contains("show")) {
    toggleDropDown();
  }
});

/* ======== Gsap ============= */
/* const container = document.querySelector(".services__section");

const sections = gsap.utils.toArray(".services__section .services__container");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth,
  },
}); */

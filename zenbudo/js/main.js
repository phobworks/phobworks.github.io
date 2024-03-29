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

const dropDowns = document.querySelectorAll(".dropdown");
const dropDownMenus = document.querySelectorAll(".dropdown__menu");
const toggleArrows = document.querySelectorAll(".fa-solid.fa-chevron-down");

const toggleDropDown = function (index) {
  dropDownMenus.forEach((menu, i) => {
    if (i !== index) {
      menu.classList.remove("show");
      toggleArrows[i].classList.remove("arrow");
    }
  });

  dropDownMenus[index].classList.toggle("show");
  toggleArrows[index].classList.toggle("arrow");
};

dropDowns.forEach((dropDown, index) => {
  dropDown.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropDown(index);
  });
});

document.documentElement.addEventListener("click", function () {
  dropDownMenus.forEach((menu, index) => {
    if (menu.classList.contains("show")) {
      toggleDropDown(index);
    }
  });
});

/* =========== Modal Section ============== */
// Get all buttons that open modals
// Get all buttons that open modals
var btns = document.querySelectorAll(".open-modal-btn");

// Attach click event listener to each button
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var modalId = this.getAttribute("data-modal-id");
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

// When the user clicks anywhere outside of the modal or on a close button, close the modal
document.body.addEventListener("click", function (event) {
  var modals = document.querySelectorAll(".modal");
  modals.forEach(function (modal) {
    if (event.target.closest(".close") && event.target.closest(".modal")) {
      modal.style.display = "none"; // Close the modal by setting display to "none"
    } else if (event.target === modal) {
      modal.style.display = "none"; // Close the modal if clicked outside of it
    }
  });
});

/* ===========submenu dropdown ============== */
/* const subMenu = document.querySelector(".submenu");
const submenuDropdown = document.querySelector(".submenu__dropdown");
const toggleArrows = document.getElementById("arrows");

const toggleSubMenu = function () {
  submenuDropdown.classList.toggle("shows");
  toggleArrows.classList.toggle("arrows");
};

subMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleSubMenu();
});

document.documentElement.addEventListener("click", function () {
  if (submenuDropdown.classList.contains("shows")) {
    toggleSubMenu();
  }
});
 */
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

/* gsap.registerPlugin(ScrollTrigger); */
//gsap code here!
/* gsap.to(".header__left", {
  ScrollTrigger: {
    trigger: ".header__left",
    start: "top center",
    end: "top 100px",
    scrub: true,
    mmarkers: true,
  },
  rotation: 360,
  ease: "none",
  duration: 3,
  opacity: 0,
  scale: 1,
}); */

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

/* ======== Banner Slider Starts =========== */
// Add this to your existing JavaScript code
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".slider__item");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");
const sliderDotsContainer = document.getElementById("sliderDots");

let currentIndex = 0;

function showSlide(index) {
  items.forEach((item) => item.classList.remove("active"));

  if (index >= items.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex = index;
  }

  items[currentIndex].classList.add("active");
  updateActiveDot();
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function createDots() {
  items.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-index", index);
    dot.addEventListener("click", () => showSlide(index));
    sliderDotsContainer.appendChild(dot);
  });
}

function updateActiveDot() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

createDots();
updateActiveDot();

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Show the first slide immediately when the page is loaded
showSlide(currentIndex);

// Auto-play the slider after the first slide is displayed
setInterval(nextSlide, 5000); // Change the interval as needed (milliseconds)

/* ======== Banner Slider Ends =========== */

/* ======== projects starts ======== */
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/* ======== projects starts ======== */

/* Navbar  */
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  nav.classList.remove("reverse"); // Remove reverse class in case it exists
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  // Add reverse animation class
  nav.classList.add("reverse");

  // Wait for the animation to finish before hiding the menu
  nav.addEventListener(
    "animationend",
    () => {
      nav.style.display = "none";
      openNavBtn.style.display = "inline-block";
      closeNavBtn.style.display = "none";
    },
    { once: true } // Ensures the event listener is removed after execution
  );
};

closeNavBtn.addEventListener("click", closeNav);

// Close nav on link click
nav.querySelectorAll("li a").forEach((navLink) => {
  navLink.addEventListener("click", closeNav);
});

/* ======== nav bar scroll reveal ========= */
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});
/* ======== nav bar scroll reveal end ========= */

/* ========  Newsletter Validation ======= */

/*========== Carousel =========*/

const slides = document.querySelectorAll(".carousel__slide");
const prevBtn = document.querySelector(".carousel__prev");
const nextBtn = document.querySelector(".carousel__next");
let currentSlide = 0;
let autoPlayInterval;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

// Function to change slide (next)
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Function to change slide (previous)
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-play function
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000); // Adjust interval as needed
}

// Pause auto-play when navigating manually
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Event listeners for buttons
nextBtn.addEventListener("click", () => {
  stopAutoPlay();
  nextSlide();
  startAutoPlay();
});

prevBtn.addEventListener("click", () => {
  stopAutoPlay();
  prevSlide();
  startAutoPlay();
});

// Initialize
showSlide(currentSlide);
startAutoPlay();

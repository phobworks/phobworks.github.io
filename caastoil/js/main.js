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

/* ======== Banner slider starts =========== */
let currentIndex = 1;
const totalSlides = 3;

function autoSlide() {
  document.getElementById(`one`).checked = currentIndex === 1;
  document.getElementById(`two`).checked = currentIndex === 2;
  document.getElementById(`three`).checked = currentIndex === 3;
  // document.getElementById(`four`).checked = currentIndex === 4;
  // document.getElementById(`five`).checked = currentIndex === 5;

  currentIndex = (currentIndex % totalSlides) + 1;
}

setInterval(autoSlide, 3000); // Change slides every 3 seconds

/* ======== Banner slider ends =========== */

/* =========== Gsap Animation ========== */

document.addEventListener("DOMContentLoaded", () => {
  const bannerSection = document.querySelector(".banner__tag");

  for (let i = 0; i < 3; i++) {
    const circle = document.createElement("div");
    circle.classList.add("banner__header-circle");

    // Set initial random position within banner__section
    circle.style.position = "absolute";
    circle.style.width = "30px";
    circle.style.height = "30px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "rgba(255, 0, 0, 0.15)";
    circle.style.zIndex = "1";
    circle.style.left = `${Math.random() * bannerSection.clientWidth}px`;
    circle.style.top = `${Math.random() * bannerSection.clientHeight}px`;
    circle.style.overFlowX = "hidden";

    bannerSection.appendChild(circle);

    gsap.to(circle, {
      x: "random(-50, 100)",
      y: "random(-50, 100)",
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      repeatRefresh: true, // Ensures new random values each cycle
    });
  }
});

/* ========== Services Tab section starts =========== */
function openServices(event, serviceName) {
  //Declare all variables
  var i, tabcontent, tablinks;

  //Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(serviceName).style.display = "block";
  event.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* ========== Services Tab section starts =========== */

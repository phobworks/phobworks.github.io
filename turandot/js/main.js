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
document
  .getElementById("formNewsletter")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector("#email");
    const feedbackContainer = document.createElement("div");
    feedbackContainer.id = "feedback";

    // Remove any existing feedback messages
    document.querySelector(".newsletter__form").prepend(feedbackContainer);
    feedbackContainer.innerHTML = "";

    try {
      const response = await fetch("newsletter.php", {
        method: "POST",
        body: new FormData(form),
      });

      const result = await response.json();

      if (result.success) {
        feedbackContainer.innerHTML = `<p class="success">${result.message}</p>`;
        emailInput.value = ""; // Clear the input
      } else {
        result.errors.forEach((error) => {
          feedbackContainer.innerHTML += `<p class="error">${error}</p>`;
        });
      }
    } catch (error) {
      feedbackContainer.innerHTML = `<p class="error">An unexpected error occurred. Please try again later.</p>`;
    }
  });

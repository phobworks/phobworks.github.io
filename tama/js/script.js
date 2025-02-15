/* Navbar  */
const nav = document.querySelector(".navlinks");
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

document.addEventListener("DOMContentLoaded", () => {
  const newsContainer = document.getElementById("news-container");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const itemsPerPage = 3;
  let currentPage = 1;
  let newsData = [];

  fetch("./js/news.json")
    .then((response) => response.json())
    .then((data) => {
      newsData = data;
      displayNews();
    });

  const displayNews = () => {
    newsContainer.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentNews = newsData.slice(start, end);

    currentNews.forEach((news) => {
      const newsContent = document.createElement("div");
      newsContent.classList.add("news__contents");
      newsContent.innerHTML = `
              <div class="news__topic">
                  <p>${news.topic}</p>
                  <a href=""><h6>${news.content}</h6></a>
              </div>
              <div class="news__img">
                  <img src="${news.image}" alt="">
              </div>
              <div class="date__author">
                  <div><p>${news.date}</p></div>
                  <div><p>${news.author}</p></div> 
              </div>
            
          `;
      newsContainer.appendChild(newsContent);
    });

    prevButton.disabled = currentPage === 1;
    nextButton.disabled =
      currentPage === Math.ceil(newsData.length / itemsPerPage);
  };

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayNews();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(newsData.length / itemsPerPage)) {
      currentPage++;
      displayNews();
    }
  });
});

// Initial zoom-out animation on page load
// gsap.fromTo(".banner__image img", { scale: 0 }, { scale: 1, duration: 5 });

// Scroll-triggered zoom-in animation
// gsap.fromTo(
//   ".banner__image img",
//   { scale: 1 },
//   {
//     scale: 0,
//     scrollTrigger: {
//       trigger: ".banner__image",
//       start: "top top",
//       end: "bottom top",
//       scrub: true,
//     },
//   }
// );

// document.addEventListener("DOMContentLoaded", () => {
//   const banner = document.querySelector(".banner__herotag");

// Slide in on page load
// gsap.fromTo(
//   banner,
//   { x: "-100%", opacity: 0 },
//   { x: "0%", opacity: 1, duration: 3, ease: "power2.out" }
// );

// Slide out on scroll out of the section

//   ScrollTrigger.create({
//     trigger: banner,
//     start: "top center",
//     end: "bottom top",
//     onLeave: () => gsap.to(banner, { x: "-100%", opacity: 0, duration: 2 }),
//     onEnterBack: () => gsap.to(banner, { x: "0%", opacity: 1, duration: 2 }),
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const player = document.querySelector(".player__slider-in");

//   gsap.fromTo(
//     player,
//     { x: "100%", opacity: 0 },
//     { x: "0%", opacity: 1, duration: 3, ease: "power2.out" }
//   );

//   ScrollTrigger.create({
//     trigger: player,
//     start: "top center",
//     end: "bottom top",
//     onLeave: () => gsap.to(player, { x: "100%", opacity: 0, duration: 2 }),
//     onEnterBack: () => gsap.to(player, { x: "0%", opacity: 1, duration: 2 }),
//   });
// });

function initializeForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous error messages
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.style.display = "none"));

    // Get form values
    const textarea = document.getElementById("textarea").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validation flags
    let isValid = true;

    // Validate message
    if (textarea === "") {
      document.getElementById("textareaError").innerText =
        "Message is required.";
      document.getElementById("textareaError").style.display = "block";
      isValid = false;
    }

    // Validate name
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required.";
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText =
        "Enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // Send form data using AJAX
      const formData = new FormData();
      formData.append("textarea", textarea);
      formData.append("name", name);
      formData.append("email", email);

      fetch("contact.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Message sent successfully!");
            form.reset();
          } else {
            alert("There was an error sending your message. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong. Please try again later.");
        });
    }
  });
}

// Fetch and include the form in the desired element
document.addEventListener("DOMContentLoaded", () => {
  fetch("form.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("formContainer").innerHTML = html;
      initializeForm(); // Call the initialization function for validation
    });
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.from(".herman", {
    duration: 10,
    x: "-50vw",
    rotation: -360,
    ease: "linear",
    scrollTrigger: {
      trigger: ".herman",
      markers: true,
      start: "top 75%",
      end: "bottom 25%",

      //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "restart pause reverse reset",
      //options: play, pause, resume, reset, restart, complete, reverse, none
    },
  });
});

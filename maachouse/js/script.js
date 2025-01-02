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

/* ======= Testimonials Swiper Js ======= */
document.addEventListener("DOMContentLoaded", () => {
  const newsContainer = document.getElementById("news-container");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const itemsPerPage = 2;
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
              <i class="fa-solid fa-quote-left"></i>
                <p>${news.content}</p>
              </div>
              <div class="news__img">
                  <img src="${news.image}" alt="">
              </div>
              <div class="testi__author">
                  <div><p>${news.name}</p></div>
                  <div><span>${news.title}</span></div> 
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

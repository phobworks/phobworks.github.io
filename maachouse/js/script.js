const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");
const navLinkItems = document.querySelectorAll(".nav__links li");

const openNav = () => {
  nav.style.display = "flex";
  nav.classList.remove("reverse"); // Remove reverse class in case it exists
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  // Reset the dropdown items' styles
  navLinkItems.forEach((item) => {
    item.style.transform = ""; // Reset transform
    item.style.opacity = ""; // Reset opacity
    item.style.animation = ""; // Reset animation
  });

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

// Remove specific styles on hover or click
const removeStylesOnInteraction = (event) => {
  const element = event.target.closest("li");
  if (element) {
    element.style.transform = "none"; // Removes transform
    element.style.opacity = "1"; // Makes it fully visible
    element.style.animation = "none"; // Stops animation
  }
};

// Attach event listeners to all .nav__links li elements
navLinkItems.forEach((item) => {
  item.addEventListener("mouseover", removeStylesOnInteraction); // On hover
  item.addEventListener("click", removeStylesOnInteraction); // On click
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
  let currentPage = 1;
  let newsData = [];

  // Calculate items per page based on screen width
  const calculateItemsPerPage = () => {
    return window.innerWidth < 768 ? 1 : 2; // 1 item for small screens, 2 for larger screens
  };

  let itemsPerPage = calculateItemsPerPage(); // Initial calculation

  // Fetch the news data
  fetch("./js/news.json")
    .then((response) => response.json())
    .then((data) => {
      newsData = data;
      displayNews();
    })
    .catch((error) => {
      console.error("Error fetching news data:", error);
    });

  // Function to display news items
  const displayNews = () => {
    if (!newsData.length) return;

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
        
        <div class="testi__author">
          <div><p>${news.name}</p></div>
          <div><span>${news.title}</span></div> 
        </div>
      `;
      newsContainer.appendChild(newsContent);
    });

    // Update button states
    prevButton.disabled = currentPage === 1;
    nextButton.disabled =
      currentPage === Math.ceil(newsData.length / itemsPerPage);
  };

  // Update itemsPerPage and redisplay on window resize
  const updateLayout = () => {
    const newItemsPerPage = calculateItemsPerPage();
    if (newItemsPerPage !== itemsPerPage) {
      itemsPerPage = newItemsPerPage;
      currentPage = 1; // Reset to first page
      displayNews();
    }
  };

  window.addEventListener("resize", updateLayout);

  // Pagination button event listeners
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

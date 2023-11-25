function toggleMenu() {
    var nav = document.querySelector('.nav');
    var menuIcon = document.querySelector('.menu-icon i');
  
    nav.classList.toggle('show');
  
    // Change the icon based on the menu state
    if (nav.classList.contains('show')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  }

  
  // Your existing JavaScript code

// Your existing JavaScript code

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Auto-slide every 5 seconds (5000 milliseconds)
setInterval(function () {
  changeSlide(1); // Change to the next slide
}, 5000);



const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const carouselChildrens = [...carousel.children];

        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            // Records the initial cursor and scroll position of the carousel
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if (!isDragging) return; // if isDragging is false return from here
            // Updates the scroll position of the carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const infiniteScroll = () => {
            // If the carousel is at the beginning, scroll to the end
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            // If the carousel is at the end, scroll to the beginning
            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            // Clear existing timeout & start autoplay if mouse is not hovering over carousel
            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        }

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
            // Autoplay the carousel after every 2500 ms
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        }
        autoPlay();

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);




        /* ============== Testimonials ==================== */
/* Testimonial SlideShow */
const testimonials = [ 
  {   
      image: "./images/user-5.jpg",
      text: "Dioka has been instrumental in improving our company's safety standards.",
      author: "Miss Bridget Kenneth" 
  },  
  { 
      image: "./images/user-4.jpg",
      text: "Amazing service! Highly recommended.", 
      author: "Jane Karibo" 
  },  
  { 
      image: "./images/user-3.jpg",
      text: "The best decision I've ever made!", 
      author: "Emeka Oti" 
  }
];
let currentTestimonial = 0;

const testimonialTextElem = document.getElementById("testimonial-text");
      const authorElem = document.getElementById("author");
      const testimonialImageElem = document.getElementById("testimonial-image");

      function showTestimonial() {
          const testimonial = testimonials[currentTestimonial];
          testimonialTextElem.innerText = testimonial.text;
          authorElem.innerText = `- ${testimonial.author}`;
          testimonialImageElem.src = testimonial.image;
      }

      function prevTestimonial() {
          currentTestimonial--;
          if (currentTestimonial < 0) {
              currentTestimonial = testimonials.length - 1;
          }
          showTestimonial();
      }

      function nextTestimonial() {
          currentTestimonial++;
          if (currentTestimonial >= testimonials.length) {
              currentTestimonial = 0;
          }
          showTestimonial();
      }

      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");

      prevBtn.addEventListener("click", prevTestimonial);
      nextBtn.addEventListener("click", nextTestimonial);

      showTestimonial();

/* =================== Testimonial Ends ============== */


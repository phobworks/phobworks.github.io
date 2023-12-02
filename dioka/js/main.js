// Nav Bar

const toggleBtn = document.querySelector('.menu');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
  toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};

// Nav Bar Ends

  
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



  // Your existing JavaScript code
  const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".contain .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
// Your existing JavaScript code




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


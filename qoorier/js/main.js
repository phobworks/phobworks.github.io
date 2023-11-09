document.addEventListener ("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const closeToggle = document.querySelector(".close-toggle")
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.add("active");
        menuToggle.style.display = "none"
        closeToggle.style.display = "block"
    });

    closeToggle.addEventListener("click", function () {
        menu.classList.remove('active');
        closeToggle.style.display = "none";
        menuToggle.style.display = "block";
    });
});


/* Testimonial SlideShow */
const testimonials = [ 
    {   
        image: "./images/user-2.jpg",
        text: "I couldn't be happier with the results!", 
        author: "Meg Kitchens" 
    },  
    { 
        image: "./images/services02.jpg",
        text: "Amazing service! Highly recommended.", 
        author: "Jane Karibo" 
    },  
    { 
        image: "./images/services02.jpg",
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
const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    //If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    //Navigation arrows 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //And if we need scrollbar

})

/* ============== Testimonials ==================== */
/* Testimonial SlideShow */
const testimonials = [ 
    {   
        image: "./images/user-5.jpg",
        text: "Finian Services has been instrumental in improving our company's safety standards.",
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
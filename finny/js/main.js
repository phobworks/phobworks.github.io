/* ============ Blur Header =========== */
const blurHeader = () => {
	const header = document.getElementById("header");
	this.scrollY >= 50
	? header.classList.add("blur-header"): header.classList.remove("blur-header");
}
window.addEventListener("scroll", blurHeader);

/* =================== Blur Header Ends ============== */


/* =================== Slide Scroll ============== */
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

/* =================== Slide Scroll Ends ============== */

/* ============== Testimonials ==================== */
/* Testimonial SlideShow */
const testimonials = [ 
    {   
        image: "./images/user-5.jpg",
        text: "Finny Services has been instrumental in improving our company's safety standards.",
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

/* =================== Scroll Up ============== */
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // when the scroll is higher than 350 vh, add the show-scroll class to the header tag
    this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener('scroll', scrollUp);

/* =================== Scroll up Ends ============== */

/* =================== Scroll Reveal ================ */
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 400,
    reset:true
});
sr.reveal(`.client__logo, .services__hearders, .services__hearders, .service__contents, 
.services__btn, .testimonial-container, .contact__section, .news__letter, .hero__tag1, 
.about__img, .schedule__container, .portfolio__train, .banner__image, .about__text, 
.portfolio__img, .about__imgages, .about__texting, .about__state, .mision__stat`, {origin: 'bottom'});
sr.reveal( {origin: 'left'});
sr.reveal(` `, {origin: 'right'});
/* =================== Scroll Reveal End ============= */
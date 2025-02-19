document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeToggle = document.querySelector(".close-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.add("active");
    menuToggle.style.display = "none";
    closeToggle.style.display = "block";
  });

  closeToggle.addEventListener("click", function () {
    menu.classList.remove("active");
    closeToggle.style.display = "none";
    menuToggle.style.display = "block";
  });
});

/* Testimonial SlideShow */
const testimonials = [
  {
    image: "./images/qoorier-logo.png",
    text: "I couldn't be happier with the results!",
    author: "Thelma Lawson",
  },
  {
    image: "./images/qoorier-logo.png",
    text: "Amazing service! Highly recommended.",
    author: "Honi Treatz",
  },
  {
    image: "./images/qoorier-logo.png",
    text: "The best decision I've ever made!",
    author: "Emeka Oti",
  },
  {
    image: "./images/qoorier-logo.png",
    text: "Qoorier services are fast and reliable",
    author: "Diobu Market",
  },
  {
    image: "./images/qoorier-logo.png",
    text: "Nice services from you guys",
    author: "Nwanyi Enugu",
  },
  {
    image: "./images/qoorier-logo.png",
    text: "Thank you for your timely delivery",
    author: "Belize Lounge",
  },
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

/* ================ Banner Text Animation =========== */
var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

/*  Booking Form Input Validation */

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let senderAddress = id("senderAddress"),
  senderPhone = id("senderPhone"),
  receiverAddress = id("receiverAddress"),
  receiverPhone = id("receiverPhone"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon");
failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(senderAddress, 0, "Address cannot be empty ");
  engine(receiverAddress, 1, "Address cannot be empty ");
  engine(senderPhone, 2, "Address cannot be empty ");
  engine(receiverPhone, 3, "Address cannot be empty ");
});

let engine = (id, serial, message) => {
  if (id.value === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
